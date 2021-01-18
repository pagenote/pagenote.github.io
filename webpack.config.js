const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const createHtml =require("./config/create-html");// html配置
const getEntry = require("./config/get-entry");
const entry = getEntry("./src/pages");
const htmlArr = createHtml("./src/pages");

const config = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader"
        }, {
          loader: "less-loader", options: {
            strictMath: true,
            noIeCompat: true
          }
        }]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /image.*\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      // 'react-dom': '@hot-loader/react-dom'
      '@': require('path').resolve(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: './dist',
    serveIndex: true,
    index: 'index.html',
    historyApiFallback: {
      // 使用正则匹配命中路由
      rewrites: [
        {
          from: /^\/me|new|page|release|setting|donation|rate|privacy|draft|about|doctor|uninstall|webpage$/,
          to: function(context) {
            return   context.parsedUrl.pathname+'.html';
          }
        }
      ]
    }
  },
  // TODO 区分dev prd
  externals: {
    // '@editorjs/editorjs': 'EditorJS',
    'react':'React',
    'react-dom': 'ReactDOM',
    // 'react-color': 'ReactColor'
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
    ...htmlArr,
    // new HtmlWebpackPlugin({
    //   // appMountId: 'app',
    //   template: "./src/index.html",
    //   filename: 'index.html',
    //   meta:{
    //     keywords: "webpack，react，github",
    //     description:  "这是一个webpack，react多页面架构"
    //   },
    // }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        editor: {
          name:'editors',
          test: /@editorjs/,
          chunks: 'all',
          minChunks: 1,
          priority: 0,
          reuseExistingChunk: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          filename:'vendors.js',
          minChunks: 2,
          chunks: 'all',
          priority: -10
        },
        installBar:{
          test: /installBar/,
          name: 'install',
          minChunks: 2,
          chunks: 'all',
          priority: 0
        },
        version:{
          test: /(version|changelog|notification)\.json/,
          name: 'version',
          minChunks: 2,
          chunks: 'all',
          priority: 0
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};
