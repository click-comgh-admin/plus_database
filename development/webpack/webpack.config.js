const path = require('path'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    BundleTracker = require('webpack-bundle-tracker'),
    ALIAS = require('./webpack.alias.js'),
    ENTRIES = require('./webpack.entries.js');

// const json5 = require('json5');

module.exports = [{
    mode: 'production',
    performance: {
        maxEntrypointSize: 10024000,
        maxAssetSize: 10024000
    },
    entry: ENTRIES,
    devtool: "source-map",
    // devtool: false,
    // stats: 'errors-only',
    output: {
        filename: '../../production_public/assets/v2/prod-files/js/[name].js',
        chunkFilename: '../../production_public/assets/v2/prod-files/js/[name].chunk.js',
        // filename: '../../production_public/assets/v2/[name]/js/[name].js',
        // chunkFilename: '../../production_public/assets/v2/[name]/js/[name].chunk.js',

        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },

        path: path.resolve(__dirname, '../dist'),
        // path: path.resolve(__dirname, 'dist'),
        clean: true,
        pathinfo: false,
        publicPath: '/',
    },
    plugins: [
        new MiniCssExtractPlugin({
            experimentalUseImportModule: true,
            // filename: "../../production_public/assets/v2/[name]/css/[name].css",
            // chunkFilename: "../../production_public/assets/v2/[name]/css/[id].css",
            filename: "../../production_public/assets/v2/prod-files/css/[name].css",
            chunkFilename: "../../production_public/assets/v2/prod-files/css/[id].css",
        }),
        new BundleTracker({
            filename: '../production_public/assets/v2/webpack-stats.json',
            publicPath: 'https://clock.akwaabasoftware.com/',
        }),
    ],
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
    optimization: {
        // chunkIds: 'named',
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        minimize: true,
        // concatenateModules: true,
        nodeEnv: 'production',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `vendors.${packageName.replace("@", "")}`;
                    }
                },
            }
        },
        // splitChunks: {
        //     chunks: 'all',
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendors',
        //             chunks: 'all',
        //         },
        //     },
        // },
    },
    resolve: {
        alias: ALIAS,
        extensions: ['.tsx', '.ts', '.js'],
        fallback: { "buffer": false }
    },
    module: {
        rules: [{
            test: /\.(s(a|c)ss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.tsx?$/,
            use: [
                { loader: 'ts-loader', options: { transpileOnly: true } }
            ],
            exclude: /node_modules/,
        }, ],
    }
}];