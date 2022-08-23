import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import { AiOutlineFieldString } from "react-icons/ai";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

import ConnectUNSD from "./unsConnect";

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ColorMode = useColorModeValue("#B4ECE3", "#B4ECE3");
  const TextColor = useColorModeValue("#8479E1", "black");

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const BodyBgColor = useColorModeValue("#181A60", "gray.600");

  return (
    <>
      <Box bg={BodyBgColor} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            color="purple.600"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Stack direction="row" spacing={0} mr={20}>
              <Text
                fontFamily="monospace"
                fontSize="2xl"
                fontWeight="normal"
                color="#1CD6CE"
              >
                strax
              </Text>
              <Text
                fontFamily="monospace"
                fontSize="2xl"
                fontWeight="normal"
                color="white"
              >
                bridge
              </Text>
            </Stack>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Stack
                direction={"row"}
                spacing={12}
                justify={"center"}
                align={"center"}
              >
                {/* <Link
                  color="white"
                  py={3}
                  fontSize="md"
                  fontFamily="monospace"
                  textTransform="uppercase"
                  fontWeight="bold"
                  letterSpacing={4}
                >
                  Bridge
                </Link> */}
              </Stack>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <ConnectUNSD />

            <Button
              textColor="black"
              borderRadius="lg"
              bgColor="#1CD6CE"
              shadow="lg"
              fontSize="m"
              textTransform="uppercase"
              fontWeight="normal"
              as="kbd"
              letterSpacing={2}
              textDecoration="none"
            >
              <Link href={"/"} color="#BA32D7">
                Return Home
              </Link>
            </Button>
            <ColorModeSwitcher
              variant="ghost"
              color="#1CD6CE"
              size="sm"
              mr={4}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* <Link
                px={2}
                py={1}
                fontSize="md"
                textTransform="uppercase"
                fontWeight="normal"
                letterSpacing={2}
                color="white"
                href={"collection"}
              >
                Bridge
              </Link> */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
