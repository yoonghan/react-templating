const nextRuntimeDotenv = require('next-runtime-dotenv');
//const withTypescript = require("@zeit/next-typescript");
//const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const withConfig = nextRuntimeDotenv({
  path: '.env',
  public: [
    "OVERRIDE"
  ]
});

// module.exports = withConfig(withTypescript({
//   webpack(config, options) {
//     config.plugins = config.plugins || [];
//     if (options.isServer) {
//       config.plugins.push(new ForkTsCheckerWebpackPlugin());
//     }
//     return config
//   }
// }));

module.exports = withConfig({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        module: 'empty'
      }
    }

    return config
  }
});
