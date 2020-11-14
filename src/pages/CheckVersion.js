import InstallBar from "../components/InstallBar";


function isOldVersion(current,compareVersion) {
  if(!current){
    return true;
  }
  if(current===compareVersion){
    return false;
  }
  const firstVersion = current.split('.');
  const secondVersion = compareVersion.split('.');
  let isOld = false;
  for(let i=0; i<secondVersion.length; i++) {
    const preVersion = parseInt(firstVersion[i]);
    const nexVersion = parseInt(secondVersion[i]);
    if(preVersion<nexVersion){
      isOld = true;
      break;
    }
  }
  return isOld;
}

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
  const needUpload = isOldVersion(currentVersion,version);
  if(needUpload){
    console.log('需要升级后才可使用',currentVersion)
  }
  return needUpload? NeedUpload(currentVersion,version) : Com
}
