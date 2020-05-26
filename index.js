const {
    PLUGIN_NAME,
    NO_CALLBACK_ERROR
} = require('./constants');

/**
 * @class
 * A webpack plugin that enables running custom functionality once the build is finished.
 * @see https://webpack.js.org/api/plugins/
 */
class AfterBuildPlugin {
    /**
     * @param {Function} callback The function to run once the build is finished.
     */
    constructor(callback) {
        if (typeof callback !== 'function') {
            throw new Error(NO_CALLBACK_ERROR);
        }

        this.callback = callback;
    }

    /**
     * Registers the plugin to the post-build event.
     * @param {Object} compiler Webpack's compiler object.
     */
    apply(compiler) {
        compiler.hooks.done.tap(PLUGIN_NAME, this.callback);
    }
}

module.exports = AfterBuildPlugin;
