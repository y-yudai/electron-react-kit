const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const SRC = path.resolve(__dirname, '../src')
const DIST = path.resolve(__dirname, '../app/js/main')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'false',
  target: 'electron-main',
  entry: `${SRC}/main/index.js`,
  output: {
    path: DIST,
    filename: 'index.js'
  },
  node: {
    __dirname: false,
    __filename: false
  }
})
