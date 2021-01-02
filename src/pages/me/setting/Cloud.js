import {useState,useEffect} from 'react';
import { fetchCloudInfo,saveCloudInfo,checkStatus } from "@/utils/api";
import {AutoComplete, Button, Form, Input, message, Spin,PageHeader, Descriptions,Alert} from "antd";
import CheckVersion from "@/pages/CheckVersion";

const layout = {
  labelCol: { span: 4 },
  // wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} 必填',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const options = [
  { value: 'https://dav.jianguoyun.com/dav/' },
];

const STATUS={
  CHECKING: 1,
  SUCCESS: 2,
  ERROR: 3,
}

function Cloud(){
  const [form] = Form.useForm();
  const [cloud,setCloud] = useState({});
  const [loading,setLoading] = useState(false);
  const [saving,setSaving] = useState(false);
  const [server,setServer] = useState({
    pageFiles:[],
    validate: false,
  });

  const getInfo = function (){
    setLoading(true);
    fetchCloudInfo(function (result){
      setCloud(result)
      setLoading(false);
      setSaving(false);
      checkCloud();
    })
  }

  const saveInfo = function (values){
    if(values.invite_code!=='PAGENOTE_CSN'){
      message.error('邀请码不正确，请关注微信公众号获取')
      return;
    }
    setSaving(true);
    saveCloudInfo(values,function (result){
      getInfo();
      console.log('save result',result)
      message.success('已保存');
    });
  }

  const checkCloud = function (){
    checkStatus(function (checkResult){
      console.log(checkResult,'checkResult')
      setServer(checkResult.cloud||{});
    })
  }


  useEffect(()=>{
    getInfo();
    checkCloud();
  },[])

  if(loading===false && saving===false){
    form.setFieldsValue(cloud);
  }

  return(
    <Spin spinning={loading}>
      <div className='header-info'>
        <PageHeader
          // ghost={false}
          title="云盘存储设置"
          subTitle={<Alert message={server.validate?'已联通':'未联通'} type={server.validate?'success':'error'} showIcon />}
          // extra={[
          //   <Button onClick={checkCloud} key="1" type="primary">
          //     刷新状态
          //   </Button>,
          // ]}
        >
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="检测时间">{new Date(server.lastCheckTime).toLocaleString()}</Descriptions.Item>
            <Descriptions.Item label="日志">
              {
                server.msg
              }
            </Descriptions.Item>
            <Descriptions.Item label="说明">
              {
                server.validate?'':`1、请确认账号密码正确；2、可能是受到云盘服务商限制，请稍等片刻，将会自动重试联通。点击保存，可手动重试`
              }
              {
                (!server.validate&&server.server===options[0].value)? <a target='_blank' href="https://help.jianguoyun.com/?p=2064">坚果云说明</a>:''
              }
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      <Form {...layout} form={form}   name="control-hooks" onFinish={saveInfo} validateMessages={validateMessages}>
        <Form.Item name={['invite_code']} label="邀请码" rules={[{ required: true }]}>
          <Input placeholder='关注公众号，获取邀请码' />
        </Form.Item>
        <Form.Item name={['server']} label="云盘服务商地址" rules={[{ required: true }]}>
          <AutoComplete
            options={options}
            placeholder="你的云盘所支持webdav的服务地址"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
        </Form.Item>
        <Form.Item name={'username'} label="账户名称" rules={[{ required: true }]}>
          <Input placeholder='云盘账户' />
        </Form.Item>
        <Form.Item name={['password']} label="账户密码" rules={[{ required: true }]}>
          <Input.Password placeholder='云盘提供的身份密钥' />
        </Form.Item>
        <Form.Item name={['secret']} label="数据加密存储密码" rules={[{ required: true }]}>
          <Input.Password placeholder='将使用此密码进行加密后存储。注意：修改后无法解密历史数据' />
        </Form.Item>
        <Form.Item name={['path']} label="云盘存储路径" rules={[{ required: true }]}>
          <Input placeholder='PAGENOTE数据的存储路径，如 /pagenote' />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button loading={saving}  type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default CheckVersion(Cloud,'0.13.3')
