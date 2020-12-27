import React, {Component} from 'react'
import CommonPage from "../CommonPage";
import Bridge from "../../utils/extensionBridge";
import './index.scss'
import { Table,PageHeader } from 'antd';

const columns = [
  { title: 'Time', dataIndex: 'time', key: 'time' },
  { title: 'Page', dataIndex: 'page', key: 'page' },
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
      errors:[],
    }
  }
  componentDidMount() {
    bridge = new Bridge(document.getElementById('messenger'),'page','extension');
    this.getErrors();
  }

  getErrors=()=>{
    bridge.sendMessage('get_errors',null,({data})=>{
      console.log(data)
      this.setState({
        errors: data,
      })
    })
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='doctor'>
        <PageHeader
          className="site-page-header"
          title="运行日志"
          subTitle="检测运行状态是否正常，重启浏览器后日志清空。"
        >
          <a href="https://github.com/rowthan/pagenote/issues">反馈bug</a>
        </PageHeader>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{(record.error||{}).msg}</p>,
            rowExpandable: record => record.error,
          }}
          dataSource={errors}
        />
      </div>
    )
  }
}

CommonPage(RatePage);
