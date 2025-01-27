import {
  Box,
  Center,
  Container,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import StarIcon from "@lovethepadel/assets/svgs/StarIcon.svg?react";
import PlayCircleIcon from "@lovethepadel/assets/svgs/PlayCircleIcon.svg?react";
import { Button } from "../ui/button";
import ReactPlayer from "react-player";
import BGVideo from "@lovethepadel/assets/videos/backgroundVideo.mp4";
import { useState } from "react";

const HeroSection = () => {
  const [watch, setWatch] = useState(false);
  return (
    <Container paddingTop={20}>
      <Stack gap={16}>
        <Stack gap={7}>
          <Stack alignItems={"center"} gap={2}>
            <HStack
              gap={2}
              backgroundColor={"primary.200"}
              paddingX={3}
              paddingY={2}
              borderRadius={"4xl"}
            >
              <Icon fontSize={{ base: "20px", md: "24px" }}>
                <StarIcon />
              </Icon>
              <Text
                textStyle={"paragraph_regular"}
                fontWeight={700}
                color={"primary.500"}
                fontSize={{ base: "11px", md: "14px" }}
                textAlign={"center"}
              >
                JOIN DUBAI&rsquo;S FASTEST GROWING PADEL COMMUNITY
              </Text>
            </HStack>
            <Stack maxWidth={"606px"} gap={1}>
              <Text
                textStyle={"homepageMainTitle"}
                textAlign={"center"}
                fontSize={{ base: "32px", md: "56px" }}
              >
                Play. Compete. Belong
              </Text>
              <Text
                textStyle={"subTitle"}
                color={"gray.dark"}
                letterSpacing={"0.072px"}
                lineHeight={{ base: "24px", md: "30px" }}
                textAlign={"center"}
                fontSize={{ base: "14px", md: "18px" }}
              >
                Join our padel community, connect, play and elevate your game!
                Join our leagues, tournaments and weekly games; be invited to
                monthly events, socials and enjoy a wide range of discounts for
                our members
              </Text>
            </Stack>
          </Stack>
          <Center>
            <Button
              variant={"solid"}
              paddingY={"20px"}
              css={{ lineHeight: "14px" }}
              height={"auto"}
              fontSize={{ base: "12px", md: "14px" }}
            >
              Join the Community
            </Button>
          </Center>
        </Stack>
        <Box
          position="relative"
          width="100%"
          maxWidth="1400px"
          paddingTop={`${(780 / 1390) * 100}%`}
          margin="0 auto"
          backgroundColor="black"
          borderRadius={"3xl"}
          overflow={"hidden"}
        >
          {!watch && (
            <Stack
              position={"absolute"}
              top={0}
              left={0}
              width={"100%"}
              height={"100%"}
              background={
                "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)"
              }
              zIndex={100}
            >
              <Center flex={1}>
                <Stack
                  cursor={"pointer"}
                  onClick={() => setWatch((prev) => !prev)}
                  alignItems={"center"}
                >
                  <Icon fontSize={{ base: "32px", md: "40px" }}>
                    <PlayCircleIcon />
                  </Icon>
                  <Text
                    textStyle={"paragraph_large"}
                    color="white"
                    fontSize={{ base: "14px", md: "16px" }}
                  >
                    Watch This Video
                  </Text>
                </Stack>
              </Center>
            </Stack>
          )}
          <ReactPlayer
            url={BGVideo}
            controls={watch}
            playing={watch}
            width={"100%"}
            height={"100%"}
            style={{ position: "absolute", top: 0, left: 0 }}
            onEnded={() => {
              setWatch((prev) => !prev);
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
