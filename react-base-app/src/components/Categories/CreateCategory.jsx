import React from 'react'
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CreateCategory = ({ submit }) => {

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={submit}
    >
      <Form.Item
        label="Libelle"
        name="Libelle"
        rules={[{ required: true, message: 'Veuillez saisir un libelle' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateCategory;
