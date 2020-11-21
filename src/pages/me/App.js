import React, {Component, Fragment} from 'react'
import BigPicture from 'bigpicture'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import Notes from "../../components/notes/Notes"
import DropMenu from "../../components/DropMenu";
import LoadPage from "../../components/tips/LoadPage";
import PagesIcon from "../../assets/icon/pages.svg";
import Group from "../../components/Group";
import Undraw from "../../assets/draw/undraw_text_files_au1q.svg";
import Empty from "../../assets/draw/empty.svg";
import Close from "../../assets/icon/close.svg";
import Setting from "../../assets/icon/setting.svg";
import {connectServer, groupPages, savePage} from "../../utils/index_new";
import {importData} from "../../utils/index_new";
import {funDownload} from "../../utils/document";
import Aside from "./Aside";
import './me.scss'
import AsideMore from "../../assets/icon/aside-more.svg";

const groupTypes =[
    {
        value:2,
        label:'按标签分组'
    },
    {
        value:0,
        label:'按域名分组'
    },
    {
        value:1,
        label:'按日期分组'
    },
];
const predefineSize =  window.innerWidth - 100;

export default class Me extends Component{
    constructor(props) {
        super(props);
        let defaultGroup = 0;
        this.state={
            currentVersion: '',
            // 原始数据
            originData: {},
            data: {}, // 原始数据 url - object
            pages:[], // [page,page]
            // 分组数据 runtime
            groupPagesObject:{}, // {group1:[page,page]}
            selectedPagesKey:new Set(), //[url,url]
            selectedGroupsKey: new Set(), // [group,group]

            expand: false,
            searchString:'',
            connected: false,
            groupType: defaultGroup,
            categories: [{
                label:'工作',
                desc:'',
            },{
                label:'TODO',
                desc:'',
            }],
            bgColor: '',
            size: '45%',
            windowWidth:1440,
            expandGroups: [],

            pageMeOffset: 200,
            pageSize: predefineSize
        };
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        const page = query.get('page');
        this.setState({
            bgColor: window.localStorage.getItem('bgColor') || '#c4e3cb',
            groupType: +(window.localStorage.getItem('group_type') || '0'),
            // TODO try catch
            selectedGroupsKey: new Set(JSON.parse(window.localStorage.getItem('groups') || '[]')),
            selectedPagesKey: new Set(page? [page]: JSON.parse(window.localStorage.getItem('pages') || '[]')),
            size: window.localStorage.getItem('size') || '25%',
            windowWidth: window.innerWidth,
            expandGroups: new Set(JSON.parse(window.localStorage.getItem('expand_groups') || '[]')),
            currentVersion: document.documentElement.dataset.version
        });
        this.doConnect();
        window.onresize =  ()=> {
            this.setState({
                pageSize: window.innerWidth - 100
            })
        }
    }

    doConnect=()=>{
        if(this.state.connected){
            return;
        }
        connectServer((result)=>{
            this.setState({
                connected: true,
                pages: result.pages,
                data: result.data,
                originData: result.originData,
            },()=>{
                this.group();
                this.search();
            })
        });
    };

    savePageData=(page)=>{
        savePage(page);
    };

    group=()=>{
        const {groupPagesObject,categories,groupKeys} = groupPages(this.state.groupType,this.state.pages);
        this.setState({
            groupPagesObject:groupPagesObject,
            categories: categories,
            selectedGroupsKey: new Set(groupKeys),
        });
    };

    bigPicture(e,snapshot,gallery){
        BigPicture({
            el: e.target,
            imgSrc: snapshot,
            gallery: gallery,
            animationEnd: function() {
            },
        });
    }

    selectGroup=(group)=>{
        const selectedPageKeys = new Set();
        const groups = this.state.selectedGroupsKey;

        if(groups.has(group.name)){
            groups.delete(group.name)
        }else{
            groups.add(group.name);
        }
        this.setState({
            selectedGroupsKey:groups,
            selectedPagesKey: selectedPageKeys,
        },()=>{
            window.localStorage.setItem('groups',JSON.stringify(Array.from(groups)))
        });
    };

    selectPage=(page,group)=>{
        const currentSelected = this.state.selectedPagesKey;
        this.setState({
            selectedPagesKey: currentSelected.has(page.url) ? new Set() : new Set([page.url]),
        },()=>{
            window.localStorage.setItem('pages',JSON.stringify(Array.from(this.state.selectedPagesKey)));
        });
    };

    search=(e={})=> {
        const searchString = e.target ? e.target.value.trim() : this.state.searchString;
        this.setState({
            searchString: searchString,
            selectedPage: [],
        }, () => {
            this.filter();
        })
    };

