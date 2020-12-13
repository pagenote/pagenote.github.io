import React,{Component} from "react";
import { Checkbox } from 'antd';
import Page from './Page';
import './webpage.scss'

export default class WebPage extends Component{
  constructor(props) {
    super(props);
  }
  onChange=(e)=>{
    console.log(e.target)
  }

  render() {
    const {keys,width} = this.props;
    return(
      <section className='notes' style={{width:width+'px'}}>
        <div className='selected-pages'>
          {/*{*/}
          {/*  keys.map((key)=>(*/}
          {/*    <Checkbox key={key} checked={true} onChange={()=>this.onChange()}>*/}
          {/*      <a target='_blank' href="key">{key}</a>*/}
          {/*    </Checkbox>*/}
          {/*  ))*/}
          {/*}*/}
        </div>
        {keys.map((url)=>(
          <Page key={url} pageKey={url} />
        ))}
      </section>
    )

  }
}
