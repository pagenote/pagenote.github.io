import React, {Component} from 'react';
import throttle from 'lodash/throttle'
import {message,Spin,Button,Select, Tag} from "antd";
import BigPicture from "bigpicture";
import DateIcon from "@/assets/icon/date.svg";
import Editor from "@/components/editor/Editor";
import './page.scss';
import {getPage,savePage} from "@/utils/api";
import {exportMd} from "@/utils";
import {withTranslation} from "react-i18next";
import TagGroup from './TagGroup'


// TODO 支持设置字号
class PageDetail extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageDetail: null,
            loading: false,
            fetchError: false,
        }
    }

    componentDidMount() {
        this.fetchPageInfo();
    }

    fetchPageInfo=()=>{
        const {pageKey} = this.props;
        this.setState({
            loading: true,
        },()=>{
            getPage(pageKey,(result)=>{
                this.setState({
                    pageDetail: result,
                    loading: false,
                    fetchError: !result,
                })
            })
        })
    }

    renderBlocks=()=>{
        const {pageDetail} = this.state;
        const {showContext} = this.props;
        const {steps=[]} = pageDetail || {};
        const stepBlocks = [];
        steps.forEach((step)=>{
            const pre = (showContext && typeof step.pre === 'string') ? step.pre : '';
            const suff = (showContext && typeof step.suffix === 'string') ? step.suffix : '';
            // const middle = document.createElement('light');
            // middle.style = `border-bottom: 1px solid ${step.bg||''}`;
            // middle.innerText = step.text;
            const text = `${pre}<light class="keyword ${showContext?'context':''}" style="--color: ${step.bg}">${step.text}</light>${suff}`;
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
            stepBlocks.push({
                "type" : "paragraph",
                "data" : {
                    "text" : step.tip||''
                }
            },)
        });
        return stepBlocks;
    };

    deletePage=()=>{

    }
    deleteLight=()=>{

    }

    bigPicture(e,snapshot,gallery,index){
        BigPicture({
            el: e.target,
            // imgSrc: snapshot,
            gallery: gallery,
            position:index,
            animationEnd: function() {
            },
        });
    }

    deleteSnapshot =(index)=>{
        const page = this.state.pageDetail;
        page.snapshots.splice(index,1);
        this.savePageInfo(page)
    };

    exportFile =(type='md')=>{
        switch (type){
            case 'md':
                exportMd([this.state.pageDetail]);
                break;
            default:
                message.error('请选择导出类型')
        }
    }

    saveEditorPage =(data)=>{
        const blocks = data.blocks || [];
        const steps = [];
        let tempStep = {};
        let tempTip = '';
        blocks.forEach((block)=>{
            if(block.type==='lightheader'){
                tempStep = block.data.light;
                tempStep.tip = ''; // 清空批注
                steps.push(tempStep);
            } else {
                tempStep.tip = tempStep.tip + block.data.text + '</br>'; // 否则为批注
            }
        });
        const page = this.state.pageDetail;
        page.steps = steps;
        this.savePageInfo(page);
    };

    savePageInfo = throttle((plainData)=>{
        const key = this.props.pageKey;
        savePage(key,plainData);
    },2000);

    setCategories = (categories)=>{
        const {pageDetail}  = this.state;
        pageDetail.categories = categories;
        this.setState({
            pageDetail: pageDetail,
        })
        this.savePageInfo(pageDetail);
    }

    render() {
        const {pageKey,t,selectedSize} = this.props;
        const {pageDetail,loading,fetchError}  = this.state;

        const {steps=[],title,url,note,lastModified,snapshots=[],images=[],categories=[]} = (pageDetail || {})
        const tags = categories.filter((tag)=>{
            return !!tag
        })
        const pageMd5 = window.btoa(url);
        const blocks = this.renderBlocks();
        return <div className={`web-page-item ${selectedSize>1?'multi':'single'}`} data-page={url}>
            <Spin spinning={loading}>
                <div>
                    <div className='page-header'>
                        <div className='page-header-meta'>
                            <div className='page-link'>
                                <div>{title||url||pageKey}</div>
                                <a target='_blank' href={url||pageKey} className='link'>{url||pageKey}</a>
                            </div>
                            <div className='meta-info'>
                                <div className='date'>
                                    <DateIcon />
                                    <span>{new Date(lastModified).toLocaleString()}</span>
                                </div>
                                <TagGroup tags={tags} onChange={this.setCategories}/>
                                {/*<span data-tip='导出为markdown' onClick={()=>this.exportFile('md')}><MarkDownIcon /></span>*/}
                            </div>
                        </div>
                        {
                            images.length>0 &&
                            <div className='page-img'>
                                <img src={images[0]} onClick={(e)=>{this.bigPicture(e,images[0],images.map((s)=>{return {src:s}}))}}/>
                            </div>
                        }
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
                                      <div className='light' key={step.id+index}>
                                          <p style={{borderColor: step.bg}} className='refer'>
                                              <svg onClick={()=>this.deleteLight(index)} t="1593394105976" className="icon delete-icon" viewBox="0 0 1024 1024" version="1.1"
                                                   xmlns="http://www.w3.org/2000/svg" p-id="2228" width="16" height="16">
                                                  <path
                                                    d="M810.666667 170.666667 661.333333 170.666667 618.666667 128 405.333333 128 362.666667 170.666667 213.333333 170.666667 213.333333 256 810.666667 256M256 810.666667C256 857.6 294.4 896 341.333333 896L682.666667 896C729.6 896 768 857.6 768 810.666667L768 298.666667 256 298.666667 256 810.666667Z"
                                                    p-id="2229" fill="#707070"></path>
                                              </svg>
                                              <span className='light-keyword' style={{borderColor: step.bg}}>{step.text}</span>
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
                    <div className="snapshots">
                        {
                            snapshots.map((item,index)=>(
                              <div key={item} className='snapshot'>
                                  <img className='snapshot-img'
                                       src={item}
                                       onClick={(e)=>{this.bigPicture(e,snapshots[index],snapshots.map((s)=>{return {src:s}}),index)}} alt="网页快照"/>
                                  <div className='snapshot-tips'>
                                      <svg onClick={()=>this.deleteSnapshot(index)} t="1593394105976" className="icon delete-icon" viewBox="0 0 1024 1024" version="1.1"
                                           xmlns="http://www.w3.org/2000/svg" p-id="2228" width="16" height="16">
                                          <path
                                            d="M810.666667 170.666667 661.333333 170.666667 618.666667 128 405.333333 128 362.666667 170.666667 213.333333 170.666667 213.333333 256 810.666667 256M256 810.666667C256 857.6 294.4 896 341.333333 896L682.666667 896C729.6 896 768 857.6 768 810.666667L768 298.666667 256 298.666667 256 810.666667Z"
                                            p-id="2229" fill="#707070"></path>
                                      </svg>
                                  </div>
                              </div>
                            ))
                        }
                    </div>
                </div>
                {

                  <div>
                      {
                          fetchError &&
                            <div>
                                <span>{t('fetch error')}  </span>
                                <span>
                                    {t('loading page',{
                                        page: pageKey
                                    })}
                                </span>
                                <Button onClick={this.fetchPageInfo}>{t('retry')}</Button>
                            </div>
                      }
                  </div>
                }
            </Spin>
        </div>;
    }
}

function tagRender(props) {
    const { label, value, closable, onClose } = props;

    return (
      <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
          {label}
      </Tag>
    );
}

export default withTranslation()(PageDetail)
