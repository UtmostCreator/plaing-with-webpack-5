module.exports = (env) => {
    console.log(env);


    return {

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: ['ts-loader']
                },
            ]
        }
    }
};