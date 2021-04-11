const webpack = require('webpack');
const { merge } = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env); // define function, get env and call it;
const presetsConfig = require('./build-utils/loadPresets');
// console.log(env);

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => { // {mode, presets} = {mode: 'production', presets: []}
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
                        // the same thing 1st is a shorthand
                        // use: ['url-loader'] == use: [{loader: 'url-loader'}]
                        // in production it is put to dist. In dev it will be saved in memory.
                        use: [{loader: 'url-loader', options: {
                            limit: 1024 // 5000 bytes; otherwise it (file-loader) takes a file to a dist directory and return the HASH url of where that file wil be
                        }}]
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin(),
            ],
            // resolve: {
            //     extensions: [".ts", ".tsx", ".js", ".css", ".html"]
            // }
        },
        modeConfig(getMode(env, true)),
        presetsConfig(env) // {env, args}
    ) // {mode, presets}
}