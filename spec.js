const webpack = require('webpack');
const { NO_CALLBACK_ERROR } = require('./constants');
const AfterBuildPlugin = require('.');

const promisifiedWebpack = (config) => new Promise((resolve) => {
    try {
        webpack(config, () => {
            resolve();
        });
    } catch (e) {
        resolve();
    }
});

describe('AfterBuildPlugin', () => {
    describe('When passed a valid callback function', () => {
        let validConfig, invalidConfig, spy;

        beforeEach(() => {
            spy = jest.fn();
            validConfig = {
                plugins: [
                    new AfterBuildPlugin(spy)
                ]
            };
            invalidConfig = {
                badbadKey: true,
                plugins: [
                    new AfterBuildPlugin(spy)
                ]
            };
        });

        it('Registers the callback function only to the post-build event', async() => {
            await Promise.all([
                promisifiedWebpack(validConfig),
                promisifiedWebpack(invalidConfig)
            ]);

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('When passed an invalid callback function', () => {
        it.each([
            123,
            'abc',
            [],
            {},
            true,
            null,
            undefined
        ])('Throws an error (%p)', (value) => {
            const badUsage = () => new AfterBuildPlugin(value);

            expect(badUsage).toThrowError(NO_CALLBACK_ERROR);
        });
    });
});
