import React, {Component} from 'react'
import Editor from '../../components/editor/Editor'
// import '../page/page.scss'
import ExportIcon from '@/assets/icon/export.svg'
import ImportIcon from '@/assets/icon/import.svg'
import './new.scss'
import CommonPage from "@/pages/CommonPage";


export default class CreatePage extends Component{

  saveData=(data)=>{
    localStorage.setItem('new_page',JSON.stringify(data));
  };


  render() {
    let data = {time: new Date().getTime()};
    try{
      data = JSON.parse(localStorage.getItem('new_page')) || {}
    }catch (e) {

    }

    return (
      <div className='page' data-pagenote='new'>
        <div className='editor_container'>
          {/*<div className='fun-icons'>*/}
          {/*  <div>*/}
          {/*    <span>*/}
          {/*    {*/}
          {/*      new Date(data.time).toLocaleString()*/}
          {/*    }*/}
          {/*  </span>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <ImportIcon width={16} height={16}></ImportIcon>*/}
          {/*    <ExportIcon width={16} height={16}></ExportIcon>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div>
            本页面将下线，请前往文稿记录笔记。
          </div>
          <Editor
            placeholder='此处已不推荐使用，请前往文稿记录笔记。未来将下线'
            data={data}
            readonly={true}
            onSave={this.saveData} />
        </div>
      </div>
    )
  }
}

CommonPage(CreatePage)
