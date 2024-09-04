const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.ts',  // Entry point for app
  output: {
    filename: 'bundle.js',  // Output filename
    path: path.resolve(__dirname, 'dist'),  // Output directory
    library: 'MyLibrary',  
    libraryTarget: 'umd',  // Universal Module Definition format
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: 'ts-loader',  
        exclude: /node_modules/, 
      },
    ],
  },
};
