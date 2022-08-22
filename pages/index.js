import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import Footer from "../components/footer.tsx";

export default function Home() {
  return (
    <>
      <Box>
        <Head>
          <title>
            Straxbridge - cross-chain EVM, EVM, and L2 blockchains bridge
          </title>
          <meta
            name="description"
            content="cross-chain EVM, EVM, and L2 blockchains bridge  powered by deBridge & Unstoppable domain: Bulit with Nextjs and Chakra UI"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Hero />
        <Footer />
      </Box>
    </>
  );
}
