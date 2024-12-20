import { useLoginQuery } from "./redux/serivces";

function App() {
  const { data, isLoading } = useLoginQuery();

  if (isLoading) return <>Loading...</>;

  return <code>{JSON.stringify(data)}</code>;
}

export default App;
