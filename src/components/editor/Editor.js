import React, {Component} from 'react'
import EditorJS from '@editorjs/editorjs';
import LightHeader from "./light-header";
import Header from '@editorjs/header';
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import Delimiter from "@editorjs/delimiter";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";

import './editor.scss'


const getAllTools = function () {
  return {
    header: {
      class: Header,
      inlineToolbar : true,
    },
    list: {
      class: List,
      inlineToolbar : true
    },
    image: {
      class: SimpleImage,
      inlineToolbar : true
    },
    delimiter: {
      class: Delimiter,
      inlineToolbar : true
    },
    quote: {
      class: Quote,
      inlineToolbar : true
    },
    warning: Warning,
    marker: {
      class:  Marker,
      shortcut: 'CMD+SHIFT+M'
    },
    table: {
      class: Table
    },
    lightheader:{
      class: LightHeader
    },
    checklist:{
      class: Checklist,
      inlineToolbar: true,
    }
  }

};

export default class Editor extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let tools = getAllTools();
    if(this.props.tools){
      Object.keys(tools).forEach((tool)=>{
        if(!this.props.tools.includes(tool)){
          delete tools[tool]
        }
      })
    }
    const data = Object.assign({
      "time" : new Date().getTime(),
      "blocks" : [],
      "version" : ""
    },this.props.data || {});
    const editor = new EditorJS({
      holder : this.props.id || 'pagenote-editor',
      placeholder: this.props.placeholder||'',
      readOnly: this.props.readonly,
      tools: tools,
      data: data,
      onReady: () => {
        this.editor = editor;
        // this.renderBlocks(data.blocks);
      },
      onChange: (e) => {
        this.editor.save().then((savedData) => {
          typeof this.props.onSave==='function' && this.props.onSave(savedData)
        });
      }
    });
  }

  componentWillUnmount() {
    // TODO
    // console.log('销毁',this.editor);
    // if(this.editor && this.editor.destroy){
    //   this.editor.destroy();
    // }
  }

  renderBlocks =(blocks=[])=>{
    if(!this.editor){
      console.log('not ready');
      return;
    }
    this.editor &&this.editor.blocks.render({
      blocks: blocks
    }).then(()=>{
      document.querySelector('.codex-editor__redactor').style.paddingBottom='30px';
    })
  };

  render() {
    return (
      <div className='editor'>
        <div id={this.props.id || "pagenote-editor"}></div>
      </div>
    )
  }
}
