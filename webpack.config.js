const path = require('path');

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
    entry: [
        './src/app.ts' //app main file
    ],
    output: {
      path: root('dist'),
       filename: 'app.js',
     },

    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['', '.ts', '.vue', '.js']
    },

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'vue-ts' }
        ],
    },
    vue: {
      // load TypeScript in vue’s single file component
      loaders: { js: 'vue-ts-loader', },
      // make TS' generated code cooperate with vue-loader
      esModule: true
    },
}
