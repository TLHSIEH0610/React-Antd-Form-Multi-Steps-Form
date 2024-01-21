import { FormField } from "./models";
import { Radio, Checkbox, Form, Input, Space, Select } from "antd";

export const renderForm = ({ fields }: { fields: FormField[] }) =>
  fields.map((field) => (
    <Form.Item
      label={field.label}
      name={field.name as string}
      key={field.name}
      rules={
        field.required
          ? [{ required: true, message: "This is a required field" }]
          : undefined
      }
    >
      {renderField(field)}
    </Form.Item>
  ));

const renderField = (field: FormField) => {
  switch (field.type) {
    case "text":
      return <Input allowClear={!field.required} />;
    case "textarea":
      return (
        <Input.TextArea
          rows={4}
          showCount={field.limit != null}
          maxLength={field.limit}
          allowClear={!field.required}
        />
      );
    case "radio":
      return (
        <Radio.Group>
          <Space direction={field.direction}>
            {field.options.map(({ value, label }) => (
              <Radio value={value} key={value}>
                {label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      );
    case "select":
      return (
        <Select
          options={field.options}
          allowClear={!field.required}
          filterOption={field.filter}
          showSearch={field.filter != null}
          optionFilterProp={field.filter && "children"}
        />
      );
    case "checkbox":
      return <Checkbox>{field.content}</Checkbox>;
    case "url":
      return <Input addonBefore={field.prefix} allowClear={!field.required} />;
    default:
      throw new Error("Not a supported field:" + field);
  }
};
