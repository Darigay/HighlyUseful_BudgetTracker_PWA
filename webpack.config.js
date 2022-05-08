const path = require("path");
// const webpack = require("webpack");

// plugins:[
//     new webpack.ProvidePlugin({
//       $: "jquery",
//       jQuery: "jquery"
//     }),
//   ],

module.exports = {
    entry: './public/js/index.js',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.js'
      },
    mode: 'development'

};