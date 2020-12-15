import React, {Component} from 'react'
import { Select } from 'antd';
import WebPage from "./page/WebPage";
import Groups from './Groups/Groups';
import whatsElement from 'whats-element/pure';
import {fetchGroups} from "../../../utils/api";
import './me.scss'

const whats = new whatsElement();
const { Option } = Select;
const groupTypes = [
    {
        value: 2,
        label: '按标签分组'
    },
    {
        value: 0,
        label: '按域名分组'
    },
    {
        value: 1,
        label: '按日期分组'
    },
];
const predefineSize = window.innerWidth - 160 - 2;

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVersion: '',
            theme: {
                bgColor: '#c5c5c5',
            },
            barSize: 400,


            groupType: 1,
            searchString: '',
            groups: [
                {
                    label: '默认分组',
                    pages: [
                        {
                            categories: [],
                            description: "描述内容",
                            icon: "",
                            lastModified: 0,
                            note: "笔记",
                            // snapshots: [],
                            steps: [],
                            title: 'title内容',
                            url: 'https://baidu.com',
                            version: 2
                        }
                    ]
                }
            ],
            selectedPageKeysArray: [],
            selectedPagesInfo:{

            }
        };
    }

    componentDidMount() {
        this.fetchGroupList();
        this.initSelected();
    }

    initSelected=()=>{
        let selectedArray = [];
        try{
            const selectedKeys = localStorage.getItem('selectedKeys');
            selectedArray = selectedKeys.split(',')
        }catch (e){

        }
        this.setState({
            selectedPageKeysArray: selectedArray||[]
        })
    }

    fetchGroupList=()=>{
        fetchGroups(this.state.groupType,(result={})=>{
            const groups = result.groups || [];
            this.setState({
                groups: groups,
            })
        })
    }

    selectPage=(pageKey,e)=>{
        const {selectedPageKeysArray} = this.state;
        const index = selectedPageKeysArray.indexOf(pageKey);
        if(index>=0){
            selectedPageKeysArray.splice(index,1);
        }else{
            selectedPageKeysArray.push(pageKey);
        }
        this.setState({
            selectedPageKeysArray
        });
        localStorage.setItem('selectedKeys',selectedPageKeysArray.join(','));
        // const info = whats.compute(e.target);
        // console.log(info);
    }

    changeGroupType=(type)=>{
        this.setState({
            groupType: type
        },()=>{
            this.fetchGroupList();
        })
    }

    gotoTarget=(top,element)=>{
        document.querySelector('.pages').scrollTop=top-100;

        // element.scrollIntoView();
    }

    render() {
        const {theme = {}, barSize,groups,selectedPageKeysArray,groupType} = this.state;
        const bgColor = theme.bgColor;
        return (
          <div className={`pages-and-detail`}
               style={{border: `1px solid ${bgColor}`, backgroundColor: bgColor}}>
              <section className='pages' style={{width: barSize, background: bgColor}}>
                  <Select defaultValue={groupType} style={{ width: 120 }} bordered={false} onChange={this.changeGroupType}>
                      {
                          groupTypes.map((item)=>(
                            <Option value={item.value}>{item.label}</Option>
                          ))
                      }
                  </Select>
                  <Groups groups={groups}
                          selectPage={this.selectPage}
                          selectedPageKeysArray={selectedPageKeysArray}
                          size={barSize}
                  >
                  </Groups>
              </section>
              <aside className='split-line' onMouseDown={this.dragSize} style={{color: '#fff'}}>
                  <div className='left' onClick={() => this.setSize(350)}>left&lt;</div>
                  <div className='right' onClick={() => this.setSize(predefineSize - 4)}>&gt;right</div>

                  <div className='selected-targets'>
                      {
                          selectedPageKeysArray.map((key,index)=> {
                              const relativeElement = document.querySelector('.page-item[data-page="'+key+'"]');
                              // const info = whats.compute(relativeElement);

                              const height = document.querySelector(".groups").scrollHeight;
                              const elementTop = relativeElement? relativeElement.offsetTop : -1000;
                              return (
                                <aside onClick={()=>{this.gotoTarget(elementTop,relativeElement)}} key={key} style={{top: ((elementTop)/height)*window.innerHeight+'px'}}>
                                    <div className='target-info'>
                                        {key}
                                    </div>
                                </aside>
                              )
                          })
                      }
                  </div>
              </aside>

              <WebPage keys={selectedPageKeysArray}></WebPage>
          </div>
        )
    }
}
