import react from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  const backgroundColor = useColorModeValue("#1CD6CE", "#243036");
  const BoxBgColor = useColorModeValue("gray.200", "#243036");
  const TextColor = useColorModeValue("#FC770A", "#FC770A");
  const TextColorMode = useColorModeValue("gray.500", "gray.400");

  return (
    <Box bg={backgroundColor}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text
          mx="auto"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize={{ base: "xs", md: "sm", lg: "md" }}
          as="kbd"
          letterSpacing={2}
          color={TextColorMode}
        >
          Copyright © 2022 straxbridge
        </Text>
      </Container>
    </Box>
  );
}
