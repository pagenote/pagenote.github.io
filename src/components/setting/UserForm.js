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

export default function UserForm({defaultData={}}) {
  const onFinish = values => {
    console.log(values,'tijiao');
  };
  // const [form] = Form.useForm(defaultData);
  console.log(defaultData)

  return (
    <Form {...layout}  initialValues={defaultData} name="control-hooks" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={'uid'} label="用户ID" rules={[{ required: true }]}>
        <Input disabled />
      </Form.Item>
      <Form.Item name={['name']} label="用户昵称">
        <Input />
      </Form.Item>
      <Form.Item name={['email']} label="邮箱" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['cloud','username']}
                 label="webdav云盘用户名">
        <Input.Input />
      </Form.Item>
      <Form.Item name={['cloud','password']}
                 label="webdav云盘密码">
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

