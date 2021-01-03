import {isLow} from "@/utils";
import LockSvg from '@/assets/icon/lock.svg'
import InstallBar from "@/components/InstallBar";
import {Modal} from "antd";

export default function CheckVersionIcon({children,version,title}) {
  const currentVersion = document.documentElement.dataset.version;
  const needUpload = isLow(currentVersion,version);

  const tip = function (){
    Modal.error({
      width: 500,
      maskClosable: true,
      icon: <LockSvg/>,
      content: <div> <h2>{title} <span style={{fontSize:'12px'}}>升级至 {version} 可使用</span></h2> <InstallBar/> </div>,
    })
  }

  return (
    needUpload? <span onClick={tip}><LockSvg/></span> : children
  )
}
