import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Separator,
  Span,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@lovethepadel/router/routes.constants";
import { Link } from "react-router-dom";
import AppLogo from "@lovethepadel/assets/svgs/AppLogo.svg?react";
import MenuIcon from "@lovethepadel/assets/svgs/MenuIcon.svg?react";
import ArrowCircleRightIcon from "@lovethepadel/assets/svgs/ArrowCircleRightIcon.svg?react";
import CloseIcon from "@lovethepadel/assets/svgs/CloseIcon.svg?react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
} from "@lovethepadel/components/ui/drawer";
import { SliderEventComponent } from "./Events";

const HeaderDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  return (
    <DrawerRoot placement={"top"} open={open} onOpenChange={() => onClose()}>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerBody p={0} backgroundColor={"primary.50"}>
          <Container as={Stack} gap={8} paddingTop={8} paddingBottom={"100px"}>
            <IconButton
              padding={{ base: 3, md: 4 }}
              variant={"ghost"}
              border={"1px solid"}
              width={"max-content"}
              alignSelf={"flex-end"}
              height={"max-content"}
              borderColor={"gray.lighter"}
              backgroundColor={"rgba(255, 255, 255, 0.04)"}
              backdropFilter={"blur(10px)"}
              onClick={() => onClose()}
            >
              <Icon
                height={{ base: "20px", md: "24px" }}
                width={{ base: "20px", md: "24px" }}
              >
                <CloseIcon />
              </Icon>
            </IconButton>
            <Flex gap={20}>
              <Stack gap={12} flex={1}>
                <Text
                  textStyle={"brandName"}
                  textDecoration={"underline"}
                  textUnderlineOffset={"2px"}
                >
                  🔗 Navigation
                </Text>
                <Stack gap={8}>
                  <HStack justifyContent={"space-between"}>
                    <Stack gap={3}>
                      <Text
                        textStyle={"subTitle"}
                        fontWeight={700}
                        color={"gray.dark"}
                      >
                        Home
                      </Text>
                      <Text
                        textStyle={"paragraph_regular"}
                        color={"gray.normal"}
                        width={{ base: "auto", sm: "420px" }}
                        lineHeight={"140%"}
                      >
                        Your gateway to thrilling padel matches and
                        unforgettable moments.
                      </Text>
                    </Stack>
                    <Link to={"/"} onClick={() => onClose()}>
                      <Icon fontSize={"24px"}>
                        <ArrowCircleRightIcon />
                      </Icon>
                    </Link>
                  </HStack>
                  <HStack justifyContent={"space-between"}>
                    <Stack gap={3}>
                      <Text
                        textStyle={"subTitle"}
                        fontWeight={700}
                        color={"gray.dark"}
                      >
                        About Us
                      </Text>
                      <Text
                        textStyle={"paragraph_regular"}
                        color={"gray.normal"}
                        width={{ base: "auto", sm: "420px" }}
                        lineHeight={"140%"}
                      >
                        Discover our passion for padel and our commitment to
                        building a vibrant community
                      </Text>
                    </Stack>
                    <Link to={"/"} onClick={() => onClose()}>
                      <Icon fontSize={"24px"}>
                        <ArrowCircleRightIcon />
                      </Icon>
                    </Link>
                  </HStack>
                  <HStack justifyContent={"space-between"}>
                    <Stack gap={3}>
                      <Text
                        textStyle={"subTitle"}
                        fontWeight={700}
                        color={"gray.dark"}
                      >
                        Love the Padel Love the Boys
                      </Text>
                      <Text
                        textStyle={"paragraph_regular"}
                        color={"gray.normal"}
                        width={{ base: "auto", sm: "420px" }}
                        lineHeight={"140%"}
                      >
                        Showcasing the energy and skill of men in the world of
                        padel
                      </Text>
                    </Stack>
                    <Link to={"/"} onClick={() => onClose()}>
                      <Icon fontSize={"24px"}>
                        <ArrowCircleRightIcon />
                      </Icon>
                    </Link>
                  </HStack>
                  <HStack justifyContent={"space-between"}>
                    <Stack gap={3}>
                      <Text
                        textStyle={"subTitle"}
                        fontWeight={700}
                        color={"gray.dark"}
                      >
                        Love the Padel Love the Girls
                      </Text>
                      <Text
                        textStyle={"paragraph_regular"}
                        color={"gray.normal"}
                        width={{ base: "auto", sm: "420px" }}
                        lineHeight={"140%"}
                      >
                        Celebrating the spirit of women in padel with
                        camaraderie and competition.
                      </Text>
                    </Stack>
                    <Link to={"/"} onClick={() => onClose()}>
                      <Icon fontSize={"24px"}>
                        <ArrowCircleRightIcon />
                      </Icon>
                    </Link>
                  </HStack>
                  <HStack justifyContent={"space-between"}>
                    <Stack gap={3}>
                      <Text
                        textStyle={"subTitle"}
                        fontWeight={700}
                        color={"gray.dark"}
                      >
                        Love the Padel Mixed Doubles
                      </Text>
                      <Text
                        textStyle={"paragraph_regular"}
                        color={"gray.normal"}
                        width={{ base: "auto", sm: "420px" }}
                        lineHeight={"140%"}
                      >
                        Where teamwork meets excitement—padel for everyone,
                        together.
                      </Text>
                    </Stack>
                    <Link to={"/"} onClick={() => onClose()}>
                      <Icon fontSize={"24px"}>
                        <ArrowCircleRightIcon />
                      </Icon>
                    </Link>
                  </HStack>
                </Stack>
              </Stack>
              <Box display={{ base: "none", lg: "block" }}>
                <Separator
                  orientation={"vertical"}
                  borderColor={"gray.lighter"}
                />
              </Box>
              <Stack
                minW={0}
                gap={12}
                flex={1}
                display={{ base: "none", lg: "flex" }}
              >
                <Text
                  textStyle={"brandName"}
                  textDecoration={"underline"}
                  textUnderlineOffset={"2px"}
                >
                  📅 Upcoming Events & Leagues
                </Text>
                <SliderEventComponent />
              </Stack>
            </Flex>
          </Container>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

const Header = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      position={"sticky"}
      top={0}
      backgroundColor={"primary.50"}
      zIndex={1000}
    >
      <Container paddingY={2.5} height={"90px"}>
        <HStack justifyContent={"space-between"}>
          <HStack gap={2}>
            <Icon fontSize={{ base: "48px", md: "60px" }}>
              <AppLogo />
            </Icon>
            <Text
              textStyle={"brandName"}
              color="primary.500"
              fontSize={{ base: "14px", md: "20px" }}
            >
              Love the padel
            </Text>
          </HStack>
          <HStack gap={5}>
            <Link to={NAVIGATION_ROUTES.SIGNIN}>
              <Span
                textDecoration={"none"}
                color={"gray.darkest"}
                fontWeight={500}
                fontSize={{ base: "14px", md: "16px" }}
              >
                SignIn
              </Span>
            </Link>
            <IconButton
              variant={"outline"}
              borderColor={"gray.lighter"}
              borderRadius={"full"}
              p={"16px"}
              height={"max-content"}
              width={"max-content"}
              onClick={() => onOpen()}
            >
              <Icon>
                <MenuIcon />
              </Icon>
            </IconButton>
          </HStack>
        </HStack>
      </Container>
      <HeaderDrawer open={open} onClose={onClose} />
    </HStack>
  );
};

export default Header;
