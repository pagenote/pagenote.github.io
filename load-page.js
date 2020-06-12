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
const issue = gh.getIssues('rowthan','rowthan.github.io');
var metaInfo = {};
issue.getIssue(pagenoteId,function (err,result,request) {
    if(result && result.body){
        metaInfo = JSON.parse(result.body);
        // document.getElementById('origin-url').innerText = metaInfo.url;
        // document.getElementById('create-time').innerText = new Date(metaInfo.lastModified).toLocaleDateString();
        if(metaInfo.html){
            injectHtml(metaInfo.html)
        }
        else if(metaInfo.htmlUrl){
            const htmlID = metaInfo.htmlUrl.match(/gists\/(\w+)$/)[1];
            const gist = gh.getGist(htmlID);
            gist.read(function (error,result,) {
                try{
                    const html = result.files['pagenote.html'].content || '';
                    injectHtml(html)
                }catch (e) {
                    setError('解析失败')
                }
            }).catch(function () {
                setError('加载失败')
            })
        }else if(metaInfo.commentHtmlId){
            issue.getIssueComment(metaInfo.commentHtmlId,function (error,result) {
                const html = result.body;
                injectHtml(html);
            }).catch(function (e) {
                setError(e)
            })
        } else {
            injectHtml('');
        }
    }else{
        setError('无数据信息')
    }
}).catch(function (e) {
    setError('加载失败，服务有频控限制，稍后刷新页面试试？');
    getCache();
});

function getCache() {
    var cache = sessionStorage.getItem(sessionKey);
    if (cache) {
        try {
            var info = JSON.parse(cache);
            document.getElementById('pagenote-share-content-container').innerHTML = info.html;
            pagenote.init(info);
            noteUser(info);
        }catch (e) {
            
        }
    }
}

function injectHtml(html) {
    metaInfo.html = html;
    document.getElementById('pagenote-share-content-container').innerHTML = html;
    pagenote.init(metaInfo);
    noteUser(metaInfo);
    sessionStorage.setItem(sessionKey,JSON.stringify(metaInfo));
}
function setError(msg) {
    document.getElementById('pagenote-share-content-container').innerHTML= '<p style="text-align: center">'+msg || '加载失败'+'</p>'
}

function noteUser(info) {
    console.log(info);
    const noteinfos = [
        {
            x:window.innerWidth - 320,
            y:20,
            text:'pagenote说明',
            tip:'<div>当前快照网页通过 <a href="https://logike.cn/pagenote">pagenote</a> 分享生成。内容公开可见，请注意个人信息保护。</div><span>pagenote 与原网页<span id="origin-url">'+info.url+'</span> 的作者无关，不对其内容负责。快照网页谨用于分享查看，不代表原网页的的即时页面。创建时间 <time id="create-time">'+new Date(info.lastModified)+'</time>',
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
    pagenote.replay(0);
}