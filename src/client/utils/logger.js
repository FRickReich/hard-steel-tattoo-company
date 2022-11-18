import axios from 'axios';

const send = (level, msg) => {
    axios
        .post('/logging', {
            level,
            msg,
        })
        .catch((err) => console.log(err));
};

export const logger = {
    trace: (msg) => send('trace', msg),
    debug: (msg) => send('debug', msg),
    info: (msg) => send('info', msg),
    warn: (msg) => send('warn', msg),
    error: (msg) => send('error', msg),
    fatal: (msg) => send('fatal', msg),
};
