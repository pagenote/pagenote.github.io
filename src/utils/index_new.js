import Bridge from "./extensionBridge";

let bridgeCli = null;

export const connectServerNew = function(callback){
    bridgeCli = new Bridge(document.getElementById('messenger'),'page','extension');

    bridgeCli.addListener('get_data',function ({type,data}) {
        const pages = [];
        const pageObject = {};
        Object.keys(data).forEach((key)=>{
            const currentPage = data[key];
            try{
                const tempData = currentPage.plainData || {};
                tempData.keys = data[key].keys;
                pages.push(tempData);
                pageObject[key] = tempData;
            }catch (e) {
                console.error(e)
            }
        });
        callback({
            connected: true,
            pages: pages,
            data: pageObject,
            originData: data,
        });
    });

    bridgeCli.sendMessage('get_data');

    document.addEventListener('visibilitychange', ()=> {
        bridgeCli.sendMessage('get_data');
    });
};

export const groupPagesNew = function (groupType,pages) {
    const categories = new Map();
    const groupBy = (fn)=>{
        const groupPagesObject = {};
        let selectedGroupsKey = new Set();
        pages.forEach((page)=>{
            categories.set(page.category||'default',{
                label:page.category||'default',
                desc:'',
            });
            const groupKey = fn(page);
            const tempPages = groupPagesObject[groupKey]?groupPagesObject[groupKey].pages : [];

            groupPagesObject[groupKey] = {
                name: groupKey,
                pages: tempPages,
                matched: tempPages.length,
            };
            groupPagesObject[groupKey].pages.push(page);
            groupPagesObject[groupKey].matched = groupPagesObject[groupKey].pages.length;
            selectedGroupsKey.add(groupKey);
        });
        const arr = [...categories.values()];
        return {
            groupPagesObject:groupPagesObject,
            categories: arr,
            groupKeys: Array.from(selectedGroupsKey),
        }
    };

    let result = {};

    switch (groupType) {
        case 0:
            result = groupBy(function (page) {
                return page.keys[0]||'default';
            });
            break;
        case 1:
            result = groupBy(function (page) {
                let groupKey = 'unknow';
                try{
                    groupKey = new Date(page.lastModified).toLocaleDateString();
                }catch (e) {

                }
                return groupKey;
            });
            break;
        case 2:
            result = groupBy(function (page) {
                return page.category || 'default';
            });
            break;
        default:
            result = groupBy(function (page) {
                return page.keys[0]||'default';
            });
    }
    return result;
};

export const savePageNew = function (page) {
    const saveData = {
        key: page.url||page.key,
        keys: page.keys,
        plainData: page.plainData,
    };
    bridgeCli.sendMessage('save_data',saveData);
};

export const importData = function (datas,callback) {
    bridgeCli.sendMessage('import_datas',datas,function (result) {
        callback(result)
    })
};


// 新版API模式，支持切换为serverAPI，为云端版本做准备

// 返回所有的分组
export const getGroups = function (groupType='tag') {

};

// 根据分组返回，分组后的pages
export const getGroupAndPages = function (groupType='',groupKey='',size=10,) {

};

// 获取page详情
export const getPageDetail = function(){

};
