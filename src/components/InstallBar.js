import React from 'react';
import { Modal, Button, Space } from 'antd';
import 'antd/dist/antd.css';

export default function InstallBar() {
  const offlineInstall = function () {
    console.log('不推荐');
      Modal.info({
          content: '离线安装包将无法获取升级更新，可能存在数据无法向上兼容等问题。0.11.4版本后将不再对外提供安装包。如果你确实有需要，请订阅https://www.wjx.top/m/89079908.aspx，我们将以邮件方式推送到你的邮箱。'
      });
  };
  return(
    <span>
      <style jsx='true'>{`
                .install-btns{
                  //display: inline-block;
                  //width: 220px;
                  //padding: 0 12px;
                  margin: 12px 0;
                }
                a.browser-install-btn{
                  display: inline-block;
                  margin-right: 12px;
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
              `}</style>
                    <span className="install-btns">
                        <a href="https://addons.mozilla.org/addon/page-note?src=external-release"
                           className="browser-install-btn firefox">
                            FireFox
                        </a>
                        <a href="https://chrome.google.com/webstore/detail/pagenotehighlight-and-tak/hpekbddiphlmlfjebppjhemobaopekmp?utm_source=blog"
                           className="browser-install-btn chrome">
                            Chrome
                        </a>
                        <a href="https://chrome.google.com/webstore/detail/pagenotehighlight-and-tak/hpekbddiphlmlfjebppjhemobaopekmp?utm_source=blog"
                           className="browser-install-btn edge">
                            Edge
                        </a>
                        <a className="browser-install-btn ee"
                           href="https://ext.chrome.360.cn/webstore/detail/gielpddfollkffnbiegekliodnahhpfa">360</a>
                        <a className="browser-install-btn offline" onClick={offlineInstall}>离线安装</a>
                    </span>
    </span>
  )
};
