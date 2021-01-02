import React,{useState,useEffect,useRef}  from 'react';
// import { Modal } from 'antd';
// import 'antd/es/modal/style/index.less'
// import 'antd/es/modal/style/modal.less'
// import 'antd/lib/modal/style/index.css';
import {getBrowserTypeAndVersion} from '@/utils/document'
import ChromeSvg from '@/assets/icon/image/chrome.svg'
import FirefoxSvg from '@/assets/icon/image/firefox.svg'
import EdgeSvg from '@/assets/icon/image/edge.svg'
import SanSvg from '@/assets/icon/image/360.svg'
import version from '../../public/version.json'
import HotSvg from '@/assets/icon/image/hot.svg'
import {isLow} from "@/utils";


let platforms = [
  {
    title:'Firefox',
    browser:'firefox',
    version:version.firefox,
    link:'https://addons.mozilla.org/addon/page-note?src=external-release',
    icon: FirefoxSvg,
  },
  {
    title:'Chrome',
    browser:'chrome',
    version:version.chrome,
    link:'https://chrome.google.com/webstore/detail/pagenotehighlight-and-tak/hpekbddiphlmlfjebppjhemobaopekmp?utm_source=blog',
    icon: ChromeSvg,
  },
  {
    title:'Edge',
    browser:'edge',
    version:version.edge,
    link:'https://microsoftedge.microsoft.com/addons/detail/ablhdlecfphodoohfacojdngdfkgneaa',
    icon: EdgeSvg,
  },
  {
    title:'360',
    browser:'ee',
    version:version["360"],
    link:'https://ext.chrome.360.cn/webstore/detail/gielpddfollkffnbiegekliodnahhpfa',
    icon: SanSvg
  }
]
platforms = platforms.sort((pre,next)=>{
  return isLow(pre.version,next.version)?1:-1
})

export default function InstallBar({children}) {
  const offlineInstall = function () {
    console.log('不推荐');
      // Modal.info({
      //     content: ''
      // });
    alert('离线安装包将无法获取升级更新，可能存在数据无法向上兼容等问题。0.12.0版本后将不再对外提供安装包。如果你确实有需要，请订阅https://www.wjx.top/m/89079908.aspx，我们将以邮件方式推送到你的邮箱。')
  };

  const [chromeType,setType] = useState('');
    useEffect(()=>{
        const browserType = getBrowserTypeAndVersion().type;
        setType(browserType.toLowerCase())
    });
  return(
    <div>
      <style jsx='true'>{`
          .install-btns{
            margin: 12px 0;
            text-align:center;
          }
          .install-slogan{
            text-align: center;
          }
          .slot{
            text-align: center;
          }
          a.browser-install-btn{
            display: inline-block;
            position: relative;
            margin-right: 12px;
            margin-bottom:12px;
            padding: 6px 20px;
            font-size: 1em;
            line-height: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px 0 rgba(39, 43, 49, 0.2);
            //background-color: #00bdb8;
            //color: #fff;
            font-weight: bolder;
            text-decoration: none;
            white-space: nowrap;
          }
          a.browser-install-btn.active{
             background: #00BCD4;
             color: #fff;
          }
          
          .wechat-finder{
            position:relative;
          }
          .wechat-finder .wechat-qrcode{
              display:none;
              width: 100px;
              height: 100px;
              position: absolute;
              top: -30px;
              left: 100%;
          }
          .wechat-finder:hover .wechat-qrcode{
              display: block;
          }
        `}</style>
          <h3 className="install-slogan">
            <strong className='slogan'>PAGENOTE 小而美的笔记工具</strong>
          </h3>
          <div className="install-btns">
            {
              platforms.map((item)=>(
                <a href={item.link}
                   key={item.link}
                   data-tip={`最新版本：${item.version}`}
                   className={`browser-install-btn firefox ${chromeType===item.browser?'active':''}`}
                >
                  <img  width={28} height={28} src={item.icon} alt={item.title}/>
                  <div>
                    <div>
                      {item.title}
                      {item.version===version.latest.version? <img src={HotSvg} alt="最新"/>:''}
                    </div>
                    {item.version}
                  </div>
                </a>
              ))
            }
          </div>
          <div className='slot'>
            {children}
          </div>
    </div>
  )
};
