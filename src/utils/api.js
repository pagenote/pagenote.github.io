import Bridge from "./extensionBridge";
import { isLow } from "./index";
import {funDownload} from "@/utils/document";

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
let tempGroupsObject = {};
let tempGroupsArray = [];
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
    tempGroupsArray = groups;
    tempGroupsObject[groupType] = groups;

    callback({
      groups: groups,
    });
  })
}

// 过滤信息
export const filterGroups = function (keyword,callback){
  if(!keyword){
    callback(tempGroupsArray)
    return tempGroupsArray;
  }
  try{
    const resultGroups = [];
    tempGroupsArray.forEach((group)=>{
      const tempGroupPages = group.pages.filter((page)=>{
        const plainData = page;
        if(plainData.description.indexOf(keyword)>-1){
          return true;
        }
        else if(plainData.note.indexOf(keyword)>-1){
          return true;
        }
        else if(plainData.title.indexOf(keyword)>-1){
          return true;
        }
        else if(plainData.url.indexOf(keyword)>-1){
          return true;
        }
        let stepMatched = plainData.steps.filter((step)=>{

          return (step.text||'').indexOf(keyword)>-1
            || (step.tip||'').indexOf(keyword)>-1
        })
        return stepMatched.length>0;
      })
      if(tempGroupPages.length){
        resultGroups.push({
          label: group.label,
          pages: tempGroupPages,
        })
      }
    })
    callback(resultGroups);
  }catch (e){
    callback(tempGroupsArray);
  }
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

export const exportData = ()=>{
  const pageCnt = Object.keys(tempDatas).length;
  const exportData = encodeURIComponent(JSON.stringify(tempDatas));
  const version = document.documentElement.dataset.version || '';
  funDownload(exportData,`${version}_${pageCnt}.pagenote`);
};

export const onImportData = (e)=>{
  var selectedFile = e.target.files[0];

  var reader = new FileReader();//这是核心,读取操作就是由它完成.
  reader.readAsText(selectedFile);//读取文件的内容,也可以读取文件的URL
  reader.onload = function () {
    let datas = null;
    try{
      datas = JSON.parse(decodeURIComponent(this.result));
    }catch (e) {
      console.log(e,this.result);
      alert('解析错误，请检查备份文件是否有损坏');
    }
    if(datas){
      const result =  window.confirm('确认导入？可能会覆盖现有数据');
      if(result){
        getBridge().sendMessage('import_datas',datas)
      }
    }
  }
};

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


// paper
export const getPaperDetail = function (key,callback){
  let paper = {
    data:{},
  };
  try{
    paper = JSON.parse(localStorage.getItem(key))
  }catch (e){

  }
  callback(paper)

}

export const savePaper = function (key,data,callback){
  const blocks = data.blocks || [];
  localStorage.setItem(key,JSON.stringify({
    data:data,
    id: key,
    lastModified: new Date().getTime(),
    title: blocks[0]?blocks[0].data.text:'',
    abstract: blocks[1]?blocks[1].data.text:'',
  }));
  callback()
}

export const deletePaper = function (key,callback){
  localStorage.removeItem(key);
  callback();
}

export const getPapers = function (callback){
  const datas = localStorage.valueOf();
  const result = [];
  for(let i in datas ){
    const key = /^paper_(.*)/.exec(i);
    try{
      if(key && key[1]){
        const a = JSON.parse(datas[i]);
        result.push(a)
      }
    }catch (e){
      if(key[1]){
        localStorage.removeItem(i)
      }
    }
  }
  callback(result);
}



