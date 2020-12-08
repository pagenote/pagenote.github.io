import { isLow } from "../utils";
import versions from '../../public/version.json'

export default function CheckVersionPart({children,version}) {
  const currentVersion = document.documentElement.dataset.version || '';
  const needUpload = isLow(currentVersion,version);
  const notPublic = isLow(versions.latest.version,version);
  return (
    <div className='version_check'>
      <style jsx='true'>
        {
          `
            .version_check{
              position:relative;
            }
            .version_check .mask{
              z-index:1;
              background: #ffffffa3;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              padding: 12px;
              font-size: 12px;
              text-align: center;
              color:#fff;
            }
            .version_check .mask::after{
              filter: blur(4px);
              content: '';
              /* width: 100%; */
              /* height: 100%; */
              z-index: -1;
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background: #929292b5;
            }
          `
        }
      </style>
      <div>
        {
          needUpload &&
          <div className='mask'>
            {
              notPublic?
                <span>
                  此功能还在开发中，预计将在 {version} 中可用
                </span>:
                <span>当前版本<b>{currentVersion}</b>, 需要<a href="/release">升级</a>到 <b>{version}</b>才可使用本模块</span>
            }
          </div>
        }
        {children}
      </div>
    </div>
  )
}
