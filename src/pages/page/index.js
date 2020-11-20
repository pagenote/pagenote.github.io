import React, {Component} from 'react'
import Editor from '../../components/editor/Editor'
import './page.scss'
import CommonPage from "../CommonPage";
import {datas} from "./pagedata";


export default class CreatePage extends Component{

  render() {
    const query = new URLSearchParams(window.location.search);

    let data = datas[query.get('id')] || datas.default;
    return (
      <div className='page' data-pagenote='new'>
        <div className='editor_container'>
          <Editor data={data} readonly={true}></Editor>
        </div>
      </div>
    )
  }
}

CommonPage(CreatePage);
