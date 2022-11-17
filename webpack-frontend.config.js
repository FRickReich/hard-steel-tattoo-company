const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);

    return prev;
}, {});

module.exports = {
    entry: path.resolve(__dirname, './src/client/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: { limit: false },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist/client'),
        filename: 'index.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: '/static/',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './public/static/favicon.png',
                    to: 'favicon.png',
                },
                // {
                //     from: './node_modules/antd/dist/antd.css',
                //     to: 'ant.css',
                // },
                // {
                //     from: './public/static/fonts',
                //     to: 'fonts',
                // },
            ],
        }),
        new webpack.DefinePlugin(envKeys),
    ],
};
