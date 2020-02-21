const mix = require('laravel-mix');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');
const path = require('path');

const webpackConfig = {
  resolve: {
    alias: {
      '@globals': path.resolve(__dirname, 'resources/react/js/'),
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: ['babel-loader'],
    }],
  },
};

mix
  .react('resources/react/js/index.js', 'public/app/js/index.js')
  // .tailwind('./tailwind.config.js')
  .webpackConfig(webpackConfig)
  .sourceMaps();


if (mix.inProduction()) {
  mix.version().purgeCss();
}
