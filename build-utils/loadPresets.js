const { merge } = require('webpack-merge');

// current call
// npm run prod:compress -- --env presets=test,compress
const applyPresets = env => {
    let { presets } = env;
    if (!presets) {
        console.log('presets is empty,', 'EXITED');
        return {};
    }
    if (presets.indexOf(',') !== false) {
        presets = presets.split(',');
    }
    console.log('presets', presets);
    // console.log('env', env);
    // console.log('presets', presets);
    /** @type {string[]} */
    const mergedPresets = [].concat(...[presets]); //[presets]; // [].concat(...[presets]);
    console.log(mergedPresets);
    const mergedConfigs = mergedPresets.map(presetName => require(`./presets/webpack.${presetName}`)(env));

    // console.log(JSON.stringify(mergedConfigs));
    return merge({}, ...mergedConfigs);
}


module.exports = applyPresets;