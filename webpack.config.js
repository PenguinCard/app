const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
    mode: "development",            // 모드 production(default), development, none
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            fs: false
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist',
        port: 9000,
        proxy: {
            '/api/': {
                target: 'http://localhost:5000',
                changeOrigin: true
            }
        },
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}

module.exports = webpackConfig
