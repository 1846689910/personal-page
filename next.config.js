const { compose } = require("redux");
const loaderUtils = require("loader-utils");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withStylus = require("@zeit/next-stylus");

const enableShortHash = true;

// style files regexes
// const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
// const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
// const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less/;
// const stylusRegex = /\.styl$/;
const stylusModuleRegex = /\.module\.styl$/;

module.exports = compose(
  withCss,
  withSass,
  withLess,
  withStylus,
  withBundleAnalyzer,
)({
  // TODO: work same as `withCss(withBundleAnalyzer({...}))`
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: `${
      enableShortHash ? "" : "[name]__[local]"
    }"__[hash:base64:5]"`,
    getLocalIdent(loaderContext, localIdentName, localName, options) {
      /** 
      only apply the css module to the css files endswith .module.css, .module.scss, .module.sass, .module.less, .module.styl
      */
      return [
        cssModuleRegex,
        sassModuleRegex,
        lessModuleRegex,
        stylusModuleRegex,
      ].some((regex) => regex.test(loaderContext.resourcePath))
        ? loaderUtils.interpolateName(loaderContext, localIdentName, {
            // webpack in-built hash library, check doc: https://github.com/webpack/loader-utils#interpolatename
            content: localName,
          })
        : localName;
    },
  },
  webpack: (config) => config,
  exportPathMap: async () => {
    return {
      "/": { page: "/" },
      "/education": { page: "/education" },
      "/skills": { page: "/skills" },
      "/experiences": { page: "/experiences" },
      "/contact": { page: "/contact" },
    };
  },
});
