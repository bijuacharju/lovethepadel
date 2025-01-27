import {
  Box,
  Container,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import GooglePlayIcon from "@lovethepadel/assets/svgs/GooglePlayIcon.svg?react";
import AppleStoreIcon from "@lovethepadel/assets/svgs/AppleStoreIcon.svg?react";

const DownloadApp = () => {
  return (
    <Stack backgroundColor={"primary.500"} overflow={"hidden"}>
      <Container paddingY={24} as={Stack} gap={8} position={"relative"}>
        <Stack gap={4} zIndex={10}>
          <Text
            textStyle={"cardTitle"}
            color={"yellow.300"}
            fontSize={{ base: "14px", md: "20px" }}
          >
            Coming Soon
          </Text>
          <Stack gap={2}>
            <Text
              textStyle={"homepageTitle"}
              color={"white"}
              fontSize={{ base: "24px", md: "32px" }}
            >
              Your Padel Journey, Anytime, Anywhere!
            </Text>
            <Text
              textStyle={"paragraph_large"}
              lineHeight={{ base: "24px", md: "28px" }}
              color={"white"}
              maxWidth={"716px"}
              fontSize={{ base: "14px", md: "16px" }}
            >
              Our app is coming soon! Stay connected and join the
              fastest-growing padel community in the UAE. Sign up now to get
              exclusive updates and be the first to experience it!
            </Text>
          </Stack>
        </Stack>
        <HStack gap={4} zIndex={10}>
          <IconButton variant={"ghost"}>
            <Icon height={{ base: "40px", md: "50px" }} width={"auto"}>
              <GooglePlayIcon />
            </Icon>
          </IconButton>
          <IconButton variant={"ghost"}>
            <Icon height={{ base: "40px", md: "50px" }} width={"auto"}>
              <AppleStoreIcon />
            </Icon>
          </IconButton>
        </HStack>
        <Box
          position="absolute"
          right={0}
          bottom={"-280px"}
          height={"478px"}
          width={"478px"}
          borderRadius={"full"}
          background={"rgba(0, 0, 0, 0.08)"}
          backdropFilter={"blur(46.877586364746094px)"}
        ></Box>
      </Container>
    </Stack>
  );
};

export default DownloadApp;
