import React, { useState } from "react";
import UAuth from "@uauth/js";
import { Button, useColorModeValue } from "@chakra-ui/react";

const uauth = new UAuth({
  clientID: "d2471270-e150-4b5d-a187-75da88dec6ca",
  redirectUri: "https://uns-strax-bridge.vercel.app/bridgeApp",
  scope: "openid wallet",
});

function ConnectUNSD() {
  const ButtonColorMode1 = useColorModeValue("gray.600", "#303E46");
  const [Uauth, setUauth] = useState();

  async function Connect() {
    try {
      const authorization = await uauth.loginWithPopup();
      setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]);

      await authenticate();
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    uauth.logout();
    logout();
  }

  function log() {
    if (Uauth === null || Uauth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }

  const getEllipsisTxt = (str, n = 4) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
  };

  return (
    <>
      <Button
        bg="#BA32D7"
        color="#1CD6CE"
        variant="outline"
        w="4xs"
        mx={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "md", md: "lg" }}
        cursor="pointer"
        onClick={log}
      >
        {Uauth != null
          ? Uauth["sub"] + " as " + getEllipsisTxt(Uauth["wallet_address"])
          : "Login UNS Domains"}
      </Button>
    </>
  );
}

export default ConnectUNSD;
