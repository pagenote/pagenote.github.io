import React, {Component,Fragment} from 'react';
import debounce from 'lodash/debounce'
import {message} from "antd";
import BigPicture from "bigpicture";
import DropLabel from "@/components/DropLabel";
import DateIcon from "@/assets/icon/date.svg";
import Tag from "@/assets/icon/tag.svg";
import DeleteIcon from "@/assets/draw/delete.svg";
import MarkDownIcon from "@/assets/icon/markdown.svg";
import CameraIcon from "@/assets/icon/camera.svg";
import Editor from "@/components/editor/Editor";
import DropLabels from "@/components/droplabel/DropLabel";
import '@/components/notes/PageDetail.scss';
import {getPage} from "../../api";


// TODO 支持设置字号
export default class PageDetail extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageDetail: {
                steps:[],
            },
        }
    }

    componentDidMount() {
        this.fetchPageInfo();
    }

    fetchPageInfo=()=>{
        const {pageKey} = this.props;
        getPage(pageKey,(result)=>{
            if(result){
                this.setState({
                    pageDetail: result,
                })
            }
        })
    }

    renderBlocks=()=>{
        const {pageDetail:{steps=[]}} = this.state;
        const stepBlocks = [];
        steps.forEach((step)=>{
            const pre = typeof step.pre === 'string' ? step.pre : '';
            const suff = typeof step.suffix === 'string' ? step.suffix : '';
            const middle = document.createElement('light');
            middle.style = `border-bottom: 1px solid ${step.bg||''}`;
            middle.innerText = step.text;
            const text = `${pre}<light style="border-bottom: 1px solid ${step.bg||''}">${middle.outerHTML}</light>${suff}`;
            stepBlocks.push({
                  "type" : "lightheader",
                  "data" : {
                      "text" : text,
                      "level" : 4,
                      "color": step.bg,
                      "light": step,
                  },
                  "readonly": true,
              }
            );
            if(step.tip){
                stepBlocks.push({
                    "type" : "paragraph",
                    "data" : {
                        "text" : step.tip
                    }
                },)
            }
        });
        return stepBlocks;
    };

    deletePage=()=>{

    }
    deleteLight=()=>{

    }


    render() {
        const { pageDetail:{steps=[],title,url,note,lastModified} } = this.state;
        const pageMd5 = window.btoa(url);
        const blocks = this.renderBlocks();
        return <div className="page-detail">
            <div className="side-bar">
                <DeleteIcon className='icon delete-page-icon' width={16} height={16} onClick={this.deletePage} />
            </div>
            <div>
                <div className='page-header'>
                    <div className='page-header-meta'>
                        <div className='page-link'>
                            <div>{title||url}</div>
                            <a target='_blank' href={url} className='link'>{title!==url?url:''}</a>
                        </div>
                        <div className='meta-info'>
                            <div className='date'>
                                <DateIcon />
                                <span>{new Date(lastModified).toLocaleDateString()}</span>
                            </div>
                            {/*<span data-tip='导出为markdown' onClick={()=>this.exportFile('md')}><MarkDownIcon /></span>*/}
                        </div>
                    </div>
                </div>

                <div className="main-content">
                    <div className="left-content">
                        <div className='lights'>
                            {
                                steps.length===0 &&
                                <div className='empty-lights'>
                                    没有此页面上留下笔记。<a href={url} target='_blank'>去添加</a>
                                </div>
                            }
                            {
                                steps.map((step,index)=>(
                                  <div className='light' key={step[6]+index}>
                                      <p style={{borderColor: step[5]}} className='refer'>
                                          <svg onClick={()=>this.deleteLight(index)} t="1593394105976" className="icon delete-icon" viewBox="0 0 1024 1024" version="1.1"
                                               xmlns="http://www.w3.org/2000/svg" p-id="2228" width="16" height="16">
                                              <path
                                                d="M810.666667 170.666667 661.333333 170.666667 618.666667 128 405.333333 128 362.666667 170.666667 213.333333 170.666667 213.333333 256 810.666667 256M256 810.666667C256 857.6 294.4 896 341.333333 896L682.666667 896C729.6 896 768 857.6 768 810.666667L768 298.666667 256 298.666667 256 810.666667Z"
                                                p-id="2229" fill="#707070"></path>
                                          </svg>
                                          <span className='light-keyword' style={{borderColor: step[5]}}>{step[3]}</span>
                                      </p>
                                      <div className='note'>
                                          <div className='editor-text-target'>
                                          </div>
                                          <div className='editor-bar-target'>

                                          </div>
                                      </div>
                                  </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="right-content">
                        <Editor id={pageMd5} tools={['marker','paragraph','lightheader']} key={url} data={{blocks:blocks}} onSave={this.saveEditorPage} />
                    </div>
                </div>

                <div className='summary' >
                    <textarea  placeholder='为该网页添加一段总结、笔记、评价...'
                               defaultValue={note}
                               onChange={this.modifyNote}>
                    </textarea>
                </div>
            </div>
        </div>;
    }
}
