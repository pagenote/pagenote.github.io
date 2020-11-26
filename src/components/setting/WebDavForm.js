import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

export default function UserForm({defaultData={},onSubmit}) {
  return (
    <Form {...layout}  initialValues={defaultData} name="control-hooks" onFinish={onSubmit} validateMessages={validateMessages}>
      <Form.Item name={['server']} label="云盘服务商地址" rules={[{ required: true }]}>
        <Input placeholder='你的云盘所支持webdav的服务地址，如：https://dav.jianguoyun.com/dav/' />
      </Form.Item>
      <Form.Item name={'username'} label="账户名称" rules={[{ required: true }]}>
        <Input placeholder='云盘账户' />
      </Form.Item>
      <Form.Item name={['password']} label="账户密码" rules={[{ required: true }]}>
        <Input.Password placeholder='云盘提供的身份密钥' />
      </Form.Item>
      <Form.Item name={['secret']} label="数据加密密码" rules={[{ required: true }]}>
        <Input.Password disabled={!!defaultData.secret} placeholder='我们将使用此密码加密后上传到你的云盘空间，注意：保存后将不支持修改。' />
      </Form.Item>
      <Form.Item name={['path']} label="云盘存储路径" rules={[{ required: true }]}>
        <Input placeholder='PAGENOTE数据的存储路径，如 /pagenote' />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

