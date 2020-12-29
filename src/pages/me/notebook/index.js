import React,{Component} from "react";
import Notebook from './Notebook';
import {getPapers,savePaper,deletePaper} from "@/utils/api";
import CreateIcon from '@/assets/icon/create_paper.svg';
import DeleteIcon from '@/assets/icon/delete.svg'
import CheckVersion from "@/pages/CheckVersion";
import './index.scss'



class NoteBooks extends Component{

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
        currentKey: this.state.currentKey || (result[0] ? result[0].id : ''),
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


  deleteCuttentPaper=()=>{
    const {currentKey} = this.state;
    deletePaper(currentKey,()=>{
      this.initData();
      this.setState({
        currentKey:''
      })
    })
  }

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
                const title = document.createElement('div');
                title.innerHTML = paper.title||'';
                const abstract = document.createElement('div');
                abstract.innerHTML = paper.abstract||'';
                return(
                  <div onClick={()=>this.setPaper(paper.id)}
                       className={`paper-item ${paper.id===currentKey?'active':''}`}
                       key={paper.id}
                       data-paper={paper.id}>
                    <div className='paper-title'>{title.innerText}</div>
                    <div className='paper-abstract'>{abstract.innerText}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='notebook-detail'>
          <div className='notebook-header'>
            {
              currentKey && <span className='action-icon delete' onClick={this.deleteCuttentPaper}>
              <DeleteIcon />
            </span>
            }
          </div>
          <div className="notebook-content">
            {
              currentKey &&
              <Notebook
                key={currentKey}
                paperKey={currentKey}
                onChange={this.initData}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CheckVersion(NoteBooks,'0.13.2');
