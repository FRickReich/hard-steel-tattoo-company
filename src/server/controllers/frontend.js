import 'dotenv/config';
import path from 'path';

const getFrontend = (req, res, next) => {
    res.status(200).sendFile(
        path.join(
            __dirname,
            process.env.NODE_ENV === 'development'
                ? '../../../dist/client'
                : '../../dist/client',
            'index.html'
        )
    );
};

export default { getFrontend };
