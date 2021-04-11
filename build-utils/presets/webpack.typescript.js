const path = require('path');

console.log(path.resolve(__dirname, "../../tsconfig.json"));

module.exports = (env) => {
    console.log(env);
    return {

        module: {
            rules: [{
                test: /\.ts$|\.tsx$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, "../../tsconfig.json")
                }
            }
        ]
        }
    }
};