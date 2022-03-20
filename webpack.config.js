const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

rulesHtml = {
    test: /\.html$/i,
    loader: "html-loader",
};

rulesCss = {
    test: /.s?css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
};

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            rulesHtml,
            rulesCss,
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'index.html',template: './index.html'}),
        new MiniCssExtractPlugin()
    ],
};