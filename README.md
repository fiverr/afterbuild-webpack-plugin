<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]

# AfterBuild Webpack Plugin

A webpack plugin that registers a callback function to run after the build has finished

## Requirements

This module requires a minimum of Node 8.

## Getting Started

First, install the plugin as a dev dependency:

```console
$ npm i @fiverr/afterbuild-webpack-plugin -D
```

Then add it to the list of plugins in your `webpack` config:

```js
const AfterBuildPlugin = require('@fiverr/afterbuild-webpack-plugin');

module.exports = {
    plugins: [
        new AfterBuildPlugin(doSomething)
    ]
};
```

## Arguments

The plugin receieves one argument - a callback function to run once the build has finished.

## Example - Send a Slack notification post-build

```js
const { WebClient } = require('@slack/web-api');
const AfterBuildPlugin = require('@fiverr/afterbuild-webpack-plugin');

const slackClient = new WebClient('YOUR_SLACK_TOKEN');

const sendSlackNotification = () => {
    slackClient.chat.postMessage({
        text: 'Build passed successfully!',
        channel: 'webpack-builds'
    });
}

module.exports = {
    plugins: [
        new AfterBuildPlugin(sendSlackNotification)
    ]
};
```

[npm]: https://img.shields.io/npm/v/@fiverr/afterbuild-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/@fiverr/afterbuild-webpack-plugin
[node]: https://img.shields.io/node/v/@fiverr/afterbuild-webpack-plugin.svg
[node-url]: https://nodejs.org
