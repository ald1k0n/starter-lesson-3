import { useAtom } from "jotai";
import { countAtom } from "./atoms";
import { Button, Typography } from "antd";

function App() {
  const [count, setCount] = useAtom(countAtom);

  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <Typography.Title level={1}>{count}</Typography.Title>
      <Button onClick={increment}>Increment</Button>
    </>
  );
}

export default App;
