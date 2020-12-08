import React, {Component} from 'react'
import './about.scss'
import CommonPage from "../CommonPage";
import Editor from "../../components/editor/Editor";
import {datas} from './aboutdata'

export default class AboutPage extends Component{

  render() {
    const search = new URLSearchParams(window.location.query)
    return (
      <div className='about'>
        <div>
          做小而美的笔记工具。
          <Editor data={data} ></Editor>
        </div>
      </div>
    )
  }
}

CommonPage(AboutPage);

