import { useForm } from "react-hook-form";
import { z } from "zod";
import { coffeeType } from "../../types";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/label";
import { FormError } from "@/components/form-error";

const MAX_FILE_SIZE = 4 * 1024 * 1024;

import { onCreateCoffeeError, useCreateCoffee } from "../../api/create-coffee";
import { Spinner } from "../../components/spinner";
import { useNotificationStore } from "@/stores/notifications";

const createCoffeeSchema = z
  .object({
    name: z.string().min(3, "Please type a name"),
    price: z
      .number({
        required_error: "Please add a price",
        invalid_type_error: "Please add a valid price",
      })
      .positive("Please add a positive price"),
    type: coffeeType,
    image:
      typeof window === "undefined"
        ? z.undefined()
        : z
            .instanceof(FileList)
            .refine((files) => files.length > 0, "Please add a image")
            .transform((files) => files.item(0))
            .refine(
              (file) => file!.size <= MAX_FILE_SIZE,
              "Max file size is 4mb"
            )
            .transform(() => "http://localhost.com"),
    description: z.string().min(3, "Please type a description"),
  })
  .required();

export type CreateCoffeeSchema = z.infer<typeof createCoffeeSchema>;

type Props = {
  onSuccess: () => void;
};

export function CreateCoffee(props: Props) {
  const form = useForm<CreateCoffeeSchema>({
    resolver: zodResolver(createCoffeeSchema),
  });
  const { addNotification } = useNotificationStore();
  const mutation = useCreateCoffee({
    onSuccess: () => {
      props.onSuccess();
      addNotification({
        type: "success",
        title: "New coffee created successfully.",
      });
    },
    onError: (error: onCreateCoffeeError) => {
      addNotification({
        type: "error",
        title: error.title,
        message: error.message,
      });
    },
  });

  async function onSubmit(data: CreateCoffeeSchema) {
    mutation.mutate(data);
  }

  const isLoading = mutation.isLoading || form.formState.isSubmitting;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="relative rounded bg-footer flex flex-col items-center gap-4 lg:gap-6 w-full px-4 py-14 lg:p-28"
    >
      <h1 className="text-white text-5xl font-mono">CREATE NEW</h1>
      <div className="w-full flex flex-col gap-5 lg:gap-4 lg:grid grid-cols-3">
        <div className="flex flex-col items-start gap-2 w-full lg:col-span-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name your coffee here"
            {...form.register("name")}
          />
          <FormError error={form.formState.errors.name?.message} />
        </div>
        <div className="flex flex-col items-start gap-2 w-full lg:col-span-1">
          <Label htmlFor="price">Price</Label>
          <div className="relative w-full">
            <Input
              id="price"
              type="number"
              placeholder="0.00"
              {...form.register("price", { valueAsNumber: true })}
            />
            <span className="absolute text-normal text-white/80 right-4 top-2">
              €
            </span>
          </div>
          <FormError error={form.formState.errors.price?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-gray-secondary text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Type
        </h1>
        <ul className="flex lg:grid w-full gap-3 lg:gap-2 lg:grid-cols-2">
          <li className="w-full">
            <input
              {...form.register("type")}
              className="hidden peer"
              type="radio"
              id="arabic"
              value="Arabic"
            />
            <label
              htmlFor="arabic"
              className="inline-flex items-center justify-between w-full p-3 text-center text-gray-secondary/90 bg-transparent border border-gray-secondary rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-primary"
            >
              <span className="w-full">Arabic</span>
            </label>
          </li>
          <li className="w-full">
            <input
              {...form.register("type")}
              type="radio"
              id="robusta"
              value="Robusta"
              className="hidden peer"
            />
            <label
              htmlFor="robusta"
              className="inline-flex items-center justify-between w-full p-3 text-center text-gray-secondary/90 bg-transparent border border-gray-secondary rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-primary"
            >
              <span className="w-full">Robusta</span>
            </label>
          </li>
        </ul>
        <FormError error={form.formState.errors.type?.message} />
      </div>

      <div className="flex flex-col items-start gap-2 w-full">
        <Label htmlFor="image">Upload image</Label>
        <Input
          type="file"
          id="image"
          accept="image/*"
          placeholder="Past image URL here"
          {...form.register("image")}
        />
        <FormError error={form.formState.errors.image?.message as string} />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          id="description"
          placeholder="Add a description"
          {...form.register("description")}
        />
        <FormError error={form.formState.errors.description?.message} />
      </div>
      <div className="flex items-center justify-center flex-col mt-5 gap-3 lg:gap-4 lg:flex-row w-full">
        <Button variant="ghost" type="button" onClick={props.onSuccess}>
          Discard
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Spinner />}
          Confirm
        </Button>
      </div>
    </form>
  );
}
