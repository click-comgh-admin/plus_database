const path = require('path'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    BundleTracker = require('webpack-bundle-tracker'),
    ALIAS = require('./webpack.alias.js'),
    ENTRIES = require('./webpack.entries.js');

// const json5 = require('json5');

module.exports = [{
    target: 'web',
    mode: 'development',
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    },
    entry: ENTRIES,
    devtool: "source-map",
    stats: 'errors-only',
    bail: true,
    output: {
        filename: 'public/static/app/[name]/js/[name].js',
        chunkFilename: 'public/static/app/[name]/js/[name].chunk.js',

        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },

        path: path.resolve(__dirname, 'dist'),
        clean: true,
        pathinfo: false,
        publicPath: '../../',
    },
    devServer: {
        inline: true,
        hot: true,
        port: 9001,
        writeToDisk: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            experimentalUseImportModule: true,
            filename: "public/static/app/[name]/css/[name].css",
            chunkFilename: "public/static/app/[name]/css/[id].css",
        }),
        new BundleTracker({ filename: './webpack-stats.json' }),
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
    },

}];