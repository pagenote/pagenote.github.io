import React,{useEffect,useState} from 'react';
import { List, Avatar, Alert, Skeleton,message,Spin } from 'antd';
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
  const [showTip,setShow] = useState(!localStorage.getItem('hide_clipboard_tips'));

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
    message.success(t('copied')+':'+item.data)
  }

  const deleteItem = function (item,e){
    e.stopPropagation();
    deleteClipboards(item,function (result){
      setClipboard(result);
    })
  }

  const iGetIt = function (){
    setShow(false);
    localStorage.setItem('hide_clipboard_tips','1');
  }

  const displayItems =  showTip?[...clipboard,{
    id:'tip',
    data:'点击我，可快速复制',
    url:'https://pagenote.cn'
  }]: clipboard

  return(
    <Frame>
      <div className='clipboard'>
        <Spin spinning={loading} >
          {
            displayItems.map((item)=>(
              <div  key={item.data+item.url} className='clipboard-item' onClick={()=>copyItem(item)}>
                <div className='clipboard-body'>
                  {
                    item.data
                  }
                </div>
                <div className='clipboard-footer'>
                  {
                    item.id!=='tip' &&
                    <div className="actions">
                      <DeleteIcon onClick={(e)=>{deleteItem(item,e)}}  />
                    </div>
                  }
                  {t('from')} <a target='_blank' href={item.url}>{getDomain(item.url)}</a>
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
              <div>
                <p>
                  {t('clipboard_description')}
                </p>
                <img src="/img/guide/clipboard.png" alt=""/>
              </div>
            </div>
          } type="info" closeText={t('i_got_it')} onClose={iGetIt}/>
        }
      </div>
    </Frame>
  )
}

export default CheckVersion(Setting,'0.13.5')
