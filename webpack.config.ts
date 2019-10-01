const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

const sourcePath = path.join(__dirname, './src/client')
const outPath = path.join(__dirname, './dist/assets')
const nodeEnv = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const isProd = env === 'prod'

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin

const pluginsByEnv = {
  prod: [
    new ExtractTextPlugin('css/[name].css')
  ],
  dev: []
}

module.exports = {
  context: sourcePath,
  entry: {
    main: ['react-hot-loader/patch', './index.tsx'],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'axios',
      'redux-axios-middleware',
    ],
  },
  output: {
    path: outPath,
    publicPath: '/assets/',
    filename: 'js/app.js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.less', '.module.less'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['main'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              module: 'es6',
              configFileName: 'src/client/tsconfig.json',
            },
          },
        ],
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      {
        test: /^((?!\.module).)*less$/,
        use: isProd
          ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'less-loader'],
            })
          : [
              'style-loader',
              { loader: 'css-loader', options: { sourceMap: true } },
              {
                loader: 'less-loader',
                options: { sourceMap: true, sourceComments: true },
              },
            ],
      },
      {
        test: /\.module.less$/,
        use: isProd
          ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { modules: true } },
                'less-loader',
              ],
            })
          : [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'less-loader',
                options: { sourceMap: true, sourceComments: true },
              },
            ],
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      { test: /\.png$/, loader: 'url-loader?limit=10000' },
      { test: /\.jpg$/, loader: 'file-loader' },
    ],
  },
  devServer: {
    hot: true, // enable HMR on the server
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: { context: sourcePath },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'process.env.ZENOPT_ENV': JSON.stringify(process.env.ZENOPT_ENV),
    }),
    new webpack.ProvidePlugin({ Promise: 'promise-polyfill' }),
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ].concat(pluginsByEnv[env]),
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
}
