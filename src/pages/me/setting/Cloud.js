import {useState,useEffect} from 'react';
import { fetchCloudInfo,saveCloudInfo,checkStatus } from "@/utils/api";
import {AutoComplete, Button, Form, Input, message, Spin,PageHeader, Descriptions,Alert} from "antd";
import CheckVersion from "@/pages/CheckVersion";
import CheckVersionPart from "@/pages/CheckVersionPart";
import {useTranslation} from "react-i18next";

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
  const { t, i18n } = useTranslation();
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
      result.server = result.server || options[0];
      setCloud(result)
      setLoading(false);
      setSaving(false);
      checkCloud();
    })
  }

  const saveInfo = function (values){
    if(values.invite_code!=='PAGENOTE-CSN'){
      message.error(t('error invite code. Get it in wechat'))
      return;
    }
    setSaving(true);
    saveCloudInfo(values,function (result){
      getInfo();
      console.log('save result',result)
      message.success(t('saved'));
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
        <CheckVersionPart version='0.13.4'>
          <PageHeader
            title={t('cloud store setting')}
            subTitle={<Alert message={server.validate?t("connected"):t("unconnected")} type={server.validate?'success':'error'} showIcon />}
          >
            <Descriptions size="small" column={2}>
              <Descriptions.Item label={t('last check time')}>{new Date(server.lastCheckTime).toLocaleString()}</Descriptions.Item>
              <Descriptions.Item label={t('logs')}>
                {
                  server.msg
                }
              </Descriptions.Item>
              <Descriptions.Item label={t('tips')}>
                {
                  server.validate?'':`1、请确认账号密码正确；2、可能是受到云盘服务商限制，请稍等片刻，将会自动重试联通。点击保存，可手动重试`
                }
                {
                  (!server.validate&&server.server===options[0].value)? <a target='_blank' href="https://help.jianguoyun.com/?p=2064">坚果云说明</a>:''
                }
              </Descriptions.Item>
              <Descriptions.Item label={t('tips')}>
                当前功能仍然处于公测阶段，功能可能尚不完善，如遇问题可入群反馈。如若希望使用完整有效功能，请等待正式版发布后使用。
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </CheckVersionPart>
      </div>
      <Form {...layout} form={form}   name="control-hooks" onFinish={saveInfo} validateMessages={validateMessages}>
        <Form.Item name={['invite_code']} label={t('invite code')} rules={[{ required: true }]}>
          <Input placeholder='关注公众号，获取邀请码' />
        </Form.Item>
        <Form.Item name={['server']} label="云盘服务商地址" rules={[{ required: true }]}>
          <AutoComplete
            options={options}
            placeholder="你的云盘所支持webdav的服务地址"
            filterOption={(inputValue, option) =>
              (option.value||'').toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
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
