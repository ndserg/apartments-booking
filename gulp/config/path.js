import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    manifest: `${srcFolder}/*.webmanifest`,
    favicon: `${srcFolder}/*.ico`,
    js: `${srcFolder}/js/main.js`,
    vendors: `${srcFolder}/vendors/**/*`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    pug: `${srcFolder}/*.pug`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    jsonData: `${srcFolder}/data/data.json`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    pug: `${srcFolder}/**/*.pug`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};

export default path;
