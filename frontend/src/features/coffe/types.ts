import { z } from "zod";

export const coffeeType = z.enum(["Arabic", "Robusta"], {
  required_error: "Type is required",
  invalid_type_error: "Type is required",
});

const coffe = z.object({
  id: z.string().uuid(),
  name: z.string().min(3),
  price: z.number().nonnegative(),
  type: coffeeType,
  image: z.string().url(),
  description: z.string().min(5),
});

export const coffeesParser = z.array(coffe);

export type Coffee = z.infer<typeof coffe>;

export type Coffees = z.infer<typeof coffeesParser>;
