import webpack from 'webpack-stream';

const mode = {
  dev: 'development',
  prod: 'production',
};

const options = (isBuild) => ({
  mode: isBuild ? mode.prod : mode.dev,
  output: {
    filename: 'main.min.js',
  },
  devtool: isBuild ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
});

const js = () => (
  app.gulp.src(app.path.src.js)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>',
      }),
    ))
    .pipe(webpack(options(app.isBuild)))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
);

export default js;
