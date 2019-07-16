const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const _root = path.resolve(__dirname, '.');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

module.exports = function(env) {
  const setup = {};

  // Set mode to enable (prod) / disable (dev) optimizations
  setup.mode = 'development';

  // Setup logging level
  setup.stats = 'normal';

  // Input files
  setup.entry = {
    'app': root('src', 'js', 'main.js')
  };

  // Output files
  setup.output = {
    filename: '[name].[hash].js',
    path: root('docs'),
    publicPath: '/'
  };

  // Load appropriate sourcemapping for environment
  setup.devtool = 'inline-source-map';

  // Setup dev server for local hosting
  const localport = 4200;

  setup.devServer = {
    contentBase: root('docs'),
    host: '0.0.0.0',
    public: require('os').hostname().toLowerCase() + ':' + localport,
    port: localport,
    compress: true,
    stats: 'minimal',
    historyApiFallback: true
  };

  // Plugin setup
  setup.plugins = [
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({ template: root('src', 'index.html') }),
    new CopyWebpackPlugin([{ from: root('src', 'audio'), to: root('docs', 'audio'), toType: 'dir', cache: true }]),
    new CopyWebpackPlugin([{ from: root('src', 'data'), to: root('docs', 'data'), toType: 'dir', cache: true }]),
    new CopyWebpackPlugin([{ from: root('src', 'images'), to: root('docs', 'images'), toType: 'dir', cache: true }])
  ];

  setup.plugins.push(new WriteFilePlugin());

  // Load all application files
  setup.module = {};
  setup.module.rules = [];

  // Load all fonts and images and place them in an "assets" folder
  setup.module.rules.push({
    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
    exclude: /node_modules/,
    loader: 'file-loader?name=assets/[name].[hash].[ext]'
  });

  return setup;
};
