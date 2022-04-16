import babelJest from 'babel-jest';

export default babelJest.default.createTransformer({
  presets: [
    [
      '@babel/preset-typescript',
      {
        jsxPragma: 'h',
        jsxPragmaFrag: 'Fragment',
      },
    ],
    '@babel/preset-env',
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'preact',
      },
    ],
    '@babel/plugin-proposal-class-properties',
  ],
  babelrc: false,
  configFile: false,
});
