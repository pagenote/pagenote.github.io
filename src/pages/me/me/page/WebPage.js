import React,{Component} from "react";
import {Empty, Switch, Tooltip} from 'antd';
import { withTranslation,Translation } from 'react-i18next';
import CommonHeader from '../CommonHeader/index';
import Page from './Page';
import { gotoTarget } from "@/pages/me/me/utils";
import CleanIcon from '@/assets/icon/clean.svg';
import DeleteIcon from '@/assets/icon/delete.svg'
import {savePage} from "@/utils/api";
import './webpage.scss'

function getLink(url){
  return url.replace(/http[s]+:\/\/(www\.)?/,'').substr(0,10);
}

class WebPage extends Component{
  constructor(props) {
    super(props);
  }
  onChange=(e)=>{
    console.log(e.target)
  }

  deletePage=(keys)=>{
    const {t} = this.props;
    if(keys.length>1){
      const check = window.confirm(t("confirm delete?"));
      if(!check){
        return;
      }
    }
    const {removeSelectPages} = this.props;
    keys.forEach((key)=>{
      savePage(key,null);
    })
    removeSelectPages();
  }


  render() {
    const {keys,removeSelectPages,muilPage,toggleMultSelect,t} = this.props;
    return(
      <section className='notes'>
        <CommonHeader>
          <span className='action-icon-button'>
            <DeleteIcon onClick={()=>{this.deletePage(keys)}} />
          </span>
          {/*<span className='action-icon-button'>*/}
          {/*  <MarkdownIcon />*/}
          {/*</span>*/}
          <Tooltip title={t('Muilt-Page: select muilt-page once time. Single-Page: Only one page can be selected once time')}>
            <Switch
              onChange={toggleMultSelect}
              checked={muilPage}
              checkedChildren={t("muilt-page")}
              unCheckedChildren={t("single-page")}
              // checkedChildren={<CheckOutlined />}
              // unCheckedChildren={<CloseOutlined />}
              // defaultChecked
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
                <CleanIcon></CleanIcon>
                {t("remove selected")}
              </span>
            </div>
          }
        </div>
        {keys.map((url)=>(
          <Page key={url} pageKey={url} />
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
}
export default withTranslation()(WebPage)
