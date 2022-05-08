const path = require("path");
// const webpack = require("webpack");

// plugins:[
//     new webpack.ProvidePlugin({
//       $: "jquery",
//       jQuery: "jquery"
//     }),
//   ],

const WebpackPwaManifest = require("webpack-pwa-manifest");
new WebpackPwaManifest({
  name: "Budget Tracker",
  short_name: "Budget",
  description: "An app that allows you to Track your income and expenses.",
  start_url: "../index.html",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  fingerprints: false,
  inject: false,
  icons: [{
    src: path.resolve("public/icons/icon-128x128"),
    sizes: [72, 96, 128],
    destination: path.join("public","icons")
  }]
})

module.exports = {
    entry: './public/js/index.js',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.js'
      },
    mode: 'development'

};