import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
 
 return (
    <>
      {" "}
      <NavBar />
      <SessionProvider session={pageProps.session}>
        <Toaster />

        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
