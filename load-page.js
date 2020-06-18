var pagenote = new PageNote({
    barInfo:{
        right:40,
        top:200,
        status: 'fold',
    },
});
const gh = new GitHub();
var id = window.location.search.match(/pagenote=(.*)$/);
var pagenoteId = id ? id[1] : '';
var sessionKey = 'pagenote'+pagenoteId;
// const issue = gh.getIssues('rowthan','pagenote');
// issue.getIssue(pagenoteId,function (err,result,request) {
//     if(result && result.body){
//         metaInfo = JSON.parse(result.body);
//         // document.getElementById('origin-url').innerText = metaInfo.url;
//         // document.getElementById('create-time').innerText = new Date(metaInfo.lastModified).toLocaleDateString();
//         if(metaInfo.html){
//             injectHtml(metaInfo.html)
//         }
//         else if(metaInfo.htmlUrl){
//             const htmlID = metaInfo.htmlUrl.match(/gists\/(\w+)$/)[1];
//             const gist = gh.getGist(htmlID);
//             gist.read(function (error,result,) {
//                 try{
//                     const html = result.files['pagenote.html'].content || '';
//                     injectHtml(html)
//                 }catch (e) {
//                     setError('解析失败')
//                 }
//             }).catch(function () {
//                 setError('加载失败')
//             })
//         }else if(metaInfo.commentHtmlId){
//             issue.getIssueComment(metaInfo.commentHtmlId,function (error,result) {
//                 const html = result.body;
//                 injectHtml(html);
//             }).catch(function (e) {
//                 setError(e)
//             })
//         } else {
//             injectHtml('');
//         }
//     }else{
//         setError('无数据信息')
//     }
// }).catch(function (e) {
//     setError('加载失败，服务有频控限制，稍后刷新页面试试？');
//     getCache();
// });

loadPageNote(pagenoteId,false);
var proxy = 'https://cors-anywhere.herokuapp.com/';

var times = 0;
function loadPageNote(id,useProxy) {
    if(times>4){
        return;
    }
    axios({
        method: 'get',
        headers: {
            Accept: 'application/json'
        },
        url: (useProxy?proxy:'')+'https://api.github.com/repos/rowthan/pagenote/issues/'+id,
    }).then( function(response) {
        if(response.data){
            const metaInfo = JSON.parse(response.data.body);
            injectHtml(metaInfo)
        }
    }).catch(function (e){
        console.error(e)
        var httpStatus = e.response.status;
        switch (httpStatus) {
            case 404:
                setError('加载失败，未知快照ID');
                break;
            default:
                setError('加载失败，稍后刷新页面试试？');
                getCache();
        }
        loadPageNote(id,!useProxy);
    }).finally(function () {
        times++
    });
}

function getCache() {
    var cache = sessionStorage.getItem(sessionKey);
    if (cache) {
        try {
            var info = JSON.parse(cache);
            injectHtml(info);
        }catch (e) {
            
        }
    }
}

function injectHtml(data) {
    document.getElementById('pagenote-share-content-container').innerHTML = data.html;
    pagenote.init(data);
    noteUser(data);
    document.title = data.title;
    sessionStorage.setItem(sessionKey,JSON.stringify(data));
}

function setError(msg) {
    document.getElementById('pagenote-share-content-container').innerHTML= '<p style="text-align: center">'+msg || '加载失败'+'</p>'
}

function noteUser(info) {
    const noteinfos = [
        {
            x:window.innerWidth - 320,
            y:20,
            text:'pagenote提示说明',
            tip:'<div>当前快照网页使用<a href="https://logike.cn/pagenote">pagenote</a>生成。内容公开可见，请注意个人信息保护。</div><span>与原网页<span id="origin-url">'+info.url+'</span>的作者无关，不对其内容负责。本页面谨用于分享查看，不代表原网页的的即时页面。创建时间 <time id="create-time">'+new Date(info.lastModified).toLocaleDateString()+'</time>',
            time: new Date().getTime(),
            id: 'body',
            isActive: true,
            bg:'#fbbc04',
            locked: true,
        }
    ];
    noteinfos.forEach(function (item) {
        pagenote.record(item,true);
    });
    setTimeout(()=>{
        pagenote.replay(0);
    },2000)
}