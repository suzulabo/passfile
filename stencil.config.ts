import replace from '@rollup/plugin-replace';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const BASE_URL = 'https://suzulabo.github.io/passfile/';
const ROOT_PATH = new URL(BASE_URL).pathname;

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: BASE_URL,
      prerenderConfig: './prerender.config.ts',
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/common.scss'],
    }),
    replace({ __rootPath__: ROOT_PATH }),
  ],
  devServer: {
    openBrowser: false,
  },
  watchIgnoredRegex: null,
};
