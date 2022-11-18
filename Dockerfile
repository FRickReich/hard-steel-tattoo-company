FROM node:16-stretch-slim as build

WORKDIR /app

RUN apt-get update && \
    apt-get install curl -y && \
    apt-get install chromium -y

ENV NODE_ENV development

COPY package*.json ./
COPY . .

RUN npm install && npm cache clean --force

USER node:node

FROM node:alpine as main

WORKDIR /app

RUN apk update && \
    apk add --no-cache curl && \
    npm cache clean --force

COPY --from=build /app /app

ENV NODE_ENV development
ENV PORT 3000

EXPOSE 3010

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \ 
    CMD curl --fail http://localhost:3010/health || exit 1 

CMD [ "npm", "run", "start:dev" ]