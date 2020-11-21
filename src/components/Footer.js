import React from 'react'
export default function Footer() {
    return(
        <footer>
            <style jsx='true'>{`
                footer{
                  // display:flex;
                  // justify-content: space-around;
                  max-width: 800px;
                  margin: 0px auto 24px;
                  
                  font-size:12px;
                }
                
                .footer-links li p{
                   margin: 0.4em 0;
                }
               
                
                  .footer-links a{
                    margin-right:12px;
                    transition: color .2s;
                    color: #586069;
                    text-decoration: none;
                    line-height: 1.4em;
                  }
                  .footer-links a:hover{
                    text-decoration: underline;
                    color: #0366d6;
                  }
                  
                  .d-flex {display: flex!important;}
                  .list-style-none {list-style: none!important;}
                  .footer-links{
                    justify-content: space-between;
                    width: 100%;
                    margin: 0;
                    padding: 18px 0 12px 0;
                    // border-top: 1px solid #ececec;
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
            <footer>
                <div
                  className="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between flex-sm-items-center pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
                    <ul className="list-style-none d-flex footer-links">
                        <li className="mr-3 mr-lg-0">
                            <p>
                                © 2020 <a href="/">PAGENOTE</a>
                            </p>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <p>
                                <a  href="/">产品介绍</a>
                            </p>
                            <p>
                                <a href="/page?id=why">常见问题</a>
                            </p>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <p>
                                <a href="/privacy">隐私协议</a>
                            </p>
                            <p>
                                <a href="/release">更新日志</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="/donation">支持/捐赠</a>
                            </p>
                            <p>
                                <a href="/page?id=future">功能规划</a>
                            </p>
                        </li>
                        <li>
                            <p className='wechat-finder'>
                                微信公众号：pagenote
                                <img className='wechat-qrcode' src="/img/wechat.jpg" alt="微信公众号"/>
                            </p>
                            <p>
                                <a href="/page?id=developer">开发者</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </footer>
        </footer>
    )
}
