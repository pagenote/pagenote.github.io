import React,{Component} from "react";
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Page from './Page';
import { gotoTarget } from "@/pages/mine/me/utils";
import CleanIcon from '@/assets/icon/clean.svg';
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


  render() {
    const {keys,removeSelectPages,muilPage,toggleMultSelect} = this.props;
    return(
      <section className='notes'>
        <div className="notes-header">
          <Switch
            onChange={toggleMultSelect}
            checked={muilPage}
            checkedChildren="多选模式"
            unCheckedChildren="专注模式"
            // checkedChildren={<CheckOutlined />}
            // unCheckedChildren={<CloseOutlined />}
            // defaultChecked
          />
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
      </section>
    )
  }
}
