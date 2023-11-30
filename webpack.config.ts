import path from 'path';
import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type TEnv = {
    mode?: 'production' | 'development';
};

const devServerConfig: DevServerConfiguration = {
    port: 4444,
    static: {
        directory: path.resolve(__dirname, 'public'),
    },
    hot: true,
    open: true,
    historyApiFallback: true
}

export default ({mode}: TEnv): Configuration => ({
    mode: mode || 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devServer: devServerConfig,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
});
