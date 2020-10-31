import React, {Component} from 'react'
import './why.scss'
import CommonPage from "../CommonPage";

export default class Why extends Component{
    constructor(props) {
        super(props);
        this.state={
            showCode: false,
        }
    }
    render() {
        return (
            <div className='why'>
                <div className='problem'>
                    <div className='question'>
                        <a href="#how-to-use">Q: 怎么使用？</a>
                    </div>
                    <div>
                        A: pagenote几乎没有学习成本，所有的功能，都可以从「勾选一段文本」开始。
                    </div>
                </div>
                {/*<div className='problem'>*/}
                {/*    <div className='question'>*/}
                {/*        <a href="#why-github">Q: 为什么要使用GitHub登录？</a>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        A: pagenote目前还没有自己的服务器，所有的数据都存储在用户本地。如果要分享，需要借助其他平台来存储数据。GitHub是目前的选择。*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='problem'>*/}
                {/*    <div className='question'>*/}
                {/*        <a href="#why-error">Q: 为什么分享会失败？</a>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        A: 可能有几个原因：*/}
                {/*        <ul>*/}
                {/*            <li>操作太频繁，GitHub对服务有频控限制，如果失败，可以尝试使用其他浏览器或稍后再试</li>*/}
                {/*            <li>网页内容太多，存储体积太大。建议选择「仅分享标记」再试</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='problem'>*/}
                {/*    <div className='question'>*/}
                {/*        <a href="#why-public">Q: 为什么分享数据是公开的？怎么删除？</a>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        A: 通过GitHub存储数据，本质是在pagenote仓库下创建一个 issue，默认情况下 issue 是公开可见的。所以请注意个人信息保护。*/}
                {/*        如果需要删除，可以在 <a href="https://github.com/rowthan/pagenote/issues">issue</a> 中找到你的分享，将其删除。*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className='problem'>
                    <div className='question'>
                        <a href="#why-no-server">Q: 会做pagenote自己的服务存储吗？</a>
                    </div>
                    <div>
                        A: 搭建自己的服务器，有一定的经济成本，当使用用户较多时，会考虑。如果你有这方面的需求，请 <a href="https://www.wjx.cn/jq/69876579.aspx">留言</a>
                        <p>正在规划支持 webdav 协议数据存储</p>
                    </div>
                </div>
                {/*<div className='problem'>*/}
                {/*    <div className='question'>*/}
                {/*        <a href="#why-not-same">Q: 有的网站快照不能百分百还原样式？</a>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        A: 快照分享网页主要是保证网页内容完全被缓存（文本内容），而存储样式需要更多的存储空间，权衡之下，样式使用了原网站的相对链接地址，没有完全缓存。当原网站样式文件（CSS）发生改变后，可能会导致快照网页样式错乱。*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className='problem'>
                    <div className='question'>
                        <a href="#how-to-donation">Q: 怎么参与贡献？</a>
                    </div>
                    <div>
                        A:
                        <a href="/donation">支持/贡献</a>
                    </div>
                </div>
                <div className='problem'>
                    <div className='question'>
                        <a href="#why-join-us">Q: 加入用户群可以做什么？</a>
                    </div>
                    <div>
                        A: 这是一个思想碰撞的地方，如果你有什么建议或点子，可以在这里分享，你的想法很可能被大家一起验证并出现在pagenote的功能中。当然作为早期的pagenote用户，加入用户群可以第一时间掌握最新功能动态和使用高级功能。
                    </div>
                </div>

            </div>
        )
    }
}
CommonPage(Why);
