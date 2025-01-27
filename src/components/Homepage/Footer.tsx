import {
  Stack,
  Container,
  Flex,
  Icon,
  Text,
  HStack,
  Input,
} from "@chakra-ui/react";
import AppLogo2 from "@lovethepadel/assets/svgs/AppLogo2.svg?react";
import InstagramIcon from "@lovethepadel/assets/svgs/InstagramIcon.svg?react";
import TwitterIcon from "@lovethepadel/assets/svgs/TwitterIcon.svg?react";
import FacebookIcon from "@lovethepadel/assets/svgs/FacebookIcon.svg?react";
import TiktokIcon from "@lovethepadel/assets/svgs/TiktokIcon.svg?react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <Stack gap={0}>
      <Stack paddingY={20} backgroundColor={"#FCFCFC"}>
        <Container>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            gap={8}
          >
            <Stack gap={{ base: 3, md: 8 }}>
              <Icon height={"80px"} width={"max-content"}>
                <AppLogo2 />
              </Icon>
              <Text
                textStyle={"paragraph_large"}
                lineHeight={"24px"}
                width={{
                  base: "auto",
                  md: "390px",
                  lg: "355px",
                }}
                color={"gray.normal"}
                fontSize={{ base: "14px", md: "16px" }}
              >
                At Love the Padel, we are on a mission to create a global
                community of passionate padel players. Our platform connects
                people through leagues, coaching, and social events, offering
                world-class venues and unforgettable experiences.
              </Text>
            </Stack>
            <Stack gap={{ base: 3, md: 6 }}>
              <Text
                textStyle={"paragraph_large"}
                fontWeight={700}
                lineHeight={"24px"}
              >
                Quick Links
              </Text>
              <Stack gap={3}>
                <Link to="/">
                  <Text
                    textStyle={"paragraph_large"}
                    lineHeight={"24px"}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Home
                  </Text>
                </Link>
                <Link to="/">
                  <Text
                    textStyle={"paragraph_large"}
                    lineHeight={"24px"}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    About Us
                  </Text>
                </Link>
                <Link to="/">
                  <Text
                    textStyle={"paragraph_large"}
                    lineHeight={"24px"}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Love the Padel Love the Girls
                  </Text>
                </Link>
                <Link to="/">
                  <Text
                    textStyle={"paragraph_large"}
                    lineHeight={"24px"}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Love the Padel Love the Boys
                  </Text>
                </Link>
                <Link to="/">
                  <Text
                    textStyle={"paragraph_large"}
                    lineHeight={"24px"}
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Love the Padel Mixed Doubles
                  </Text>
                </Link>
              </Stack>
            </Stack>
            <Stack gap={10}>
              <Stack gap={3}>
                <Text
                  textStyle={"paragraph_large"}
                  fontWeight={700}
                  lineHeight={"24px"}
                >
                  Follow us on
                </Text>
                <HStack gap={5}>
                  <Link to="https://www.instagram.com" target="_blank">
                    <Icon fontSize={"24px"}>
                      <InstagramIcon />
                    </Icon>
                  </Link>
                  <Link to="https://www.x.com" target="_blank">
                    <Icon fontSize={"24px"}>
                      <TwitterIcon />
                    </Icon>
                  </Link>
                  <Link to="https://www.facebook.com" target="_blank">
                    <Icon fontSize={"24px"}>
                      <FacebookIcon />
                    </Icon>
                  </Link>
                  <Link to="https://www.tiktok.com" target="_blank">
                    <Icon fontSize={"24px"}>
                      <TiktokIcon />
                    </Icon>
                  </Link>
                </HStack>
              </Stack>
              <Stack gap={3}>
                <Text
                  textStyle={"paragraph_large"}
                  fontWeight={700}
                  lineHeight={"24px"}
                >
                  Subscribe
                </Text>
                <HStack>
                  <Input
                    height={"52px"}
                    width={{ base: "308px", lg: "auto", xl: "308px" }}
                    fontSize={"14px"}
                    placeholder={"Email Address"}
                    padding={4}
                    _placeholder={{
                      color: "gray.normal",
                    }}
                    variant={"outline"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    variant={"solid"}
                    borderRadius={"xl"}
                    fontSize={"16px"}
                    color={"#FCFCFC"}
                    padding={4}
                    lineHeight={"20px"}
                    height={"auto"}
                  >
                    Submit
                  </Button>
                </HStack>
              </Stack>
            </Stack>
          </Flex>
        </Container>
      </Stack>
      <Stack paddingY={6} backgroundColor={"primary.1000"}>
        <Container>
          <HStack
            justifyContent={"space-between"}
            gap={5}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "flex-start", md: "center" }}
          >
            <Text
              color={"white"}
              lineHeight={"24px"}
              textStyle={"paragraph_regular"}
            >
              &copy; Copyright {new Date().getFullYear()}, Love the padel
            </Text>
            <HStack gap={3}>
              <Link to="https://www.tiktok.com" target="_blank">
                <Text
                  color={"white"}
                  lineHeight={"24px"}
                  textStyle={"paragraph_regular"}
                  textDecoration={"underline"}
                >
                  Terms and Conditions
                </Text>
              </Link>
              <Link to="https://www.tiktok.com" target="_blank">
                <Text
                  color={"white"}
                  lineHeight={"24px"}
                  textStyle={"paragraph_regular"}
                  textDecoration={"underline"}
                >
                  Privacy Policy
                </Text>
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default Footer;
