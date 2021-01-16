import React, {Component} from 'react'
import CommonPage from "../CommonPage";
import Bridge from "../../utils/extensionBridge";
import 'antd/dist/antd.css';
import './index.scss'
import { Table,PageHeader,Button } from 'antd';

const columns = [
  { title: 'Time', dataIndex: 'time', key: 'log',
    render: (text) => <span>{new Date(text).toLocaleString()}</span>},
  { title: 'Info', dataIndex: 'log', key: ['log'] ,width:400,render: (text, record) => (
      <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
        {text}
      </div>
    ),},
  { title: 'level', dataIndex: 'level',key: ['level'],filters: [
      {
        text: '普通日志',
        value: 'dev',
      },
      {
        text: '成功日志',
        value: 'success',
      },
      {
        text: '错误日志',
        value: 'error',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.level === value},
  { title: 'category', dataIndex: 'category',key: ['category']}
  // {
  //   title: 'Action',
  //   dataIndex: '',
  //   key: 'x',
  //   render: () => <a>Delete</a>,
  // },
];

let bridge = null;



export default class RatePage extends Component{
  constructor(props) {
    super(props);
    this.state={
      logs:[],
    }
    bridge = new Bridge(null,'doctor','extension');
  }
  componentDidMount() {
    this.listenLog();

  }

  listenLog=()=>{
    bridge.addListener('log', ({data})=>{
      this.setState({
        logs: data.logs || []
      })
    })
  }

  askLogs=()=>{
    bridge.sendMessage('push_logs',{
      level: 'dev',
      log: '获取日志',
      category: 'doctor'
    })
  }

  render() {
    const {logs} = this.state;
    return (
      <div className='doctor'>
        <PageHeader
          className="site-page-header"
          title="运行日志"
          subTitle="检测运行状态是否正常，重启浏览器后日志清空。"
          extra={[
            <Button key="3" onClick={this.askLogs}>获取日志</Button>,
          ]}
        >
          <div>
            说明： 日志级别：dev(普通日志)、success(成功日志)、error(错误日志)。一般情况下你只需要关注 error
          </div>
          <a href="https://github.com/rowthan/pagenote/issues">反馈bug</a>
        </PageHeader>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{(record.error||{}).msg}</p>,
            rowExpandable: record => record.error,
          }}
          dataSource={logs}
        />
      </div>
    )
  }
}

CommonPage(RatePage);
