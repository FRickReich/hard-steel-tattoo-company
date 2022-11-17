import utils from '../utils';

const getHealth = (req, res, next) => {
    utils.logger.info('health check performed.');

    res.json({ success: true });
};

export default { getHealth };
