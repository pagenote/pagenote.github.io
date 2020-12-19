import React,{Component} from "react";
import Notebook from './Notebook';
import {getPapers,savePaper} from "@/utils/api";
import CreateIcon from '@/assets/icon/create_paper.svg'
import './index.scss'



export default class NoteBooks extends Component{

  constructor(props) {
    super(props);
    this.state={
      currentKey:'',
      papers:[
        // {
        //   id:'新建',
        //   title:'',
        //   lastModified:'',
        //   categories:[],
        //   abstract:''
        // }
      ],
    }
  }

  componentDidMount() {
    this.initData();
  }

  setPaper=(key=this.state.currentKey)=>{
    this.setState({
      currentKey:key,
    });
  }

  initData=()=>{
    getPapers((result)=>{
      this.setState({
        papers: result,
        currentKey: result[0] ? result[0].id : '',
      })
    });
  }

  createNew=()=>{
    const {papers} = this.state;
    const time = new Date().getTime();
    const newId = 'paper_'+time;
    papers.unshift({
        id: newId,
        title:'新建文稿',
        lastModified: time,
        categories:[],
        abstract:'',
    });
    savePaper(newId, {time:time},()=>{
      this.setState({
        papers:papers,
        currentKey: newId,
      })
    })
  };



  render() {
    const {papers,currentKey} = this.state;
    return(
      <div className='notebook-pages'>
        <div className='notebook-menus'>
          <div className='notebook-header'>
            <span className='action-icon' onClick={this.createNew}>
              <CreateIcon />
            </span>
          </div>
          <div className="notebook-content">
            {
              papers.map((paper)=>{
                return(
                  <div onClick={()=>this.setPaper(paper.id)} className={`paper-item ${paper.id===currentKey?'active':''}`} key={paper.id} data-paper={paper.id}>
                    <div>{paper.title}</div>
                    <div>{paper.abstract}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='notebook-detail'>
          <div className='notebook-header'>
            操作区域
          </div>
          <div className="notebook-content">
            {
              currentKey &&
              <Notebook
                key={currentKey}
                paperKey={currentKey}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}
