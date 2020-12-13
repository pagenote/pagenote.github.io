import React, {Component} from 'react'
import { Select } from 'antd';
import WebPage from "./page/WebPage";
import Groups from './Groups/Groups';
import {fetchGroups} from "../../../utils/api";
import './me.scss'

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
            selectedPageKeys: new Set(),
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
            selectedArray = selectedKeys.split(',');
            selectedArray = selectedArray.filter((item)=>{
                return !!item
            })
        }catch (e){

        }
        this.setState({
            selectedPageKeys: new Set(selectedArray)
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

    selectPage=(pageKey)=>{
        const {selectedPageKeys} = this.state;
        selectedPageKeys.has(pageKey) ? selectedPageKeys.delete(pageKey) : selectedPageKeys.add(pageKey);
        this.setState({
            selectedPageKeys
        });
        localStorage.setItem('selectedKeys',Array.from(selectedPageKeys).toString());
    }

    changeGroupType=(type)=>{
        this.setState({
            groupType: type
        },()=>{
            this.fetchGroupList();
        })
    }

    render() {
        const {theme = {}, barSize,groups,selectedPageKeys,groupType} = this.state;
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
                  <Groups groups={groups} selectPage={this.selectPage} selectedPageKeys={selectedPageKeys}></Groups>
              </section>
              <aside className='split-line' onMouseDown={this.dragSize} style={{color: '#fff'}}>
                  <div className='left' onClick={() => this.setSize(350)}>left&lt;</div>
                  <div className='right' onClick={() => this.setSize(predefineSize - 4)}>&gt;right</div>
              </aside>
              <WebPage keys={Array.from(selectedPageKeys)}></WebPage>
          </div>
        )
    }
}
