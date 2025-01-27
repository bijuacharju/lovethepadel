import {
  Box,
  Center,
  Container,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { Rating } from "../ui/rating";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import TestimonialVideo from "@lovethepadel/assets/videos/testimonialVideo.mp4";
import PlayCircleIcon from "@lovethepadel/assets/svgs/PlayCircleIcon.svg?react";
import DanielTaylor from "@lovethepadel/assets/images/DanielTaylor.png";
import PaulMartinio from "@lovethepadel/assets/images/PaulMartinio.png";
import GeorgiaMarston from "@lovethepadel/assets/images/GeorgiaMarston.jpg";
import { ITestimonialData } from "@lovethepadel/@types/components/homepage";

const datas: ITestimonialData[] = [
  {
    id: 1,
    rating: 4,
    image: DanielTaylor,
    name: "Daniel Taylor",
    quote:
      "Padel has introduced me to a solid community of players and a competitive environment",
  },
  {
    id: 2,
    rating: 4,
    image: PaulMartinio,
    name: "Paul Martinio",
    quote:
      "The league's competitive edge and the community's support make every match worthwhile",
  },
  {
    id: 3,
    rating: 4,
    image: GeorgiaMarston,
    name: "Georgia Marston",
    quote:
      "Love the Padel, Love the Girls has brought me closer to like minded ladies and helped me make new friends and improve my game",
  },
];

const TestimonialCard = ({ quote, image, name, rating }: ITestimonialData) => {
  return (
    <Stack width={"368px"} flexShrink={0} gap={8}>
      <Stack gap={2}>
        <Text
          textAlign={"center"}
          textStyle={"paragraph_large"}
          lineHeight={"24px"}
          fontSize={{ base: "14px", md: "16px" }}
        >
          &ldquo;{quote}&rdquo;
        </Text>
      </Stack>
      <Stack alignItems={"center"} gap={3}>
        <Avatar height={"52px"} width={"52px"} name={name} src={image} />
        <Text
          textAlign={"center"}
          textStyle={"paragraph_regular"}
          fontWeight={700}
          lineHeight={"28px"}
        >
          {name}
        </Text>
        <Rating colorPalette="yellow" readOnly size="md" value={rating} />
      </Stack>
    </Stack>
  );
};

const Testimonial = () => {
  const [height, setHeight] = useState(0);
  const [watch, setWatch] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    setHeight(divRef.current?.getBoundingClientRect()?.left ?? 0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack gap={{ base: "40px", md: "56px" }} py={20} backgroundColor={"white"}>
      <Container as={Stack}>
        <Stack id="divRef" ref={divRef} gap={14}>
          <Stack maxWidth={"594px"} alignSelf={"center"}>
            <Stack gap={5}>
              <Text
                textStyle={"subTitle"}
                color={"primary.500"}
                fontWeight={700}
                textAlign={"center"}
                fontSize={{ base: "14px", md: "18px" }}
              >
                🛡️ Testimonial
              </Text>
              <Stack gap={1}>
                <Text
                  textStyle={"homepageTitle"}
                  textAlign={"center"}
                  lineHeight={"58px"}
                >
                  Hear from our members
                </Text>
                <Text
                  textStyle={"paragraph_large"}
                  lineHeight={"24px"}
                  color={"gray.normal"}
                  textAlign={"center"}
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  Join the UAE&rsquo;s fastest-growing padel community! Connect,
                  compete, and enjoy the journey with like-minded players.
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Box
            position="relative"
            width="100%"
            maxWidth="1400px"
            paddingTop={`${(734 / 1390) * 100}%`}
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
                    <Icon fontSize={"40px"}>
                      <PlayCircleIcon />
                    </Icon>
                    <Text textStyle={"paragraph_large"} color="white">
                      Watch This Video
                    </Text>
                  </Stack>
                </Center>
              </Stack>
            )}
            <ReactPlayer
              url={TestimonialVideo}
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
      <Flex
        gap={16}
        overflowX={"auto"}
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
        paddingX={{ base: 4, md: 0 }}
        alignItems={"center"}
      >
        <Stack
          display={{ base: "none", md: "block" }}
          width={`calc(${height}px - 64px)`}
          flexShrink={0}
        ></Stack>
        {datas.map((data) => (
          <TestimonialCard key={data.id} {...data} />
        ))}
        <Stack
          display={{ base: "none", md: "block" }}
          width={`calc(${height}px - 64px)`}
          flexShrink={0}
        ></Stack>
      </Flex>
    </Stack>
  );
};

export default Testimonial;
