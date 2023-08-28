import { useQuery } from "@tanstack/react-query";
import { Coffees, coffeesParser } from "../types";
import { axios } from "@/lib/axios";

async function getCoffees(coffeeType: string): Promise<Coffees> {
  const coffees = await axios.get<Coffees>(
    `/coffee${coffeeType && coffeeType !== "All" ? `?type=${coffeeType}` : ``}`
  );
  return coffeesParser.parse(coffees.data);
}

export function useGetCoffees(coffeeType = "") {
  return useQuery({
    queryKey: ["coffees", coffeeType],
    queryFn: () => getCoffees(coffeeType),
  });
}
