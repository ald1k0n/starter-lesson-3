import { Input, Form, Button } from "antd";
import useAuthorization from "./useAuthorization";

export type User = {
  email: string;
  username: string;
  password: string;
};

function App() {
  const [form] = Form.useForm();
  const { isLoading, login } = useAuthorization();

  return (
    <Form form={form} onFinish={login} layout="vertical">
      {/* <Form.Item name="username" label="username">
        <Input />
      </Form.Item> */}
      <Form.Item name="email" label="email">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="password">
        <Input />
      </Form.Item>

      <Button loading={isLoading} type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );

  // return <>sdhfjdshf</>;
}

export default App;
