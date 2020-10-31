import {connectServerNew,groupPagesNew,savePageNew} from './index_new';

// 兼容历史接口和新接口
export const connectServer = function (...arg) {
  connectServerNew(...arg);
};

export const groupPages = function (...arg) {
  return groupPagesNew(...arg);
};

export const savePage = function (...arg) {
  savePageNew(...arg);
};
