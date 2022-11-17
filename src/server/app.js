import express from 'express';
import path from 'path';
import utils from './utils';
import middleware from './middleware/';
import routes from './routes';

export class App {
    port;
    app;

    constructor({ options } = {}) {
        this.port = options.port;
        this.app = express();
        this.middleware(middleware);
        this.routes([routes]);
    }

    middleware = (mware) => {
        this.app.use(
            '/static',
            express.static(path.join(__dirname, '../../dist/client'), {
                index: false,
            })
        );

        mware.forEach((m) => {
            this.app.use(m);
        });
    };

    routes = (routes) => {
        routes.forEach((r) => {
            this.app.use('/', r);
        });
    };

    start = () => {
        this.app.listen(this.port, () => {
            utils.logger.info(`Service running on port ${this.port}`);
        });
    };
}
