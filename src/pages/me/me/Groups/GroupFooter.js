import ImportIcon from "@/assets/icon/import.svg";
import {exportData, onImportData} from "@/utils/api";
import ExportIcon from "@/assets/icon/export.svg";
import React from "react";
import {useTranslation} from "react-i18next";

export default function GroupFooter(){
  const { t, i18n } = useTranslation();
  return(
    <div className='group-footer'>
      <label className='action-button'>
        <ImportIcon />{t('restore')}<input id="import-data" type="file" style={{display: "none"}} onChange={onImportData} />
      </label>
      <span onClick={exportData} className='action-button'>
          <ExportIcon />{t('backup')}
      </span>
    </div>
  )
}
