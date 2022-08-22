import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

// import ButtonConnect from "./buttonConnect/index";

export default function SplitScreen() {
  const BodyBgColor = useColorModeValue("#181A60", "gray.600");
  const SubHeaderTextColor = useColorModeValue("white", "white");
  const ButtonColorMode = useColorModeValue("#B4ECE3", "#B4ECE3");
  const ButtonTextColor = useColorModeValue("#8479E1", "black");
  const HeaderTextColor = useColorModeValue("#1CD6CE", "#1CD6CE");
  const HeaderTextColo2 = useColorModeValue("#BA32D7", "#BA32D7");

  return (
    <Stack
      pt={5}
      bg={BodyBgColor}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "m", md: "xl", lg: "2xl" }}>
            <Text
              fontFamily="monospace"
              as={"span"}
              position={"relative"}
              color={HeaderTextColo2}
              mr={4}
            >
              Cross-Chain
            </Text>

            <Text fontFamily="monospace" color={HeaderTextColor} as={"span"}>
              bridge
            </Text>
          </Heading>
          <Text
            fontFamily="monospace"
            fontSize={{ base: "md", lg: "2xl" }}
            color={SubHeaderTextColor}
          >
            Fast, Affordable and Secure way of moving liquidity between EVM, and
            L2 blockchains. With power of owning your identity on the web -
            Login with Unstoppable Domain.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              textColor={HeaderTextColo2}
              borderRadius="lg"
              bgColor={HeaderTextColor}
              shadow="lg"
              fontSize="m"
              textTransform="uppercase"
              fontWeight="normal"
              as="kbd"
              letterSpacing={2}
              textDecoration="none"
            >
              <Link href={"bridgeApp"}>Try Bridge</Link>
            </Button>
            {/* <ButtonConnect /> */}
          </Stack>
        </Stack>
      </Flex>
      <Flex px={5} flex={1}>
        <Image
          alt={"cover-image"}
          borderTopRightRadius="10rem"
          borderBottomLeftRadius="10rem"
          borderTopLeftRadius="15rem"
          borderBottomRightRadius="15rem"
          objectFit="cover"
          height={700}
          maxW="100%"
          my="auto"
          src={
            "https://file.coin98.com/insights/cross-chain-bridge-1631017481661.png"
          }
        />
      </Flex>
    </Stack>
  );
}
