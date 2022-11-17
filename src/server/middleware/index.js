import bodyParser from 'body-parser';
import cors from 'cors';

import { accessHeader } from './accessHeader';

export default [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
    accessHeader(),
];
