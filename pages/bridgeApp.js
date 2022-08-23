import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";

import Bridgenavbar from "../components/bridgenavbar.tsx";
import Navbar from "../components/navbar.tsx";
import Bridge from "../components/bridge.tsx";

export default function BridgeApp() {
  const BoxBgColor = useColorModeValue("#181A60", "gray.600");

  return (
    <>
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
      <Box bgColor={BoxBgColor} minHeight="100vh">
        <Bridgenavbar />
        <Bridge />
      </Box>
    </>
  );
}
