import InstallBar from "../components/InstallBar";
import { isLow } from "@/utils";
import {useTranslation} from "react-i18next";


function NeedUpload(current,need) {
  return function(){
    const { t } = useTranslation();
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
        <InstallBar />
        <div>
          {
            current ?
              <div>
                <span>{t('current version')}<b>{current}</b> </span>
                <span>{t('required_version',{version:need})}</span>
                <div>
                  {t('no_latest_version_found')}
                </div>
              </div>
              :
            <span>{t('You should install PAGENOTE firstly')}</span>
          }
        </div>
        <div>
          <h3>{t('For Help')}</h3>
          <img width={80} src="/img/wechat.jpg" alt=""/>
        </div>
      </div>
    )
  }
}


export default function CheckVersion(Com,version) {
  const currentVersion = document.documentElement.dataset.version;
  const needUpload = isLow(currentVersion,version);
  return needUpload? NeedUpload(currentVersion,version) : Com
}
