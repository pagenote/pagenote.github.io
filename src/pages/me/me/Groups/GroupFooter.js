import ImportIcon from "@/assets/icon/import.svg";
import {exportData, onImportData} from "@/utils/api";
import ExportIcon from "@/assets/icon/export.svg";
import React from "react";

export default function GroupFooter(){
  return(
    <div className='group-footer'>
      <label className='action-button'>
        <ImportIcon />导入<input id="import-data" type="file" style={{display: "none"}} onChange={onImportData} />
      </label>
      <span onClick={exportData} className='action-button'>
          <ExportIcon />备份
      </span>
    </div>
  )
}
