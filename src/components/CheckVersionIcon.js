import {isLow} from "@/utils";
import LockSvg from '@/assets/icon/lock.svg'
import {Modal} from "antd";

export default function CheckVersionIcon({children,version,title}) {
  const currentVersion = document.documentElement.dataset.version;
  const needUpload = isLow(currentVersion,version);

  const tip = function (){
    Modal.error({
      maskClosable: true,
      icon: <LockSvg/>,
      content: <div> <h2>{title}</h2> <p>升级至 {version} 可使用。<a target='_blank' href="/release">去升级</a></p> </div>,
    })
  }

  return (
    needUpload? <span onClick={tip}><LockSvg/></span> : children
  )
}
