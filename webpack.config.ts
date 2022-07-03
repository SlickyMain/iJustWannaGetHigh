import path from "path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import htmlWebpackPlugin from "html-webpack-plugin"
import terserWebpackPlugin from "terser-webpack-plugin"
import webpack from 'webpack'
import "webpack-dev-server"


const isProd = process.env.NODE_ENV === "production"

const module: webpack.Configuration = {
    mode: isProd ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(path.resolve(), "dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({ template: "./public/index.html" }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"]
            }
        ]
    }
}

if (isProd) {
    module.optimization = {
        minimizer: [new terserWebpackPlugin()],
    };
}
else {
    module.devServer = {
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    };
}

export default module