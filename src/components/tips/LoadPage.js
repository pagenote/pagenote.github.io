import React,{Fragment} from 'react';
export default function LoadPage({connected,emptyGroup,doConnect}) {
  return (
    <Fragment>
      {
        !connected &&
        <div className='empty-tip'>
          正在尝试连接你的<a
          href="https://addons.mozilla.org/zh-CN/firefox/addon/page-note/?src=external-me">PAGENOTE</a>
          请确保你已安装最新版本。
          <p>已安装最新版，无响应？
             <button onClick={doConnect}>手动连接试试</button>
          </p>
          <p>
            反馈
            <div>
              <img src="/img/wechat.jpg" alt=""/>
            </div>
          </p>
        </div>
      }
      {
        connected && emptyGroup &&
        <div className='empty-tip'>
          你还没有标记过网页，去任意网页创建你的标记吧。
        </div>
      }
    </Fragment>
  )
}
