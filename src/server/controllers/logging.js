import { logger } from '../utils';

const postLogging = (req, res, next) => {
    const msg = req.body.msg;
    const level = req.body.level;

    switch (level) {
        case 'trace':
            logger.trace(msg);
            break;
        case 'debug':
            logger.debug(msg);
            break;
        case 'warn':
            logger.warn(msg);
            break;
        case 'error':
            logger.error(msg);
            break;
        case 'fatal':
            logger.fatal(msg);
            break;
        default:
        case 'info':
            logger.info(msg);
            break;
    }

    res.json({ success: true, action: 'log' });
};

export default { postLogging };
