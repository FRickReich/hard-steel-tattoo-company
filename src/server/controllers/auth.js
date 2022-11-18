import utils from '../utils';

const login = (req, res, next) => {
    utils.logger.info('logging in.');

    console.log(req.body);

    res.json({ success: true, token: 'xy' });
};

export default { login };
