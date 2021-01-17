import {useState,useEffect} from 'react';
import { fetchUserInfo,setUserInfo } from "@/utils/api";
import {Button, Form, Input, message, Spin} from 'antd';
import CheckVersion from "@/pages/CheckVersion";
import {useTranslation} from "react-i18next";

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

const layout = {
  labelCol: { span: 4 },
  // wrapperCol: { span: 16 },
};

function Cloud(){
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const [userInfo,setInfo] = useState({});
  const [loading,setLoading] = useState(false);
  const [saving,setSaving] = useState(false);
  const getInfo = function (){
    setLoading(true);
    fetchUserInfo(function (result){
      setInfo(result);
      setLoading(false);
    })
  }

  const saveUserInfo = function (values){
    setSaving(true);
    setUserInfo(values,function (result){
      setSaving(false);
      setInfo(result);
      message.success(t('saved'))
    });
  }

  useEffect(()=>{
    getInfo()
  },[])


  if(loading===false && saving===false){
    form.setFieldsValue(userInfo);
  }

  return(
    <Spin spinning={loading}>
      <Form {...layout}  form={form} name="control-hooks" onFinish={saveUserInfo} validateMessages={validateMessages}>
        <Form.Item name={'uid'} label={t('user id')} rules={[{ required: true }]}>
          <Input disabled />
        </Form.Item>
        <Form.Item name={['name']} label={t("nickname")}>
          <Input placeholder={t('set a username for your account')} />
        </Form.Item>
        <Form.Item name={['email']} label={t('email')} rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['doId']} label={<div><a target='_blank' href="/donation">
          {t("donation")}</a>{t('record id')}</div>}>
          <Input placeholder={t('set your donation record id in alipay or wechat')} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button loading={saving} type="primary" htmlType="submit" >
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default CheckVersion(Cloud,'0.13.5')
