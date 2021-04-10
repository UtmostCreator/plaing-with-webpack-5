const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    console.log(env);
    return {
        mode: env.production ? 'production' : 'development', // can be done like this or like this
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
}