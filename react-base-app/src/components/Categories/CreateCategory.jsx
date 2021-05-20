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
        name="name"
        rules={[{ required: true, message: 'Veuillez saisir un libelle' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Logo"
        name="logo"
        rules={[{ required: true, message: 'Veuillez saisir un Logo' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Version"
        name="version"
        rules={[{ required: true, message: 'Veuillez saisir une version' }]}
      >
        <Input type={'number'}/>
      </Form.Item>

      <Form.Item
        label="Color"
        name="color"
        rules={[{ required: true, message: 'Veuillez saisir un libelle' }]}
      >
        <Input type={'color'} />
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
