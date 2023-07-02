const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: 'svelte-loader'
            }
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}