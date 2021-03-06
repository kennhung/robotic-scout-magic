module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'mocha': true,
    },
    'globals': {
        '$production': true
    },
    'extends': 'eslint:recommended',
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-unused-vars': 'off'
    }
};