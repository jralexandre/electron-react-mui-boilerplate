/* eslint global-require: off, import/no-dynamic-require: off */

import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import { spawn } from 'child_process';

import WebpackConfigBase from './webpack.config.base';

const port = +(process.env.PORT || 1212);
const publicPath = `http://localhost:${port}/dist`;

export default merge.smart(WebpackConfigBase, {
    devtool: 'inline-source-map',
    mode: 'development',
    target: 'electron-renderer',
    entry: [
        `webpack-dev-server/client?http://localhost:${port}/`,
        'webpack/hot/only-dev-server',
        require.resolve('../app/index.tsx')
    ],
    output: {
        publicPath: `http://localhost:${port}/dist/`,
        filename: 'renderer.dev.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    devServer: {
        port,
        publicPath,
        compress: true,
        noInfo: false,
        stats: 'errors-only',
        inline: true,
        lazy: false,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        contentBase: path.join(__dirname, 'dist'),
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 100
        },
        historyApiFallback: {
            verbose: true
        },
        before(): void {
            if (process.env.START_HOT) {
                console.log('Starting Main Process...');
                spawn('npm', ['run', 'start-main-dev'], {
                    shell: true,
                    env: process.env,
                    stdio: 'inherit'
                })
                    .on('close', code => process.exit(code))
                    .on('error', spawnError => console.error(spawnError));
            }
        }
    }
});
