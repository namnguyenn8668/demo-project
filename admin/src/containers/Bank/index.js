import React, { useEffect } from 'react'
import { Typography, Form, Input, Button, message } from 'antd'
import api from '../../api'

export default () => {
  const [form] = Form.useForm()

  const getData = async () => {
    try {
      const { data } = await api.get('/link/bank')
      form.setFieldValue('name', data.data.name)
      form.setFieldValue('number', data.data.number)
      form.setFieldValue('bank_name', data.data.bank_name)
    } catch (err) { }
  }

  const onFinish = async values => {
    try {
      await api.put('/link/updateBank/65413ba2f494f858f10661a3', { name: values.name || "", number: values.number || "", bank_name: values.bank_name || "" })
      message.success('Thay đổi thành công')
    } catch (err) { }
  }

  useEffect(() => {
    getData()
  })

  return (
    <div>
      <Typography.Title level={5}> Thêm thông tin ngân hàng</Typography.Title>
      <br />
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        initialValues={{ name: '', number: '', bank_name: '' }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <div>
          <Form.Item
            style={{ width: 350 }}
            label="Tên chủ tài khoản"
            name="name"
          // rules={[{ required: true, message: 'Không thể trống!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ width: 350 }}
            label="Số tài khoản"
            name="number"
          // rules={[{ required: true, message: 'Không thể trống!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ width: 350 }}
            label="Tên ngân hàng"
            name="bank_name"
          // rules={[{ required: true, message: 'Không thể trống!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item style={{ marginTop: 30 }}>
            <Button type="primary" htmlType="submit">
              Thay đổi
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
