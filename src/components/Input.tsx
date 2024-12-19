import { Form, FormItemProps } from "antd";
import { FC } from "react";

type IProps = FormItemProps & FormItemProps<unknown>;

export const Input: FC<IProps> = (props) => {
  return (
    <Form.Item {...props} label="password">
      <Input {...props} />
    </Form.Item>
  );
};
