import React,{useEffect,useState} from 'react';
import { List, Avatar, Alert, Skeleton,message,Spin } from 'antd';
import {
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import {Frame,Left,Right} from "@/pages/me/Frame";
import PluginIcon from '@/assets/icon/plugin.svg'
import AccountIcon from '@/assets/icon/account.svg'
import CloudIcon from '@/assets/icon/cloud.svg'
import CheckVersion from "@/pages/CheckVersion";
import {deleteClipboards, getClipboards} from "@/utils/api";
import './index.scss'
import {useTranslation} from "react-i18next";
import {getDomain, writeTextToClipboard} from "@/utils";
import DeleteIcon from '@/assets/icon/delete.svg'
import CopyIcon from '@/assets/icon/copy.svg'
import TextIcon from '@/assets/icon/text.svg'

const Setting = function (){
  const { t } = useTranslation();
  const [clipboard,setClipboard] = useState([]);
  const [loading,setLoading] = useState(false);
  const [showTip,setShow] = useState(!localStorage.getItem('hide_clipboard_tip'));

  useEffect(()=>{
    fetchClipboards();
  },[])

  const fetchClipboards = function (){
    setLoading(true)
    getClipboards(function (result) {
      setLoading(false);
      setClipboard(result);
    })
  }

  const copyItem = function (item){
    writeTextToClipboard(item.data);
    message.success(t('copied'))
  }

  const deleteItem = function (item,e){
    e.stopPropagation();
    deleteClipboards(item,function (result){
      setClipboard(result);
      fetchClipboards();
    })
  }

  const iGetIt = function (){
    setShow(false);
    localStorage.setItem('hide_clipboard_tip','1');
  }


  return(
    <Frame>
      <div className='clipboard'>
        <Spin spinning={loading} >
          {
            clipboard.map((item)=>(
              <div  key={item.data+item.url} className='clipboard-item' onClick={()=>copyItem(item)}>
                <header className='clipboard-header'>
                  <div>
                    <TextIcon />
                    <img width={12} height={12} src={'https://'+getDomain(item.url)+'/favicon.ico'} alt=""/>
                    <a href={item.url}>{getDomain(item.url)}</a>
                  </div>
                  <div className="actions">
                    <DeleteIcon onClick={(e)=>{deleteItem(item,e)}}  />
                    {/*<span onClick={()=>copyItem(item)}>*/}
                    {/*  <CopyIcon />*/}
                    {/*</span>*/}
                  </div>
                </header>
                <div className='clipboard-body'>
                  {
                    item.data
                  }
                </div>
              </div>
            ))
          }
        </Spin>
        {
          showTip &&
          <Alert message={
            <div>
              <h3>{t('tio_for_clipboard_title')}</h3>
              <p>
                <p>
                  {t('clipboard_description')}
                </p>
                <img src="/img/guide/clipboard.png" alt=""/>
              </p>
            </div>
          } type="info" closeText={t('i_got_it')} onClose={iGetIt}/>
        }
      </div>
    </Frame>
  )
}

export default CheckVersion(Setting,'0.13.6')
