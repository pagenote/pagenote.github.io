import { Form, Input, AutoComplete, Button } from 'antd';
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

const options = [
  { value: 'https://dav.jianguoyun.com/dav/' },
];

export default function WebDavForm({defaultData={},onSubmit}) {
  return (
    <Form {...layout}  initialValues={defaultData} name="control-hooks" onFinish={onSubmit} validateMessages={validateMessages}>
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
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

