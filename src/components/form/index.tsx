import { Form, Space, Button } from "antd";
import { renderForm } from "./renderForm";
import useFormContext from "./formContext";

export default () => {
  const { fields, setPage } = useFormContext();

  const nextPage = () => setPage((prev) => prev - 1);

  const prevPage = () => setPage((prev) => prev + 1);

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
      {renderForm({ fields })}
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Space>
          <Button type="primary" onClick={prevPage}>
            Back
          </Button>
          <Button type="primary" onClick={nextPage}>
            Next
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
