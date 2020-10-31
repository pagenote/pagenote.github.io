import {Component} from 'react'
import GitHub from "github-api";
let gh = new GitHub();
export default class SnapshotRender extends Component{

    componentDidMount() {
        var pagenote = new PageNote();
        var id = window.location.search.match(/pagenote=(.*)$/);
        var pagenoteId = id ? id[1] : '';
        var sessionKey = 'pagenote'+pagenoteId;
        const issue = gh.getIssues('rowthan','rowthan.github.io');
        var metaInfo = {};
        issue.getIssue(pagenoteId,function (err,result,request) {
            if(result && result.body){
                metaInfo = JSON.parse(result.body);
                document.getElementById('origin-url').innerText = metaInfo.url;
                document.getElementById('create-time').innerText = new Date(metaInfo.lastModified).toLocaleDateString();
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
                }
            }else{
                setError('无数据信息')
            }
        }).catch(function (e) {
            setError('加载失败，服务有频控限制，稍后刷新页面试试？')
        });

        function injectHtml(html) {
            metaInfo.html = html;
            document.getElementById('pagenote-share-content-container').innerHTML = html;
            pagenote.init(metaInfo);
            sessionStorage.setItem(sessionKey,JSON.stringify(metaInfo));
        }

        function getCache() {
            var cache = sessionStorage.getItem(sessionKey);
            if(cache){
                try {
                    var info = JSON.parse(cache);
                    document.getElementById('pagenote-share-content-container').innerHTML = info.html;
                    pagenote.init(info);
                }catch (e) {

                }
            }
        }
        function setError(msg) {
            document.getElementById('pagenote-share-content-container').innerText= msg || '加载失败'
        }
    }

    render() {
       return (
           <div>
               <div className='tip'>
                   <div>
                       当前快照网页通过
                       <a href="https://logike.cn/pagenote">pagenote</a> 分享生成。内容公开可见，请注意个人信息保护。
                   </div>
                   <div>
                        <span>pagenote 与网页 <span id="origin-url"></span>的作者无关，不对其内容负责。快照网页谨用于阅读，不代表原网页的的即时页面。
                        安装pagenote插件可在原网页中查看分享标记。创建时间 <time id="create-time"></time>
                        </span>
                   </div>
               </div>
               <div id="pagenote-share-content-container">
                   <div>
                       尝试加载快照网页...
                       <Loading></Loading>
                   </div>
               </div>
               <NextScript>
                   <script src="/pagenote.js"></script>
               </NextScript>
           </div>
       )
    }
}