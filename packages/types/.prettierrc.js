module.exports = {
    singleQuote: true,
    tabWidth: 4,
    printWidth: 120,
    arrowParens: 'always',
    semi: true,
    bracketSpacing: true,
    trailingComma: 'es5',
    overrides: [
        {
            files: ['*.yaml', '*.yml', '*.json', '*rc'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
