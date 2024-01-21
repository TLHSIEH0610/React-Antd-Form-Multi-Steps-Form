import { Form, Space, Button, Card } from "antd";
import { renderForm } from "./renderForm";
import useFormContext from "./formContext";

export default () => {
  const { fields, setPage, title, hasNext, hasPrev } = useFormContext();
  const [form] = Form.useForm();
  const nextPage = async () => {
    try {
      await form.validateFields();
    } catch (e) {
      return console.error(e);
    }
    setPage((prev) => prev + 1);
  };

  const prevPage = () => setPage((prev) => prev - 1);

  const onFinish = async () => {
    try {
      await form.validateFields();
      const formData = form.getFieldsValue(true);
      console.log({ formData });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card
      title={title}
      style={{
        width: "800px",
        margin: "auto",
      }}
      extra={
        <Space>
          <Button type="primary" onClick={prevPage} disabled={!hasPrev}>
            Back
          </Button>
          {hasNext ? (
            <Button type="primary" onClick={nextPage}>
              Next
            </Button>
          ) : (
            <Button type="primary" onClick={onFinish}>
              Submit
            </Button>
          )}
        </Space>
      }
    >
      <Form
        form={form}
        name="order"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {renderForm({ fields })}
      </Form>{" "}
    </Card>
  );
};
