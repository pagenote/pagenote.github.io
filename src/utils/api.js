import Bridge from "./extensionBridge";
import { isLow } from "./index";

function checkValid(page){
  const {steps=[],snapshots=[],images=[]} = page || {}
  const hasData = !!(steps.length || snapshots.length);
  return hasData;
}

export let getBridge = function (){
  const element = document.getElementById('messenger');
  const bridgeCli = new Bridge(element,'page','extension');
  if(element){
    getBridge = function (){
      return bridgeCli
    }
  }
  return bridgeCli;
}

// 缓存数据，当服务不可用时使用该值
let tempDatas = {};
let tempGroups = {};
export const fetchGroups = function (groupType=2,callback){
  // if(tempGroups[groupType]){
  //   callback(tempGroups[groupType])
  //   return;
  // }
  // 立即返回缓存，并拉取最新数据，然后重置
  const bridge = getBridge()
  bridge.sendMessage('get_data',{},function (result){
    if(result && result.data){
      tempDatas = result.data;
    }

    const groupObject = {};
    Object.keys(tempDatas).forEach((key)=>{
      const currentPage = tempDatas[key].plainData || {};
      if(checkValid(currentPage)){
        try{
          switch (groupType){
            case 2:
              const categories = currentPage.categories || [];
              categories.forEach((category)=> {
                const groupKey = category ? category.trim() : '';
                if(groupKey){
                  groupObject[category] = groupObject[category] || [];
                  groupObject[category].push(currentPage);
                }
              });
              break;
            case 1: // date
              const groupKey = new Date(currentPage.lastModified).toLocaleDateString();
              groupObject[groupKey] = groupObject[groupKey] || [];
              groupObject[groupKey].push(currentPage);
              break;
            case 0:
              const domainKey = (currentPage.keys||['default'])[0];
              groupObject[domainKey] = groupObject[domainKey] || [];
              groupObject[domainKey].push(currentPage);
              break;
          }
        }catch (e) {
          console.error(e)
        }
      }
    });

    const groups = [];
    Object.keys(groupObject).forEach((key)=>{
      groups.push({
        label: key,
        pages: groupObject[key],
      })
    })
    groups.sort((pre,next)=>{
      return isLow(pre.label,next.label,'/') ? 1 : -1;
    })
    tempGroups[groupType] = groups;

    callback({
      groups: groups,
    });
  })
}

// bridge 模式只支持单通信通道，暂不支持并行发送，需要加锁处理
let requestLock = false;
// page
export const getPage = function (key){
  return new Promise((resolve,reject)=>{
    const bridge = getBridge();
    if(requestLock){
      setTimeout(()=>{
        getPage(key).then((result)=>{
          resolve(result)
        })
      },1000)
    }else{
      requestLock = true;
      bridge.sendMessage('get_page_detail',{key:key}, ({data})=>{
        requestLock = false;
        resolve(data ? data.plainData : null);
      })
    }
  });
}

export const savePage = function (key,plainData){
  getBridge().sendMessage('save_data',{
    key:key,
    plainData:plainData
  })
}

// 设置
export const getSetting= function (callback){
  const bridge = getBridge();
  bridge.sendMessage('get_setting',{},function ({data,type}){
    const setting = data || {};
    callback(setting);
  })
}

export const saveSetting = function (setting,callback){
  const bridge = getBridge();
  bridge.sendMessage('save_setting',{
    ...setting
  },function ({data,type}){
    const setting = data || {};
    callback(setting);
  })
}

export const resetSetting = function (callback){
  const bridge = getBridge();
  bridge.sendMessage('reset_setting',{},function ({data,type}){
    const setting = data || {};
    callback(setting);
  })
}

// 账户
export const fetchUserInfo = function (callback){
 getBridge().sendMessage('get_user_info',{},({data={},type})=>{
    callback(data);
  })
}

export const setUserInfo = function (values,callback){
  const bridge = getBridge();
  bridge.sendMessage('set_user_info',values,function ({data,type}){
    const setting = data || {};
    callback(setting);
  })
}

export const fetchCloudInfo = function (callback){
  getBridge().sendMessage('get_cloud_account',{},({data={},type})=>{
    callback(data);
  })
}



