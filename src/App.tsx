import { Input } from "antd";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm();

  const handleFinish = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFinish)}>
      <Input onChange={(e) => setValue("username", e.target.value)} />

      {errors.username && (
        <p style={{ color: "red" }}>{errors.username.message}</p>
      )}
      <input {...register("password")} />
      <button disabled={!isValid} type="submit">
        submit
      </button>
    </form>
  );
}

export default App;
