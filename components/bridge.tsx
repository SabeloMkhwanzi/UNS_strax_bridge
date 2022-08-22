import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Bridge() {
  const TextTitleColor = useColorModeValue("white", "white");

  return (
    <Box my="5" mx={80}>
      <Text
        color={TextTitleColor}
        mb={2}
        letterSpacing={1}
        fontSize="xl"
        fontWeight="semibold"
        decoration="lightblue"
        textTransform="uppercase"
      >
        Bridge
      </Text>
      <Box alignItems="center" borderRadius="2xl" borderWidth={1}>
        <Box
          mx="auto"
          borderRadius="2xl"
          alignItems="center"
          as="iframe"
          src="https://umbria.network/widgetv2/?ref=REFFERER_ID"
          width="100%"
          minHeight="75vh"
          scrolling="no"
        />
      </Box>
    </Box>
  );
}
