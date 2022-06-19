import path from "path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import htmlWebpackPlugin from "html-webpack-plugin"

const module = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(path.resolve(), "dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({ template: "./src/index.html" })
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}

export default module