import React, {Component} from 'react'
import Editor from '../../components/editor/Editor'
import '../page/page.scss'
// import CommonPage from "../CommonPage";
import './new.scss'


export default class CreatePage extends Component{

  saveData=(data)=>{
    localStorage.setItem('new_page',JSON.stringify(data));
  };


  render() {
    let data = null;
    try{
      data = JSON.parse(localStorage.getItem('new_page'))
    }catch (e) {

    }

    return (
      <div className='page' data-pagenote='new'>
        <div className='editor_container'>
          <Editor placeholder='在这里记录写什么吧，数据存储在你浏览器本地，你可以把这里当做一个草稿记事本' data={data} onSave={this.saveData}></Editor>
        </div>
      </div>
    )
  }
}

// CommonPage(CreatePage)
