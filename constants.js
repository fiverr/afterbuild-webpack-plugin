/**
 * The plugin's name.
 * @type {String}
 */
const PLUGIN_NAME = 'AfterBuildPlugin';

/**
 * The error thrown when the plugin was initialized without a callback function.
 * @type {String}
 */
const NO_CALLBACK_ERROR = `${PLUGIN_NAME} expects a valid callback function`;

module.exports = {
    PLUGIN_NAME,
    NO_CALLBACK_ERROR
};
