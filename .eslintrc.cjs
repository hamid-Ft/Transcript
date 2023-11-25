module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020, // Allows for the parsing of modern JS
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ['prettier', '@typescript-eslint', 'react-refresh'],
    rules: {
        'react/no-danger': 'off', // it's self explainatory that no-danger should be used sparingly
        'react/react-in-jsx-scope': 'off', // next.js does not require react in most components
        'react/prop-types': 'off', // as long as TS strict mode is off this is not required
        'no-console': 'error',
        'prettier/prettier': 'error',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
