import React, {Component} from 'react'
import WebPage from "./page/WebPage";
import Groups from './Groups/Groups';
import {fetchGroups} from "../api";
import './me.scss'

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


            groupType: '',
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
        fetchGroups((result={})=>{
            const groups = result.groups || [];
            let selectedArray = [];
            try{
                const selectedKeys = localStorage.getItem('selectedKeys');
                selectedArray = selectedKeys.split(',');
            }catch (e){

            }
            this.setState({
                groups: groups,
                selectedPageKeys: new Set(selectedArray)
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

    render() {
        const {theme = {}, barSize,groups,selectedPageKeys} = this.state;
        const bgColor = theme.bgColor;
        return (
          <div className={`pages-and-detail`}
               style={{border: `1px solid ${bgColor}`, backgroundColor: bgColor, width: predefineSize + 'px'}}>
              <section className='pages' style={{width: barSize, background: bgColor}}>
                  <Groups groups={groups} selectPage={this.selectPage} selectedPageKeys={selectedPageKeys}></Groups>
              </section>
              <aside className='split-line' onMouseDown={this.dragSize} style={{color: '#fff'}}>
                  <div className='left' onClick={() => this.setSize(350)}>left&lt;</div>
                  <div className='right' onClick={() => this.setSize(predefineSize - 4)}>&gt;right</div>
              </aside>
              <WebPage width={predefineSize - barSize} keys={Array.from(selectedPageKeys)}></WebPage>
          </div>
        )
    }
}
