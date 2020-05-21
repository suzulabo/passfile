import { PrerenderConfig } from '@stencil/core';
export const config: PrerenderConfig = {
  entryUrls: [
    '/passfile/',
    '/passfile/gencode/',
    '/passfile/encrypt/',
    '/passfile/decrypt/',
  ],
  trailingSlash: true,

  hydrateOptions(url) {
    return {
      //runtimeLogging: true,
    };
  },
};
