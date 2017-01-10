module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
            , {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
}
