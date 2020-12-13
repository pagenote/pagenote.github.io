import React,{Component} from "react";
import Page from './Page';
import './webpage.scss'

export default class WebPage extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {keys,width} = this.props;
    return(
      <section className='notes' style={{width:width+'px'}}>
        {/*<div className='selected-pages'>*/}
        {/*  <div>*/}
        {/*    selected:*/}
        {/*  </div>*/}
        {/*  {*/}
        {/*    keys.map((key)=>(*/}
        {/*      <span key={key}>*/}
        {/*        {key}*/}
        {/*      </span>*/}
        {/*    ))*/}
        {/*  }*/}
        {/*</div>*/}
        {keys.map((url)=>(
          <Page key={url} pageKey={url} />
        ))}
      </section>
    )

  }
}
