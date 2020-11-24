import InstallBar from "../components/InstallBar";
import { isLow } from "../utils";


function NeedUpload(current,need) {
  return function(){
    return(
      <div className='need_upload'>
        <style jsx='true'>
          {
            `
            .need_upload{
                  margin: 120px auto;
                  text-align: center;
                  position: relative;
            }
          `
          }
        </style>
        <InstallBar></InstallBar>
        <p>
          {
            current ?
              <span>当前版本<b>{current}</b>, 至少需要升级到 <b>{need}</b>才可继续使用</span>
              :
            <span>你还没有安装 PAGENOTE，安装后再来使用吧 </span>
          }
        </p>
        <p>
          <h3>反馈</h3>
          <img width={80} src="/img/qq.png" alt=""/>
        </p>
      </div>
    )
  }
}


export default function CheckVersion(Com,version) {
  const currentVersion = document.documentElement.dataset.version || '';
  const needUpload = isLow(currentVersion,version);
  if(needUpload){
    console.log('需要升级后才可使用',currentVersion)
  }
  return needUpload? NeedUpload(currentVersion,version) : Com
}
