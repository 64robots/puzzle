import path from 'path';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

const projectRoot = path.resolve(__dirname, '..');

export default {
  input: 'src/index.js',
  plugins: {
    preVue: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        entries: {
          '@': path.resolve(projectRoot, 'src'),
        },
      }),
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
      },
    },
    babel: {
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    },
  },
};
