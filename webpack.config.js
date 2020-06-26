const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        path: __dirname,
        filename: 'dist/build.js'
    },
    resolve: {
        alias: {
            "kotlin-library": path.resolve(__dirname, 'library/build/dist')
        },
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}