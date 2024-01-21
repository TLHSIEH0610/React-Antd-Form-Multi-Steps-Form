import { FormInstance, Descriptions } from "antd";

export default ({ form }: { form: FormInstance<any> }) => {
  const data = form.getFieldsValue(true);

  return (
    <Descriptions title="Your Details:">
      {Object.entries<[string, string]>(data).map(([key, value]) => (
        <Descriptions.Item label={key}>{value}</Descriptions.Item>
      ))}
    </Descriptions>
  );
};
