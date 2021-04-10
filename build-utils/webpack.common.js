const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => (
    {
        mode: getMode(env), // can be done like this or like this
        // --mode production --node-env production
        // --mode development  --node-env development
        // --mode production --node-env production
        // --mode development --node-env development
        output: {
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin(),
        ]
    }
)