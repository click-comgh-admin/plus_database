const path = require('path'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    BundleTracker = require('webpack-bundle-tracker'),
    ALIAS = require('./webpack.alias.js'),
    ENTRIES = require('./webpack.entries.js');

module.exports = [{
    mode: 'development',
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    },
    entry: ENTRIES,
    devtool: "source-map",
    // stats: 'errors-only',
    output: {
        filename: '../../production_public/assets/v2/dev-files/js/[name].js',
        chunkFilename: '../../production_public/assets/v2/dev-files/js/[name].chunk.js',

        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },

        path: path.resolve(__dirname, '../dist'),
        clean: true,
        pathinfo: false,
        publicPath: '/',
    },
    plugins: [
        new MiniCssExtractPlugin({
            experimentalUseImportModule: true,
            filename: "../../production_public/assets/v2/dev-files/css/[name].css",
            chunkFilename: "../../production_public/assets/v2/dev-files/css/[id].css",
            ignoreOrder: true,
        }),
        new BundleTracker({
            filename: '../production_public/assets/v2/webpack-stats.json',
        }),
        // new BundleTracker({ filename: './webpack-stats.json' }),
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
        moduleIds: 'deterministic',
        // runtimeChunk: 'single',
        runtimeChunk: true, // for optimization
        removeAvailableModules: false, // for optimization
        removeEmptyChunks: false, // for optimization
        minimize: true,
        nodeEnv: 'development',
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