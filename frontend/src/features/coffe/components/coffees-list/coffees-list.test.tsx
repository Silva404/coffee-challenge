import { screen, waitFor } from "@testing-library/react";
import { CoffeesList } from "./coffees-list";
import { render } from "@/tests/setup";
import { coffees } from "@/tests/mocks/coffees";

const tab = "Robusta";
test("should display the skeletons while the request is loading", () => {
  render(<CoffeesList tab={tab} />);
  expect(screen.getByTestId("coffee-skeletons")).toBeInTheDocument();
});

test("should render the coffee list", async () => {
  render(<CoffeesList tab={tab} />);

  await waitFor(() => {
    coffees.forEach((coffee) => {
      expect(screen.getByText(coffee.name)).toBeInTheDocument();
    });
    expect(screen.getAllByTestId("coffee").length).toBe(6);
  });
});