    filter = debounce(()=>{
        const groupPagesObject = this.state.groupPagesObject;
        let selectedPages = [];
        let selectedGroupsKey = new Set();
        const searchString = this.state.searchString;
        Object.keys(groupPagesObject).forEach((groupKey)=>{
            const pages = groupPagesObject[groupKey].pages;
            let count = 0;
            pages.forEach((page)=>{
                const content  = page.title + page.url + page.category + (page.steps||[]).reduce((pre='',next)=>{
                    return pre + next[3]+next[4]
                },'');

                const matched = searchString ? content.indexOf(searchString)>-1 : true;
                page.matched = matched;

                if(matched){
                    count++;
                    selectedGroupsKey.add(groupKey);
                    if(searchString){
                        selectedPages.push(page.url);
                    }
                }
            });
            groupPagesObject[groupKey].matched = count;
        });
        this.setState({
            groupPagesObject: groupPagesObject,
            selectedGroupsKey: selectedGroupsKey,
        },()=>{
            // this.group()
        })
    },500);


    selectGroupType = (value ) => {
        this.setState({
            groupType: value,
        },()=>{
            this.group(true);
        });
        localStorage.setItem('group_type',value)
    };

    setColor =(color)=>{
        this.setState({
            bgColor:color
        });
        window.localStorage.setItem('bgColor',color);
    };

    onKeyUP = (e)=>{
        switch (e.keyCode) {
            case 40:// down

                break;
            case 38:// up
                break;
        }
        e.preventDefault();
        e.stopPropagation();
    };

    dragSize =(event)=>{
        document.body.style.userSelect = 'none';
        const pageSize = this.state.pageSize;
        const offset = this.state.pageMeOffset;
        let minLeftSize = 300;
        let maxLeftSize = pageSize - 4 - offset;
        document.onmousemove = throttle((e)=>{
            const a = window.innerWidth-pageSize;
            let offset = e.clientX -  a/2 - this.state.pageMeOffset;
            offset = Math.min(Math.max(offset, minLeftSize), maxLeftSize);
            this.setState({
                size: offset,
            },()=>{
                window.localStorage.setItem('size',offset)
            })
        },60/1000);
        document.onmouseup = (e) =>{
            document.body.style.userSelect = 'unset';
            document.onmouseup = null;
            document.onmousemove = null;
        }
    };

    toggleExpandGroup = (groupKey) => {
        const currentG = this.state.expandGroups;
        const collapse = currentG.has(groupKey);
        if(collapse){
            currentG.delete(groupKey);
        }else{
            currentG.add(groupKey);
        }
        this.setState({
            expandGroups: currentG,
        },()=>{
            window.localStorage.setItem('expand_groups',JSON.stringify(Array.from(currentG)))
        });
    };

    setSize =(size)=>{
        this.setState({
            size: size
        })
    };

    toggleAside=()=>{
        const current = this.state.pageMeOffset;
        const nextOffset = current===200? 0 :200;
        this.setState({
            pageMeOffset: nextOffset,
            // pageSize:  window.innerWidth - 100 - nextOffset,
        })
    };

    cleanSearch = ()=>{
        this.setState({
            searchString:''
        },()=>{
            this.search()
        })
    };

    exportData = ()=>{
        const exportDataObject = this.state.originData;
        const pageCnt = Object.keys(exportDataObject).length;
        const exportData = encodeURIComponent(JSON.stringify(exportDataObject));
        const version = this.state.currentVersion || '';
        funDownload(exportData,`${version}_${pageCnt}.pagenote`);
    };

    onImportData = (e)=>{
        var selectedFile = e.target.files[0];

        var reader = new FileReader();//这是核心,读取操作就是由它完成.
        reader.readAsText(selectedFile);//读取文件的内容,也可以读取文件的URL
        reader.onload = function () {
            let datas = null;
            try{
                datas = JSON.parse(decodeURIComponent(this.result));
            }catch (e) {
                console.log(e,this.result);
                alert('解析错误，请检查备份文件是否有损坏');
            }
            if(datas){
                const result =  window.confirm('确认导入？可能会覆盖现有数据');
                if(result){
                    importData(datas,function (result) {
                        console.log(result)
                    })
                }
            }
        }
    };

