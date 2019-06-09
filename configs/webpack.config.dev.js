const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const SRC = path.resolve(__dirname, '../src')
const DIST = path.resolve(__dirname, '../app/js/renderer')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'false',
  entry: `${SRC}/renderer/app/index.js`,
  output: {
    path: DIST,
    filename: 'index.js'
  },
  node: {
    __dirname: false
  }
})
