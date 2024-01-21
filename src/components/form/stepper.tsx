import { Steps } from "antd";
import useFormContext from "./formContext";

export default () => {
  const { page } = useFormContext();

  return (
    <Steps
      size="small"
      current={page}
      items={[
        {
          title: "Select Ticket",
        },
        {
          title: "Billing Info",
        },
        {
          title: "Confirm Details",
        },
      ]}
    />
  );
};
