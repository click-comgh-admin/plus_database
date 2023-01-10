// const purgeCss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        cssnano: process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
    },
}