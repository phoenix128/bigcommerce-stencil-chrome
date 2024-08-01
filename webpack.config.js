const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const mode = argv.mode || "development";
    return {
        entry: {
            background: "./src/background.js",
            panel: "./src/panel.js",
            devtools: "./src/devtools.js",
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        require("tailwindcss"),
                                        require("autoprefixer"),
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css",
            }),
            new HtmlWebpackPlugin({
                template: "public/panel.html",
                inject: "body",
            }),
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(mode),
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        resolve: {
            extensions: [".js", ".jsx"],
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, "dist"),
            },
            compress: true,
            port: 4000,
            open: true,
            hot: true,
            historyApiFallback: true,
            watchFiles: ["src/**/*", "public/**/*"],
        },
    };
};
