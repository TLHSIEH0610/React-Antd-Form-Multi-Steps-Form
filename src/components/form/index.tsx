import { Form, Space, Button, Card } from "antd";
import { renderForm } from "./renderForm";
import useFormContext from "./formContext";

export default () => {
  const { fields, setPage, title, hasNext, hasPrev } = useFormContext();

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

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
            <Button type="primary" onClick={nextPage}>
              Submit
            </Button>
          )}
        </Space>
      }
    >
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
      </Form>{" "}
    </Card>
  );
};
