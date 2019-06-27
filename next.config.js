const nextRuntimeDotenv = require('next-runtime-dotenv');
const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const withConfig = nextRuntimeDotenv({
  path: '.env',
  public: [
    "OVERRIDE",
    "STATIC"
  ]
});

module.exports = withConfig(withTypescript({
  webpack(config, options) {
    config.plugins = config.plugins || [];
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config
  }
}));
