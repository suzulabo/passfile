import { PassfileApp } from '../passfile/passfile-app';

let _app: PassfileApp;

export const setApp = (app: PassfileApp) => {
  _app = app;
};

export const getApp = () => {
  return _app;
};

const ROOT_PATH = (() => {
  const rootPath = '__rootPath__'; // will replace by rollup
  if (rootPath.endsWith('/')) {
    return rootPath.slice(0, -1);
  } else {
    return rootPath;
  }
})();

export const normPath = (p: string) => {
  return ROOT_PATH + p;
};
