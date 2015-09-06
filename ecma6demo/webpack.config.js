module.exports = {
  entry: {
    main: "./entry.js",
    test: "./mochademo/mochademo.js"
  },
  output: {
    //path: __dirname,
    filename: "[name]-bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}