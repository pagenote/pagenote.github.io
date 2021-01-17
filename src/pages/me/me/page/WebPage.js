import React,{useState,useEffect} from "react";
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
import NewTabIcon from '@/assets/icon/new-tab.svg'
import HomeIcon from '@/assets/icon/home.svg'
import OfflineIcon from '@/assets/icon/offline.svg'
import './webpage.scss'
import {localSql} from "@/utils/notification";

function getLink(url){
  return url.replace(/http[s]?:\/\/(www\.)?/,'').substr(0,10);
}

const WebPage = function ({keys,removeSelectPages,muilPage,toggleMultSelect,mode='me'}){
  const { t } = useTranslation();
  const [showContext,setShowContext] = useState(false);

  useEffect(()=>{
    localSql.getItem('show_context').then((result)=>{
      setShowContext(result)
    })
  },[])

  const toggleContext=function (checked) {
    setShowContext(checked);
    localSql.setItem('show_context',checked);
  }

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

  const openInNewTab = function () {
    const urls = encodeURIComponent(keys);
    window.open(`/webpage#/${urls}`,urls)
  }

  const comebackHome = function () {
    window.localStorage.setItem('selectedKeys',keys.toString());
    window.open('/me#/','home');
    window.close();
  }

  const isInMe = mode === 'me';

  return(
    <section className='notes'>
      <CommonHeader className='page-header'>
        <div className="action">
          {
            !isInMe &&
            <span className='action-icon-button'>
              <Tooltip title={t('comeback to home')}>
                <HomeIcon onClick={comebackHome} />
              </Tooltip>
            </span>
          }

          {
            removeSelectPages &&
            <span className='action-icon-button'>
            <Tooltip title={t('delete')}>
              <DeleteIcon onClick={()=>{deletePage(keys)}} />
            </Tooltip>
          </span>
          }

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
        {
          isInMe &&
          <span className='action-icon-button'>
            <Tooltip title={t('open in new tab')}>
              <NewTabIcon onClick={openInNewTab} />
            </Tooltip>
          </span>
        }
       </div>
        <div className='switchs'>
          <Tooltip title={t('context tips')}>
            <Switch
              className='context-switch'
              onChange={toggleContext}
              checked={showContext}
              checkedChildren={t("show highlight context")}
              unCheckedChildren={t("hide highlight context")}
            />
          </Tooltip>
          {
            toggleMultSelect &&
            <Tooltip title={t('type-tips')}>
              <Switch
                onChange={toggleMultSelect}
                checked={muilPage}
                checkedChildren={t("muilt-page")}
                unCheckedChildren={t("single-page")}
              />
            </Tooltip>
          }
        </div>
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
        <Page key={url+showContext} pageKey={url} selectedSize={keys.length} showContext={showContext} />
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
      {
        !isInMe &&
        <footer>
          <OfflineIcon /> <span>{t('available only in your pc')}</span>
        </footer>
      }
    </section>
  )
}
export default WebPage
