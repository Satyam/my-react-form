import typescript from '@rollup/plugin-typescript';

import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      plugins: [autoprefixer()],
      modules: true,
    }),
    typescript({
      exclude: ['*.module.css'],
    }),
  ],
};
