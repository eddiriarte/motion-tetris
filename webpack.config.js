const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const entry = './projekt/skripte/index.js';

const output = {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist')
};

const devtool = 'source-map';
  
const devServer = {
  contentBase: './dist'
};

const plugins = [
  new HtmlWebPackPlugin({
    template: "./projekt/vorlagen/index.html",
    filename: "./index.html"
  })
];

const stylesheetsRule = {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
};

const imagesRule = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
};

const fontsRule = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'file-loader'
  ]
};

const htmlTemplatesRule = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
      options: { minimize: true }
    }
  ]
};

module.exports = {
  entry,

  output,
  
  devtool,
  
  devServer,
  
  mode: 'development',
  
  module: {
    rules: [
      stylesheetsRule,
      imagesRule,
      fontsRule,
      htmlTemplatesRule
    ]
  },

  plugins

};