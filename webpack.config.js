const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
        module: {
            rules: [
            {
                test: /\.(css)$/,
                use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                ],
            },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
    
}