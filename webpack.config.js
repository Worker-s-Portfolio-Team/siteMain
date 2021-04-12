
let webpack = require('webpack');

module.exports = {
    entry: [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/jquery.easing/jquery.easing.min.js',
        './src/js/bootstrap.min.js',		
        './src/js/main.js'
    ],

    output: {
        path: __dirname + '/public/assets/js/',
        filename: 'bundle.js',
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        })
    ]
};
