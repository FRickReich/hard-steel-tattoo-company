import 'dotenv/config';
import log4js from 'log4js';

const serviceName = 'web';

log4js.configure({
    appenders: {
        [serviceName]: {
            type: process.env.SILENT === true ? 'stdout' : 'console',
        },
    },
    categories: { default: { appenders: [serviceName], level: 'info' } },
});

export default log4js.getLogger(serviceName);
