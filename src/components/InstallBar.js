import React,{useState,useEffect,useRef}  from 'react';
// import { Modal } from 'antd';
// import 'antd/es/modal/style/index.less'
// import 'antd/es/modal/style/modal.less'
// import 'antd/lib/modal/style/index.css';
import {getBrowserTypeAndVersion} from '../utils/document'
import version from '../../public/version.json'

export default function InstallBar() {
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
        console.log(browserType)
        setType(browserType)
    });
  return(
    <span>
      <style jsx='true'>{`
                .install-btns{
                  //display: inline-block;
                  //width: 220px;
                  //padding: 0 12px;
                  margin: 12px 0;
                  text-align:center;
                }
                a.browser-install-btn{
                  display: inline-block;
                  position: relative;
                  margin-right: 12px;
                  margin-bottom:12px;
                  padding: 6px 20px;
                  font-size: 1em;
                  line-height: 20px;
                  border-radius: 24px;
                  box-shadow: 0 4px 10px 0 rgba(39, 43, 49, 0.2);
                  background-color: #00bdb8;
                  color: #fff;
                  font-weight: bolder;
                  text-decoration: none;
                  white-space: nowrap;
                }
                a.browser-install-btn.offline{
                    background:#7e8281;
                }
                a.browser-install-btn.ee{
                    background-color: #1976d2;
                }
                a.browser-install-btn.firefox {
                  background-color: #FF5722;
                }
                a.browser-install-btn.edge{
                  background-color: #003abd;
                }
                a.browser-install-btn.active{
                  line-height: 34px;
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
                    <span className="install-btns">
                        <a href="https://addons.mozilla.org/addon/page-note?src=external-release"
                           data-tip={`最新版本：${version.firefox}`}
                           className={`browser-install-btn firefox ${chromeType==='Firefox'?'active':''}`}>
                            FireFox
                        </a>
                        <a
                          data-tip={`最新版本：${version.chrome}`}
                          href="https://chrome.google.com/webstore/detail/pagenotehighlight-and-tak/hpekbddiphlmlfjebppjhemobaopekmp?utm_source=blog"
                           className={`browser-install-btn chrome ${chromeType==='Chrome'?'active':''}`}>
                            Chrome
                        </a>
                        <a
                          data-tip={`最新版本：${version.edge}`}
                          href="https://microsoftedge.microsoft.com/addons/detail/ablhdlecfphodoohfacojdngdfkgneaa"
                           className={`browser-install-btn edge ${chromeType==='Edge'?'active':''}`}>
                            Edge
                        </a>
                        <a
                          data-tip={`最新版本：${version.offline}`}
                          className={`browser-install-btn ee ${chromeType==='ee'?'active':''}`}
                           href="https://ext.chrome.360.cn/webstore/detail/gielpddfollkffnbiegekliodnahhpfa">360</a>
                        <a className="browser-install-btn offline wechat-finder" data-tip='最新版本：0.12.0'>
                            <span>
                                离线安装
                            </span>
                            <img className='wechat-qrcode' src="/img/wechat.jpg" alt="微信公众号"/>
                        </a>
                    </span>
    </span>
  )
};
