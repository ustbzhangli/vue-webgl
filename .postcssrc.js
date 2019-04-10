// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    'postcss-px2rem': {remUnit: 75},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {browsers: ['last 7 versions']}
  }
}
