import { Button, Form, Input, Modal } from "antd";
import useIndex from "./index.hook";
import * as css from "./index.styles";
import { ModalSignUpProps } from "./index.types";

const ModalSignUp = (props: ModalSignUpProps) => {
  const { title, show, onCloseModal } = props;
  const { loading, handleSignUp } = useIndex(props);

  return (
    <Modal title={title} open={show} onCancel={onCloseModal} footer={[]}>
      <Form
        name='basic'
        className={css.form}
        initialValues={{ remember: true }}
        onFinish={handleSignUp}
        autoComplete='off'
      >
        <Form.Item
          style={{ width: "100%" }}
          name='fullname'
          rules={[{ required: true, message: "Please input your fullname!" }]}
        >
          <Input style={{ width: "100%" }} placeholder='Enter your fullname' />
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name='username'
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: "100%" }} placeholder='Enter your username' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder='Enter your password' />
        </Form.Item>

        <Form.Item className={css.button}>
          <Button block type='primary' htmlType='submit' loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalSignUp;
