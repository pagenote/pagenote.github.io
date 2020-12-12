import React,{Component} from "react";
import Page from './Page';

export default class WebPage extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {keys,width} = this.props;
    return(
      <section className='notes' style={{width:width+'px'}}>
        <div>
          工具栏
        </div>
        {keys.map((key)=>(
          <Page pageKey={key} ></Page>
        ))}
      </section>
    )

  }
}
