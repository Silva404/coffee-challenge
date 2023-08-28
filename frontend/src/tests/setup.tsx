import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";

import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";
import { server } from "./mocks/server";
import userEvent from "@testing-library/user-event";

const testingClient = new QueryClient({
  logger: { log: console.log, warn: console.warn, error: () => null },
  defaultOptions: { queries: { retry: false } },
});

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  });
});

afterEach(() => {
  server.resetHandlers();
  testingClient.clear();
});

afterAll(() => {
  server.close();
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={testingClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };

export function setup(ui: ReactElement) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...customRender(ui),
  };
}
