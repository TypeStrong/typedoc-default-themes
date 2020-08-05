const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
    name: 'Default Theme',

    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'default/assets/js/main.js'
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'default/assets/images',
                    publicPath: '../images',
                    name: '[name].[ext]',
                },
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'default/assets/css/main.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, 'src/default'),
                    from: '**/*.hbs',
                    to: path.resolve(__dirname, 'bin/default'),
                },
            ],
        }),
    ]
}

module.exports = merge(commonConfig, config);