import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { CreateCoffeeSchema } from "../components/create-coffee/create-coffee";
import { axios } from "@/lib/axios";
import { AxiosError } from "axios";

function createCoffee(data: CreateCoffeeSchema): Promise<void> {
  return axios.post("/coffee", data);
}

export type onCreateCoffeeError = { title: string; message: string };

type Props = {
  onSuccess: () => void;
  onError: (error: onCreateCoffeeError) => void;
};

export function useCreateCoffee(props: Props) {
  return useMutation({
    mutationFn: (data: CreateCoffeeSchema) => createCoffee(data),
    onSuccess: (_, data) => {
      queryClient.invalidateQueries({ queryKey: ["coffees", data.type] });
      queryClient.invalidateQueries({ queryKey: ["coffees"] });
      props.onSuccess();
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        for (const [key, value] of Object.entries(err.response?.data.message)) {
          props.onError({ title: key, message: value as string });
        }
      }
    },
  });
}
