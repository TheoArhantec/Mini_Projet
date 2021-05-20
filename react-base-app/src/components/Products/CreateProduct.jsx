import React from 'react'
import { Form, Input, Button, Select } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CreateProduct = ({ submit, category }) => {

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={submit}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Veuillez saisir un nom' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Brand"
        name="brand"
        rules={[{ required: true, message: 'Veuillez saisir un brand' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Veuillez saisir un prix' }]}
      >
        <Input type={'number'}/>
      </Form.Item>

      <Form.Item label="Category" name="category">
        <Select>
          {category.map(cat => (
              <Select.Option value={cat.id}>{cat.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateProduct;
