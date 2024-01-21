import { Form } from "antd";
import { renderForm } from "./renderForm";
import { billingFields } from "./fields";

export default () => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      //   onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {renderForm({ fields: billingFields })}
    </Form>
  );
};
