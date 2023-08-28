import { rest } from "msw";
import { Coffees } from "@/features/coffe/types";
import { arabicCoffees, coffees, robustaCoffees } from "./coffees";

export const url = `${process.env.NEXT_PUBLIC_API_URL}/coffee`;
export const handlers = [
  rest.get(url, (req, res, ctx) => {
    const coffeeType = req.url.searchParams.get("type");
    const options: { [key: string]: Coffees } = {
      robusta: robustaCoffees,
      arabic: arabicCoffees,
      all: coffees,
    };
    const items =
      coffeeType && coffeeType in options ? options[coffeeType] : coffees;

    return res(ctx.json<Coffees>(items));
  }),
  rest.post(url, (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.json({}));
  }),
];
