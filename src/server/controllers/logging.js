import utils from './../utils';

const postLogging = (req, res, next) => {
    const msg = req.body.msg;
    const level = req.body.level || 'info';

    switch (level) {
        case 'trace':
            utils.logger.trace(msg);
            break;
        case 'debug':
            utils.logger.debug(msg);
            break;
        case 'warn':
            utils.logger.warn(msg);
            break;
        case 'error':
            utils.logger.error(msg);
            break;
        case 'fatal':
            utils.logger.fatal(msg);
            break;
        default:
        case 'info':
            utils.logger.info(msg);
            break;
    }

    res.json({ success: true, action: 'log' });
};

export default { postLogging };
