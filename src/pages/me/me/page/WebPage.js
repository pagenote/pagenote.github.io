import React,{useState} from "react";
import {Empty, Switch, Tooltip,Popconfirm} from 'antd';
import {useTranslation} from 'react-i18next';
import CommonHeader from '../CommonHeader/index';
import Page from './Page';
import { gotoTarget } from "@/pages/me/me/utils";
import DeleteIcon from '@/assets/icon/delete.svg'
import { savePage,getPages,syncPages } from "@/utils/api";
import {exportMd} from "@/utils";
import CloudIcon from "@/assets/icon/cloud.svg";
import MarkdownIcon from "@/assets/icon/markdown.svg"
import CheckVersionIcon from '@/components/CheckVersionIcon'
import CheckUserIcon from '@/components/CheckUserIcon'
import './webpage.scss'

function getLink(url){
  return url.replace(/http[s]?:\/\/(www\.)?/,'').substr(0,10);
}

const WebPage = function ({keys,removeSelectPages,muilPage,toggleMultSelect}){
  const { t } = useTranslation();

  const deletePage=(keys)=>{
    if(keys.length>1){
      const check = window.confirm(t("confirm delete?"));
      if(!check){
        return;
      }
    }
    keys.forEach((key)=>{
      savePage(key,null);
    })
    removeSelectPages();
  }

  const downloadMd = function (){
    getPages(keys,function (result){
      const pages = [];
      for(let i in result){
        pages.push(result[i].plainData)
      }
      exportMd(pages)
    })
  }

  const [syncing,setSync] = useState(false);
  const syncToCloud = function (){
    setSync(true)
    syncPages(keys,function (){
      setSync(true)
    })
  }

  return(
    <section className='notes'>
      <CommonHeader>
        <span className='action-icon-button'>
          <Tooltip title={t('delete')}>
            <DeleteIcon onClick={()=>{deletePage(keys)}} />
          </Tooltip>
        </span>
        {/*<span className='action-icon-button'>*/}
        {/*  <CheckVersionIcon version='0.13.6' title={t('sync to cloud')}>*/}
        {/*    <Tooltip title={t('sync to cloud')}>*/}
        {/*      <CloudIcon fill={syncing?'#03A9F4':"#333333"} onClick={syncToCloud} />*/}
        {/*    </Tooltip>*/}
        {/*  </CheckVersionIcon>*/}
        {/*</span>*/}
        <span className='action-icon-button'>
          <CheckVersionIcon version='0.13.5' title={t('Download MarkDown')}>
            <Tooltip title={t('Download MarkDown')}>
              <MarkdownIcon onClick={downloadMd} />
            </Tooltip>
          </CheckVersionIcon>
        </span>
        {/*<span className='action-icon-button'>*/}
        {/*  <CheckUserIcon needType={2} title={t('download markdown')}>*/}
        {/*    <Tooltip title={t('Download MarkDown')}>*/}
        {/*      <MarkdownIcon onClick={downloadMd} />*/}
        {/*    </Tooltip>*/}
        {/*  </CheckUserIcon>*/}
        {/*</span>*/}
        <Tooltip title={t('type-tips')}>
          <Switch
            onChange={toggleMultSelect}
            checked={muilPage}
            checkedChildren={t("muilt-page")}
            unCheckedChildren={t("single-page")}
          />
        </Tooltip>
      </CommonHeader>
      <div className="notes-header">
        {
          muilPage &&
          <div className='selected-pages'>
            {
              keys.map((key)=>(
                <span key={key} className='selected-item'>
                    <span onClick={()=>{gotoTarget(key)}}>{getLink(key)}</span>
                 </span>
              ))
            }
            <span className='selected-item clean' onClick={removeSelectPages}>
                {t("remove selected")}
              </span>
          </div>
        }
      </div>
      {keys.map((url)=>(
        <Page key={url} pageKey={url} selectedSize={keys.length} />
      ))}
      {
        keys.length ===0 &&
        <Empty
          description={
            <span>
              {t("select a page on the left side")}
            </span>
          }></Empty>
      }
    </section>
  )
}
export default WebPage
