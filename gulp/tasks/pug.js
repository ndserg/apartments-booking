import gulppug from 'gulp-pug';
import data from 'gulp-data';
import htmlBeautify from 'gulp-html-beautify';
import fs from 'fs';

const beautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
  eol: '\n',
  indent_level: 0,
  indent_with_tabs: false,
  max_preserve_newlines: 1,
  preserve_newlines: true,
};

const getData = () => JSON.parse(fs.readFileSync(app.path.src.jsonData));

const pug = () => (
  app.gulp.src(app.path.src.pug)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'PUG',
        message: 'Error: <%= error.message %>',
      }),
    ))
    .pipe(data(getData))
    .pipe(app.plugins.if(!app.isBuild, gulppug({
      pretty: true,
    })))
    .pipe(app.plugins.if(app.isBuild, gulppug()))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.if(!app.isBuild, htmlBeautify(beautifyOptions)))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
);

export default pug;
