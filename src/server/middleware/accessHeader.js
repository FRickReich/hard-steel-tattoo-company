import utils from '../utils';

export const accessHeader = () => (req, res, next) => {
    utils.logger.info(`${req.method}: ${req.url}`);

    res.header('Access-Control-Allow-Origin');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    next();
};
