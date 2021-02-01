import typescript from '@rollup/plugin-typescript';

import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const plugins = [
  postcss({
    plugins: [autoprefixer()],
    modules: true,
  }),
  typescript(),
];

const output = (name) => [
  {
    file: `dist/${name}.js`,
    format: 'cjs',
  },
  {
    file: `dist/${name}.es5.js`,
    format: 'es',
  },
];

export default [
  {
    input: 'src/Form/index.ts',
    output: output('form'),
    plugins,
  },
  {
    input: 'src/Icons/index.tsx',
    output: output('icons'),
    plugins,
  },
  {
    input: 'src/Intl/index.tsx',
    output: output('intl'),
    plugins,
  },
];
