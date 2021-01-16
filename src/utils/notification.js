import localforage from "localforage";
import tips from './tips.json';


localforage.config({
  driver      : [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE], // 使用 WebSQL；也可以使用 setDriver()
  name        : 'pagenote',
  version     : 1.0,
  size        : 4980736, // 数据库的大小，单位为字节。现仅 WebSQL 可用
  storeName   : 'keyvaluepairs', // 仅接受字母，数字和下划线
  description : 'pagenote store'
});

const NOTIFICATION_KEY = 'notification_read_list';


export const getNotifications = function ({version,browser,extensionId},callback) {
  localforage.getItem(NOTIFICATION_KEY).then((result)=>{
    result = result || [];
    const items = [];
    for(let i=0; i<tips.all.length; i++){
      const tipItem = tips.all[i];
      if(!result.includes(tipItem.id)){
        items.push(tipItem)
      }
    }
    callback(items)
  }).catch(()=>{
    callback([])
  })
}

export const readNotifications = function (id,callback){
  localforage.getItem(NOTIFICATION_KEY).then((result)=>{
    result = result || [];
    if(!result.includes(id)){
      result.push(id);
    }
    localforage.setItem(NOTIFICATION_KEY,result).then(()=>{
      callback()
    })
  })
}