    render() {
        const {
            data, groupPagesObject, selectedPagesKey, selectedGroupsKey,pages,pageMeOffset,
            searchString, connected, groupType, categories, bgColor, size,expandGroups
        } = this.state;

        const groupKeys = Object.keys(groupPagesObject).sort(function (pre,next) {
            return searchString ?
              (groupPagesObject[pre].matched > groupPagesObject[next].matched ? -1 : 1):
              (pre > next ? -1 :1)
        });

        const barSize = Number.isInteger(+size) ? size + 'px' : '';
        const bookWidth =  this.state.pageSize;
        const expand = size / bookWidth > 0.9;

        const grid = size / bookWidth > 0.58;

        const colsCtn = Math.floor(size/298);

        let cols = [];
        for (let i=0; i<colsCtn; i++){
            cols.push('col-'+i);
        }
        return (
          <div className='me' data-pagenote='1' style={{width: bookWidth+'px'}}>
              {/*<div className='more-icon'>*/}
              {/*    <p>*/}
              {/*        <AsideMore onClick={this.toggleAside}  />*/}
              {/*    </p>*/}
              {/*   <p>*/}
              {/*       <a href="/setting"><Setting /></a>*/}
              {/*   </p>*/}
              {/*</div>*/}
              <Aside onImportData={this.onImportData}
                     exportData={this.exportData}
                     pageSize={pages.length}
                     setColor={this.setColor}>

              </Aside>
              <div className={`pages-and-detail ${expand ? 'expand' : 'fold'}`}
                   style={{ border: `1px solid ${bgColor}`,backgroundColor: bgColor,left: pageMeOffset+'px',width: bookWidth-pageMeOffset+'px'  }}>
                  <LoadPage connected={connected} doConnect={this.doConnect} emptyGroup={groupKeys.length === 0}/>

                  {
                      groupKeys.length > 0 &&
                      <Fragment>
                          {/* 分组详情 单页打开*/}
                          <section className={`pages`} style={{width: barSize,background: bgColor}}>
                              <div className='title' style={{backgroundColor: bgColor}}>
                                  <a className='logo-title' href='/'>
                                      PAGES<PagesIcon width={20} height={20} className='icon'/>
                                  </a>
                                  <div className='group-type'>
                                      <DropMenu list={groupTypes} selected={groupType}
                                                onSelect={this.selectGroupType}/>
                                  </div>
                                  <input onChange={this.search} value={searchString}
                                         className={`search ${searchString ? 'active' : ''}`} type="text"
                                         placeholder='🔍'/>
                                  <Close className='clean-search' onClick={this.cleanSearch} />
                              </div>
                              <div className='content'>
                                  <div className={`page-group active`}>
                                      <div className={`page-container ${grid ? 'grid' : 'list'}`}
                                           onKeyUp={this.onKeyUP}>
                                          {
                                              !grid ?
                                                Array.from(selectedGroupsKey).map((group) => (
                                                  <Group key={group} groupPagesObject={groupPagesObject}
                                                         group={group} selectedPagesKey={selectedPagesKey}
                                                         expand={expandGroups.has(group)}
                                                         selectPage={this.selectPage}
                                                         toggleExpandGroup={this.toggleExpandGroup}/>
                                                )):
                                                <div className='grid-group'>
                                                    {
                                                        cols.map((value,colIndex)=>(
                                                          <div key={value} className='grid-group-col' style={{width:100/cols.length+"%"}}>
                                                              {
                                                                  Array.from(selectedGroupsKey).map((group,index) => (
                                                                    <Fragment key={group}>
                                                                        {
                                                                            index % cols.length === colIndex &&
                                                                            <Group key={group} groupPagesObject={groupPagesObject}
                                                                                   expand={expandGroups.has(group)}
                                                                                   group={group} selectedPagesKey={selectedPagesKey}
                                                                                   selectPage={this.selectPage}
                                                                                   toggleExpandGroup={this.toggleExpandGroup}/>
                                                                        }
                                                                    </Fragment>

                                                                  ))
                                                              }
                                                          </div>
                                                        ))
                                                    }
                                                </div>
                                          }
                                          {
                                              selectedGroupsKey.size === 0 &&
                                              <div className='empty-tip'>
                                                  {searchString ?
                                                    <div>
                                                        <div>没有找到<span
                                                          className='search-keyword'>{searchString}</span>相关的PAGE、NOTE
                                                        </div>
                                                        <Empty width={100} height={45}/>
                                                    </div>
                                                    :
                                                    <div>
                                                        <div>选择一个分组，查看分组下的PAGE</div>
                                                        <Undraw width={200} height={120}></Undraw>
                                                    </div>
                                                  }
                                              </div>
                                          }
                                      </div>
                                  </div>
                              </div>
                          </section>
                          <aside className='split-line' onMouseDown={this.dragSize} style={{color: '#fff'}}>
                              <div className='left'  onClick={()=>this.setSize(350)}>left&lt;</div>
                              <div className='right' onClick={()=>this.setSize(bookWidth-4)}>&gt;right</div>
                          </aside>
                          <Notes selectedPagesKey={selectedPagesKey}
                                 isPopUp={cols.length>3}
                                 size={barSize}
                                 categories={categories}
                                 onSavePage={this.savePageData}
                                 selectPage={this.selectPage}
                                 data={data}
                          >
                          </Notes>
                      </Fragment>
                  }
              </div>
          </div>
        )
    }
}
