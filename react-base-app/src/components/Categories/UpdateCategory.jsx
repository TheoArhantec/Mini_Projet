import React from 'react'
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const UpdateCategory = ({ submit, category }) => {
  const { id } = category
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={submit}
    >
      <Form.Item
        label="id"
        name="id"
        initialValue={id}
      >
        <Input value={id} readOnly={true}/>
      </Form.Item>

      <Form.Item
        label="Libelle"
        name="Libelle"
        initialValue={category.name}
        rules={[{ required: true, message: 'Veuillez saisir un libelle' }]}
      >
        <Input placeholder={category.name} />
      </Form.Item>

      <Form.Item
        label="Logo"
        name="Logo"
        initialValue={category.logo}
        rules={[{ required: true, message: 'Veuillez saisir un libelle' }]}
      >
        <Input placeholder={category.logo} />
      </Form.Item>

      <Form.Item
        label="Version"
        name="Version"
        initialValue={category.version}
        rules={[{ required: true, message: 'Veuillez saisir un libelle' }]}
      >
        <Input type={'number'} placeholder={category.version} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UpdateCategory;
