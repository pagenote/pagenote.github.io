import React from 'react'
export default function Footer() {
    return(
        <footer>
            <style jsx='true'>{`
                footer{
                  // display:flex;
                  // justify-content: space-around;
                  max-width: 800px;
                  margin:24px auto;
                  
                  font-size:12px;
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
                    border-top: 1px solid #ececec;
                  }
              `}</style>
            <footer>
                <div
                  className="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between flex-sm-items-center pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
                    <ul
                      className="list-style-none d-flex footer-links">
                        <li className="mr-3 mr-lg-0">© 2020 <a href="/">PAGENOTE</a></li>
                        <li className="mr-3 mr-lg-0">
                            <p>
                                <a  href="/hello.html">产品介绍</a>
                            </p>
                            <p>
                                <a href="/why">常见问题</a>
                            </p>
                            <p>
                                <a href="/release">更新日志</a>
                            </p>
                        </li>
                        <li className="mr-3 mr-lg-0">
                            <p>
                                <a href="/privacy">隐私协议</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="/donation">支持/贡献</a>
                            </p>
                            {/*<p>*/}
                            {/*    <a href="/pricing">高级定制</a>*/}
                            {/*</p>*/}
                        </li>
                        <li>
                            <p>
                                <a href="/developer">开发者</a>
                            </p>
                            <p>
                                用户群：769094377
                            </p>
                        </li>
                    </ul>
                </div>
            </footer>
            {/*<div>copyright@2020 rowthan</div>*/}

        </footer>
    )
}
