import Bridge from "../../utils/extensionBridge";


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
export const fetchGroups = function (callback){
  getBridge().sendMessage('get_data',{},function (result){
    if(result && result.data){
      tempDatas = result.data;
    }

    const groupObject = {};
    Object.keys(tempDatas).forEach((key)=>{
      const currentPage = tempDatas[key].plainData || {};
      try{
        const categories = currentPage.categories || [];
        categories.forEach((category)=> {
          const groupKey = category ? category.trim() : '';
          if(groupKey){
            groupObject[category] = groupObject[category] || [];
            groupObject[category].push(currentPage);
          }
        });
      }catch (e) {
        console.error(e)
      }
    });

    const groups = [];
    Object.keys(groupObject).forEach((key)=>{
      groups.push({
        label: key,
        pages: groupObject[key],
      })
    })

    callback({
      groups: groups,
    });
  })
}

export const getPage = function (key,callback){
  const page = tempDatas[key] || {};
  callback(page.plainData);
}
