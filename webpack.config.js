module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        path: __dirname,
        filename: 'dist/build.js'
    },
    resolve: {
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