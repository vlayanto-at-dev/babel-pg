module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname + '/public/static',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
