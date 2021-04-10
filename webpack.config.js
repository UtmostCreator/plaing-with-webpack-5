const webpack = require('webpack');
const { merge } = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env); // define function, get env and call it;
// console.log(env);

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => {
    // console.log(mode, presets);
    let getMode = (mode, short = false) => {
        return short ? (mode.production ? 'prod' : 'dev') : (mode.production ? 'production' : 'development')
    };
    console.log(env, args);
    console.log(env.development);
    return merge(
        {
            mode: getMode(env), // can be done like this or like this
            // --mode production --node-env production
            // --mode development  --node-env development
            // --mode production --node-env production
            // --mode development --node-env development
            output: {
                filename: 'bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: ['url-loader']
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin(),
            ]
        },
        modeConfig(getMode(env, true))
    ) // {mode, presets}
}