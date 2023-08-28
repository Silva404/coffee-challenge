import { AnimatePresence } from "framer-motion";
import { useGetCoffees } from "../../api/get-coffees";
import { CoffeCard } from "../coffe-card";

const MAX_AMOUNT_OF_COFFES = 6;

export function CoffeesList({ tab }: { tab: string }) {
  const coffees = useGetCoffees(tab);

  if (coffees.isError) {
    return (
      <div className="container flex items-center px-6 py-12 mx-auto text-white font-sans">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <h1 className="mt-3 text-2xl font-semibold text-white/90 dark:text-white md:text-3xl">
            Something went wrong!
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Please try refreshing the page or try again another time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className="w-full max-w-6xl">
      <div
        className="grid grid-cols-1 p-6 gap-6 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10 w-full"
        data-testid={coffees.isLoading ? "coffee-skeletons" : ""}
      >
        {coffees.isLoading ? (
          <>
            {Array(MAX_AMOUNT_OF_COFFES)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse w-full bg-[hsl(210 40% 96.1%)]  rounded p-12 bg-white/10 h-[472px] hover:ring-2 ring-white/10"
                />
              ))}
          </>
        ) : (
          <AnimatePresence>
            {coffees.isSuccess &&
              coffees.data.map((coffee) => (
                <CoffeCard key={coffee.id} coffee={coffee} />
              ))}
          </AnimatePresence>
        )}
      </div>
    </ul>
  );
}
