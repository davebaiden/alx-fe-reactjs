module.exports = {
  presets: [
    '@babel/preset-env',           // Transforms modern JS
    ['@babel/preset-react', {      // Transforms JSX
      runtime: 'automatic'         // React 17+ JSX transform
    }]
  ],
};
