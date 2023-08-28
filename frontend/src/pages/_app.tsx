import { ErrorBoundary } from "react-error-boundary";

import { AppProps } from "next/app";

import "@/styles/globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import Head from "next/head";
import { Notifications } from "@/components/notifications/notifications";
import { Suspense } from "react";
import { Spinner } from "@/features/coffe/components/spinner";
import { Button } from "@/components/button";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>MVST Code challenge</title>
    </Head>
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Notifications />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  </>
);

export default MyApp;
