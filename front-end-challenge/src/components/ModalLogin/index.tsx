import { Button, Checkbox, Form, Input, Modal } from "antd";
import useIndex from "./index.hook";
import * as css from "./index.styles";
import { ModalLoginProps } from "./index.types";

const ModalLogin = (props: ModalLoginProps) => {
  const { title, show, onCloseModal } = props;
  const { loading, handleLogin } = useIndex(props);

  return (
    <Modal title={title} open={show} onCancel={onCloseModal} footer={[]}>
      <Form
        name='basic'
        className={css.form}
        initialValues={{ remember: true }}
        onFinish={handleLogin}
        autoComplete='off'
      >
        <Form.Item
          style={{ width: "100%" }}
          name='username'
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder='Enter your username' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder='Enter your password' />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item className={css.button}>
          <Button block type='primary' htmlType='submit' loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalLogin;
