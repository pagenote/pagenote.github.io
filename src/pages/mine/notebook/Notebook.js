import React, {Component} from 'react'
import Editor from '@/components/editor/Editor'
import {getPaperDetail,savePaper} from "@/utils/api";
import './notebook.scss'

export default class Notebook extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{},
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData=()=>{
    getPaperDetail(this.props.paperKey,(result)=>{
      this.setState({
        data: result?result.data : {},
      })
    })
  }

  render() {
    const {paperKey} = this.props;
    const {data} = this.state;
    return (
      <div className='notebook'>
        <div className='notebook-meta'>
          <span>
            {
              new Date(data.time).toLocaleString()
            }
          </span>
        </div>
        {
          data.time &&
          <Editor
            placeholder='开始记录些什么吧，数据存储在你浏览器本地'
            data={data}
            onSave={(result)=>savePaper(paperKey,result)} />
        }

      </div>
    )
  }
}

