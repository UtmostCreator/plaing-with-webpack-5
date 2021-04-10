module.exports = () => ({
    target: 'web', // enabes hot module replacement
    output: {
        filename: '[name]_dev.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // how we wanna match this file
                use: ['style-loader', 'css-loader'] //how we wanna transform the file; css-loader gets the styles whereas style-loader injects in into the DOM
            }
        ]
    },
    devServer: {
        // hot: true // enabes hot module replacement
    }
})