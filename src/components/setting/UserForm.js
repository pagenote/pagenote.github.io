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
  const [form] = Form.useForm();
  form.setFieldsValue(defaultData);
  return (
    <Form {...layout}  form={form} name="control-hooks" onFinish={onSubmit} validateMessages={validateMessages}>
      <Form.Item name={'uid'} label="用户ID" rules={[{ required: true }]}>
        <Input disabled />
      </Form.Item>
      <Form.Item name={['name']} label="用户昵称">
        <Input placeholder='为你当前浏览器账户取一个名字' />
      </Form.Item>
      <Form.Item name={['email']} label="邮箱" rules={[{ type: 'email' }]}>
        <Input placeholder='PAGENOTE 唯一身份，多个浏览器使用同一个邮箱表示同一用户。' />
      </Form.Item>
      <Form.Item name={['doId']} label={<div><a target='_blank' href="/donation">打赏</a>交易号</div>}>
        <Input placeholder='如果你曾打赏过，请输入你的转账单号（微信）、交易订单号（支付宝）' />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

