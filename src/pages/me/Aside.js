import ImportIcon from "../../assets/icon/import.svg";
import ExportIcon from "../../assets/icon/export.svg";
import Colors from "../../components/Colors";
import React from "react";
import Safe from "../../assets/icon/safe.svg";
import Setting from "../../assets/icon/setting.svg";
import AsideMore from '../../assets/icon/aside-more.svg'
import './aside.scss'

export default  function Aside({onImportData,exportData,pageSize,setColor}) {
  return(
    <aside className='aside-bar'>
      <div className='action-tips'>
        <label className='action-button'>
          <ImportIcon />导入<input id="import-data" type="file" style={{display: "none"}} onChange={onImportData} />
        </label>
        <span onClick={exportData} className='action-button'>
            <ExportIcon />备份
        </span>
        <p>
          共计 {pageSize} 个 page。
          <br/>注意定时备份，以免数据丢失。
        </p>
        {/*<span className="keyboard">↑</span > <span className="keyboard">↓</span>  to select pre/next item.*/}
      </div>
      <Colors onChoose={setColor}/>
      <div className='me-footer'>
        <div className='footer-tips'>
          <Safe/>数据存储于你浏览器本地
          <p>
            关注公众号
            <div>
              <img width={120} src="/img/wechat.jpg" alt=""/>
            </div>
          </p>
        </div>
      </div>
    </aside>
  )
}
