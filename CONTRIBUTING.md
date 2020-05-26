# Contributing

## Step-by-Step Instructions

1. Make sure all [tests](#testing) are passing successfully and all files are linted.
2. Make sure all changes are [well-documented](#documentation).
3. Bump the package's version, according to [SemVer](http://semver.org/) standards.
4. Once opened, make sure to address all comments, by either applying suggestions or discussing them with the commentors.
5. Make sure to update [CHANGELOG.md](#changelog).

## Testing

Passing tests and linting are a condition to introduce code into master, and publish a clean semver version.
Tests are set up and run using [Jest](https://jestjs.io/docs).
Code linting is set up and run using [ESLint](https://eslint.org/).

## Documentation

### Inline

We use [JSDoc](https://jsdoc.app/) to document our code internally, make sure to follow its structure and best practices.

### README

Make sure to keep the package's `README.md` file updated with all of your changes.

## Changelog

Every version of the package is documented in `CHANGELOG.md`, denoting all the changes introduced with that version.

The version's structure is:

### Title

Comprised of the version itself, and the date it was released.

### Body

The following categories are available, each an h3 (preceded with `###`) and consists of bullet points:

- Bug Fixes
- Improvements
- New Features
