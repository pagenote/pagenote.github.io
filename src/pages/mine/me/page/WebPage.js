import React,{Component} from "react";
import {Empty, Switch, Tooltip} from 'antd';
import CommonHeader from '../CommonHeader/index';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Page from './Page';
import { gotoTarget } from "@/pages/mine/me/utils";
import CleanIcon from '@/assets/icon/clean.svg';
import DeleteIcon from '@/assets/icon/delete.svg'
import MarkdownIcon from '@/assets/icon/md.svg'
import {savePage} from "@/utils/api";
import './webpage.scss'

function getLink(url){
  return url.replace(/http[s]+:\/\/(www\.)?/,'').substr(0,10);
}

export default class WebPage extends Component{
  constructor(props) {
    super(props);
  }
  onChange=(e)=>{
    console.log(e.target)
  }

  deletePage=(keys)=>{
    if(keys.length>1){
      const check = window.confirm('确定删除');
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
    const {keys,removeSelectPages,muilPage,toggleMultSelect} = this.props;
    return(
      <section className='notes'>
        <CommonHeader>
          <span className='action-icon-button'>
            <DeleteIcon onClick={()=>{this.deletePage(keys)}} />
          </span>
          {/*<span className='action-icon-button'>*/}
          {/*  <MarkdownIcon />*/}
          {/*</span>*/}
          <Tooltip title='多选模式：一次可以选择多个PAGE浏览、操作；专注模式：一次只可选中一个PAGE浏览'>
            <Switch
              onChange={toggleMultSelect}
              checked={muilPage}
              checkedChildren="多选模式"
              unCheckedChildren="专注模式"
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
                清空选中
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
              请在左侧选择 PAGE 后查看
            </span>
          }></Empty>
        }
      </section>
    )
  }
}
