import React, {Component, Fragment} from 'react'
import BigPicture from 'bigpicture'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import Notes from "../../components/notes/Notes"
import DropMenu from "../../components/DropMenu";
import PageItem from "../../components/PageItem";
import Colors from "../../components/Colors";
import LoadPage from "../../components/tips/LoadPage";
import PagesIcon from "../../assets/icon/pages.svg";
import Expand from "../../assets/icon/more.svg";
import Group from "../../components/Group";
import Undraw from "../../assets/draw/undraw_text_files_au1q.svg";
import Empty from "../../assets/draw/empty.svg";
import Safe from "../../assets/icon/safe.svg"
import ImportIcon from "../../assets/icon/import.svg";
import ExportIcon from "../../assets/icon/export.svg";
import Grid from "../../assets/icon/grid.svg";
import List from "../../assets/icon/list.svg";
import Close from "../../assets/icon/close.svg";
import Setting from "../../assets/icon/setting.svg";
import {connectServer, groupPages, savePage} from "../../utils/index";
import {importData} from "../../utils/index_new";
import {funDownload} from "../../utils/document";
import './me.scss'



export default class Index extends Component{
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
        };
        this.search = this.search.bind(this);
        this.useHeader = false;
        this.myRef = React.createRef();
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
    }

    doConnect=()=>{
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

    toggleExpand(){
        this.setState({
            expand: !this.state.expand
        })
    }

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

    toggleGroups =()=>{
        const  {groupPagesObject,selectedGroupsKey} = this.state;
        const result = Object.keys(groupPagesObject).length === selectedGroupsKey.size ? [] : Object.keys(groupPagesObject);

        this.setState({
            selectedGroupsKey: new Set(result)
        })
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
        const target = event.currentTarget;
        document.body.style.userSelect = 'none';
        document.onmousemove = throttle((e)=>{
            const a = (window.innerWidth-this.myRef.current.clientWidth);
            let offset = e.clientX -  a/2;
            offset = Math.min(Math.max(offset, 300), 1396);
            const size = offset;
            this.setState({
                size: size,
            },()=>{
                window.localStorage.setItem('size',size)
            })
        },100);
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
            data, groupPagesObject, selectedPagesKey, selectedGroupsKey,pages,
            searchString, connected, groupType, categories, bgColor, size, windowWidth,expandGroups
        } = this.state;

        const groupKeys = Object.keys(groupPagesObject).sort(function (pre,next) {
            return searchString ?
              (groupPagesObject[pre].matched > groupPagesObject[next].matched ? -1 : 1):
              (pre > next ? -1 :1)
        });

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

        const barSize = Number.isInteger(+size) ? size + 'px' : '';
        const bookWidth = this.myRef.current ? this.myRef.current.clientWidth : 1200;
        const expand = size / bookWidth > 0.9;

        const grid = size / bookWidth > 0.58;

        let cols = size>900?[1,2,3]:[1,2];
        if(size>1100){
            cols=[1,2,3,4]
        }
        return (
            <div className='me'>
                <div className='pagenote-me'>
                    {/*backgroundColor: bgColor,*/}
                    {/*<Tabs toggleGroups={this.toggleGroups} selectGroup={this.selectGroup} groupKeys={groupKeys} selectedGroupsKey={selectedGroupsKey} expand={expand} groupPagesObject={groupPagesObject} left={(windowWidth - bookWidth) / 2 - 60}  />*/}
                    <div ref={this.myRef} className='me' data-pagenote='1'>
                        <div className={`pages-and-detail ${expand ? 'expand' : 'fold'}`}
                             style={{ border: `1px solid ${bgColor}`,backgroundColor: bgColor  }}>
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
                                            {/*<div className='align-icons'>*/}
                                            {/*    <Grid fill={grid?'#1296db':'#666'} className='icon sort-icon' onClick={()=>this.setSize(bookWidth-4)}/>*/}
                                            {/*    <List fill={!grid?'#1296db':'#666'} className='icon sort-icon' onClick={()=>this.setSize(350)}/>*/}
                                            {/*</div>*/}
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

                                            <div className='action-tips'>
                                                <label className='action-button'>
                                                    <ImportIcon />导入<input id="import-data" type="file" style={{display: "none"}} onChange={this.onImportData} />
                                                </label>
                                                <span onClick={this.exportData} className='action-button'>
                                                    <ExportIcon />备份
                                                </span>
                                                <span>
                                                    共计 {pages.length} 个 page。注意定时备份，以免数据丢失。
                                                </span>
                                                {/*<span className="keyboard">↑</span > <span className="keyboard">↓</span>  to select pre/next item.*/}
                                            </div>
                                            <Colors onChoose={this.setColor}/>
                                        </div>
                                    </section>
                                    <aside className='split-line' onMouseDown={this.dragSize} style={{color: '#fff',backgroundColor: bgColor,}}>
                                        <div className='left'  onClick={()=>this.setSize(350)}>left&lt;</div>
                                        <div className='right' onClick={()=>this.setSize(bookWidth-4)}>&gt;right</div>
                                    </aside>
                                    {/*一些笔记tip*/}
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
                        <div className='me-footer'>
                            <div className='footer-tips'>
                                <Safe/> 仅当前浏览器可访问PAGENOTE数据(未上传服务器，请放心使用)。
                                <a href="https://www.wjx.cn/jq/69876579.aspx">问卷反馈</a>
                            </div>
                        </div>
                        <div className='aside-menu'>
                            <a href="/setting"><Setting /></a>
                        </div>
                    </div>
                </div>
                {/*<div>setting 同步浏览器书签管理器</div>*/}
            </div>
        )
    }
}
