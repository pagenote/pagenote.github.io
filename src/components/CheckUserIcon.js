import VipIcon from '@/assets/icon/heart.svg'
import {Modal, Tooltip} from "antd";
import {useTranslation} from "react-i18next";

const USER_TYPE = {
  NORMAL:1,
  DONATION:2,
  PAID:3,
}

export default function CheckUserIcon({children,needType,title}) {
  const { t } = useTranslation();

  const currentUserType = USER_TYPE.NORMAL;
  const needUpload = currentUserType<needType;

  const tip = function (){
    Modal.error({
      maskClosable: true,
      icon: <VipIcon/>,
      content: <div> <h2>{title}</h2> <p> {t('for donation user')} <a target='_blank' href="/release">{t('to upgrade')}</a></p> </div>,
    })
  }

  return (
    needUpload? <span onClick={tip}><VipIcon/></span> : children
  )
}
