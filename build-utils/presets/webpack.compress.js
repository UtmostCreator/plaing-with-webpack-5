const CompressionPlugin = require("compression-webpack-plugin");

// you can run it with anaylyzer like 'npm run prod:compress -- --env presets=analyze'
module.exports = (env) => {
    return {
        plugins: [new CompressionPlugin()],
    }
  };