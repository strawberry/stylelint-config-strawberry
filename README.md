# @strawberrydigital/stylelint-config

This package provides Strawberry's .stylelintrc as a shared npm module.

## Installation
Install with yarn:
```shell
$ yarn add --dev stylelint @strawberrydigital/stylelint-config
```

or install with npm:
```shell
$ npm install --save-dev stylelint @strawberrydigital/stylelint-config
```

## Usage
Add the preset to your styleslint config file (`.stylelintrc`, `stylelint.config.js`, etc.):
```json
{
    "extends": ["@strawberrydigital/stylelint-config"]
}
```

Add a linting script to your `package.json`:
```json
{
    "scripts": {
        "lint:styles": "stylelint **/*.scss"
    }
}
```

Run script with yarn:
```shell
$ yarn lint:styles
```

or run with npm:
```shell
$ npm run lint:styles
```
