//Webpack does not require a configuration file to run! However, a configuration file is a useful tool to configure the settings and is the best way to get the most out of webpack

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    //In the configuration file, the entry indicates the file webpack will use to start the dependency graph, or the entry point. We set ours to ./src/js/index.js.
    output: {
        filename: 'bundle.js',
        //The output is where the bundled files will be generated. The filename is set to main.js.
        path: path.resolve(__dirname, 'dist'),
        //The path sets the directory where the bundled files will be outputted. We set that to dist.
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
          title: 'Webpack Plugin',
        })
      ]
};
