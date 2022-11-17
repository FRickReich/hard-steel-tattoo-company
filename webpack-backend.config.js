const path = require('path');

module.exports = {
    target: 'node',
    externalsPresets: {
        node: true,
    },
    entry: path.resolve(__dirname, './src/server/index.js'),
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-export-default-from',
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist/server'),
        filename: 'index.bundle.js',
    },
};
