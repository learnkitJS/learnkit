module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: 'tsconfig.json',
        createDefaultProgram: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'max-lines-per-function': ['error', { max: 100, skipBlankLines: true, skipComments: true, IIFEs: true }],
        'prefer-const': ['off'],
        'new-cap': ['warn', { capIsNewExceptions: ['Router', 'BFS', 'DFS'] }],
        'handle-callback-err': ['warn'],
        'no-prototype-builtins': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-this-alias': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/promise-function-async': ['off'],
        '@typescript-eslint/ban-types': ['off'],
        '@typescript-eslint/ban-ts-ignore': ['off'],
        '@typescript-eslint/no-extraneous-class': ['off'],
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/strict-boolean-expressions': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/consistent-type-assertions': ['off'],
        '@typescript-eslint/no-unnecessary-type-assertion:': ['off'],
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-namespace': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/no-floating-promises': ['warn'],
    },
};
