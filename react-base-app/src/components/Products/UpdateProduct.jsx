import React from 'react'
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const UpdateProduct = ({ submit, product }) => {
  const { id } = product
  return (
    <Form
      {...layout}
      name="basic"
      key={id}
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
        label="Non"
        name="name"
        initialValue={product.name}
        rules={[{ required: true, message: 'Veuillez saisir un nom' }]}
      >
        <Input placeholder={product.name} />
      </Form.Item>

      <Form.Item
        label="Brand"
        name="brand"
        initialValue={product.brand}
        rules={[{ required: true, message: 'Veuillez saisir un brand' }]}
      >
        <Input placeholder={product.brand} />
      </Form.Item>

      <Form.Item
        label="Prix"
        name="price"
        initialValue={product.price}
        rules={[{ required: true, message: 'Veuillez saisir un prix' }]}
      >
        <Input placeholder={product.price} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UpdateProduct;
