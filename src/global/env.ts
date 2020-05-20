import { PassfileApp } from '../passfile/passfile-app';

let _app: PassfileApp;

export const setApp = (app: PassfileApp) => {
  _app = app;
};

export const getApp = () => {
  return _app;
};
