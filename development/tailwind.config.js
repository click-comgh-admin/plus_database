/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    mode: 'jit',
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                mega: '2811px'
            },
            colors: {
                'akwaaba-orange': {
                    default: '#f97817',
                    light: '#ffa15b',
                    dark: '#d15900',
                    // 100: '#ffe4e6',
                    // 200: '#fecdd3',
                    // 300: '#fda4af',
                    // 400: '#fb7185',
                    // 500: '#f43f5e',
                    // 600: '#e11d48',
                    // 700: '#be123c',
                    // 800: '#9f1239',
                    // 900: '#881337',
                }
            },
        },
    },
    variants: {
        // textColor: ['active', 'focus', 'hover'],
        extend: {},
    },
    plugins: [],
}

// FOR VSCODE
// 1. Install stylelint extension code --install-extension stylelint.vscode-stylelint

// 2. Install stylelint recommended config npm install stylelint-config-recommended --save-dev

// 3. Add these two lines in your vscode USER SETTINGS

// "css.validate": false, // Disable css built-in lint
// "stylelint.enable": true, // Enable sytlelint
// "scss.validate": false, // Disable scss lint (optional if using scss)

// 4. Paste these lines into a file called .stylelintrc in your project's root directory, create it if it does not exist. More information about stylelint's configuration follow this link: https://stylelint.io/user-guide/

// {
//   "extends": "stylelint-config-recommended",
//   "rules": {
//     "at-rule-no-unknown": [ true, {
//       "ignoreAtRules": [
//         "extends",
//         "tailwind"
//       ]
//     }],
//     "block-no-empty": null,
//     "unit-allowed-list": ["em", "rem", "s"]
//   }
// }