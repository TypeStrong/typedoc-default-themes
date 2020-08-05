const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {InlineAssetsPlugin} = require('./InlineAssetsPlugin')
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
    name: 'Minimal Theme',

    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'minimal/assets/js/main.js'
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                loader: 'url-loader',
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'minimal/assets/css/main.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, 'src/default'),
                    from: 'partials/**/*.hbs',
                    to: path.resolve(__dirname, 'bin/minimal'),
                },
                {
                    context: path.resolve(__dirname, 'src/minimal'),
                    from: '**/*.hbs',
                    to: path.resolve(__dirname, 'bin/minimal'),
                    force: true, // override default partials
                },
            ],
        }),
        new InlineAssetsPlugin({
            patterns: [
                {
                    from: 'minimal/assets/js/main.js',
                    to: 'minimal/layouts/default.hbs',
                    pattern: '{{ JS }}'
                },
                {
                    from: 'minimal/assets/css/main.css',
                    to: 'minimal/layouts/default.hbs',
                    pattern: '{{ CSS }}'
                }
            ]
        }),
    ]
}

module.exports = merge(commonConfig, config);