const path = require('path');

module.exports = {
  mode: 'development',
  entry: './slider.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};