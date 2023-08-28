import { fireEvent, render, screen, setup } from "@/tests/setup";
import { CreateCoffee } from "./create-coffee";

test("should display errors if form is submitted empty", async () => {
  const onSuccess = jest.fn();
  render(<CreateCoffee onSuccess={onSuccess} />);

  fireEvent.submit(screen.getByRole("button", { name: /confirm/i }));

  expect(await screen.findAllByRole("alert")).toHaveLength(5);
  expect(onSuccess).not.toBeCalled();
});

test("should submit form successfully", async () => {
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  const onSuccess = jest.fn();

  const {
    user: { type, click, upload },
  } = setup(<CreateCoffee onSuccess={onSuccess} />);

  await type(screen.getByLabelText("Name"), "Cappuccino");
  await type(screen.getByLabelText("Price"), "15");
  click(screen.getByLabelText("Arabic"));
  upload(screen.getByLabelText("Upload image"), file);
  await type(screen.getByLabelText("Description"), "coffee description");
  click(screen.getByRole("button", { name: /confirm/i }));
  expect(onSuccess).not.toBeCalled();

  expect(screen.queryAllByRole("alert")).toHaveLength(0);
});
