const { merge } = require('webpack-merge');

const applyPresets = env => {
    const { presets } = env;
    // console.log('env', env);
    // console.log('presets', presets);
    /** @type {string[]} */
    const mergedPresets = [].concat(...[presets]);
    console.log(mergedPresets);
    const mergedConfigs = mergedPresets.map( presetName => require(`./presets/webpack.${presetName}`)(env));

    // console.log(JSON.stringify(mergedConfigs));
    return merge({}, ...mergedConfigs);
}


module.exports = applyPresets;