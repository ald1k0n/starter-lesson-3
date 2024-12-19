import { User } from "./App";
import { login } from "./service";
import { useMutation } from "@tanstack/react-query";

const useAuthorization = () => {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (values: User) => {
      const data = await login(values);
      return data;
    },

    onSuccess: () => {},
    onError: () => {},
  });

  return { login: mutateAsync, isLoading: isPending };
};

export default useAuthorization;
