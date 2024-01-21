import { Form, Space, Button, Card } from "antd";
import { renderForm } from "./renderForm";
import useFormContext from "./formContext";
import Stepper from "./stepper";
import Details from "./details";

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

  const renderDetails = () => {
    const formData = form.getFieldsValue(true);
    return;
  };

  return (
    <Card
      title={title}
      headStyle={{ borderBottom: 0 }}
      style={{
        maxWidth: "800px",
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
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Stepper />
        {!hasNext && <Details form={form} />}
        <Form
          form={form}
          name="order"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{}}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {renderForm({ fields })}
        </Form>
      </Space>
    </Card>
  );
};
