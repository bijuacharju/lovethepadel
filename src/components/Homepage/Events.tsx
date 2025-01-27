import {
  Box,
  Center,
  Container,
  HStack,
  Icon,
  Span,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "../ui/button";
import Event1 from "@lovethepadel/assets/images/Event1.png";
import Event2 from "@lovethepadel/assets/images/Event2.png";
import Event3 from "@lovethepadel/assets/images/Event3.jpg";
import Event4 from "@lovethepadel/assets/images/Event4.jpg";
import LocationIcon from "@lovethepadel/assets/svgs/LocationIcon.svg?react";
import CalendarIcon from "@lovethepadel/assets/svgs/CalendarIcon.svg?react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EventCardProps } from "@lovethepadel/@types/components/homepage";

const eventData = [
  {
    id: 1,
    image: Event1,
    title: "Love the Padel Boys Leagues - Kicking off Q1 2025",
    subTitle:
      "A competitive league for boys aged 12-18, featuring weekly matches, team rankings, and exciting finals.",
    deadline: "14th Jan,2024",
    address: "Padel Arena, Main Court",
    startDate: "15th Jan, 2025",
  },
  {
    id: 2,
    image: Event2,
    title: "Love the Padel Girls Games - Weekly Tournaments",
    subTitle:
      "Open to girls aged 10-16, these weekly tournaments are perfect for improving skills.",
    deadline: "14th Jan,2024",
    address: "Padel Arena, Main Court",
    startDate: "15th Jan, 2025",
  },
  {
    id: 3,
    image: Event3,
    title: "Weekly Social Matches and Coaching Sessions",
    subTitle:
      "Open to girls aged 10-16, these weekly tournaments are perfect for improving skills.",
    deadline: "14th Jan,2024",
    address: "Padel Arena, Main Court",
    startDate: "15th Jan, 2025",
  },
  {
    id: 4,
    image: Event4,
    title: "Love the Padel Boys Leagues - Kicking off Q1 2025",
    subTitle:
      "A competitive league for boys aged 12-18, featuring weekly matches, team rankings, and exciting finals.",
    deadline: "14th Jan,2024",
    address: "Padel Arena, Main Court",
    startDate: "15th Jan, 2025",
  },
];

const SliderCard = ({
  address,
  deadline,
  image,
  startDate,
  subTitle,
  title,
}: EventCardProps) => {
  return (
    <Stack
      flexShrink={0}
      borderRadius={"xl"}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"gray.lighter"}
      gap={0}
    >
      <Box
        height={{ base: "220px" }}
        width={{ base: "100%" }}
        backgroundImage={`url(${image})`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        flexShrink={0}
      ></Box>
      <Stack padding={6} gap={6} justifyContent={"space-between"}>
        <Stack flex={{ base: null }}>
          <Text textStyle={"cardTitle"} lineHeight={"28px"}>
            {title}
          </Text>
          <Text
            textStyle={"paragraph_large"}
            color={"gray.normal"}
            lineHeight={"24px"}
          >
            {subTitle}
          </Text>
        </Stack>
        <Box flex={{ base: null }}>
          <HStack gap={1}>
            <Box
              borderRadius={"full"}
              height={3}
              width={3}
              backgroundColor={"danger.300"}
            ></Box>
            <Text textStyle={"paragraph_regular"} fontWeight={500}>
              <Span color={"danger.300"}>Deadline:</Span> {deadline}
            </Text>
          </HStack>
        </Box>
        <Stack flexDirection={{ base: "column", lg: "row" }} gap={{ base: 4 }}>
          <HStack>
            <Center
              height={9}
              width={9}
              borderRadius={"full"}
              backgroundColor={"primary.25"}
            >
              <Icon
                fontSize={"20px"}
                css={{ "& path": { fill: "primary.500" } }}
              >
                <LocationIcon />
              </Icon>
            </Center>
            <Text
              textStyle={"paragraph_regular"}
              color={"primary.500"}
              fontWeight={500}
            >
              {address}
            </Text>
          </HStack>
          <HStack>
            <Center
              height={9}
              width={9}
              borderRadius={"full"}
              backgroundColor={"primary.25"}
            >
              <Icon fontSize={"20px"}>
                <CalendarIcon />
              </Icon>
            </Center>
            <Text
              textStyle={"paragraph_regular"}
              color={"primary.500"}
              fontWeight={500}
            >
              Start Date: {startDate}
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const EventCard = ({
  address,
  deadline,
  image,
  startDate,
  subTitle,
  title,
}: EventCardProps) => {
  return (
    <HStack
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "stretch" }}
      borderRadius={"xl"}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"gray.lighter"}
      gap={0}
    >
      <Box
        height={{ base: "334px", md: "auto" }}
        width={{ base: "100%", md: "334px" }}
        backgroundImage={`url(${image})`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        flexShrink={0}
      ></Box>
      <HStack
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "flex-start", lg: "center" }}
        padding={{ base: 5, md: 8 }}
        gap={{ base: 4, md: 5 }}
        justifyContent={"space-between"}
      >
        <Stack flex={{ base: null, lg: 2 }}>
          <Text textStyle={"cardTitle"} lineHeight={"28px"}>
            {title}
          </Text>
          <Text
            textStyle={"paragraph_large"}
            color={"gray.normal"}
            lineHeight={"24px"}
          >
            {subTitle}
          </Text>
        </Stack>
        <Box flex={{ base: null, lg: 1 }}>
          <HStack gap={1}>
            <Box
              borderRadius={"full"}
              height={3}
              width={3}
              backgroundColor={"danger.300"}
            ></Box>
            <Text textStyle={"paragraph_regular"} fontWeight={500}>
              <Span color={"danger.300"}>Deadline:</Span> {deadline}
            </Text>
          </HStack>
        </Box>
        <Stack
          flex={{ base: null, lg: 1 }}
          justifyContent={"center"}
          gap={{ base: 4, md: 3 }}
        >
          <HStack>
            <Center
              height={9}
              width={9}
              borderRadius={"full"}
              backgroundColor={"primary.25"}
            >
              <Icon
                fontSize={"20px"}
                css={{ "& path": { fill: "primary.500" } }}
              >
                <LocationIcon />
              </Icon>
            </Center>
            <Text
              textStyle={"paragraph_regular"}
              color={"primary.500"}
              fontWeight={500}
            >
              {address}
            </Text>
          </HStack>
          <HStack>
            <Center
              height={9}
              width={9}
              borderRadius={"full"}
              backgroundColor={"primary.25"}
            >
              <Icon fontSize={"20px"}>
                <CalendarIcon />
              </Icon>
            </Center>
            <Text
              textStyle={"paragraph_regular"}
              color={"primary.500"}
              fontWeight={500}
            >
              Start Date: {startDate}
            </Text>
          </HStack>
        </Stack>
      </HStack>
    </HStack>
  );
};

const EventComponent = () => {
  return (
    <Stack gap={8} minW={0}>
      {eventData.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </Stack>
  );
};

export const SliderEventComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <Box
        bottom={"-40px"}
        css={{
          "& li": {
            margin: 0,
          },
          "& .slick-active button::before": {
            fontSize: "10px !important",
            color: "gray.dark !important",
            opacity: "100% !important",
          },
          "&  button::before": {
            fontSize: "10px !important",
            color: "gray.lighter !important",
            opacity: "100% !important",
          },
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </Box>
    ),
  };
  return (
    <Box
      className="slider-container"
      css={{
        "& .slick-list": {
          padding: "0px !important",
          width: "full !important",
        },
        "& .slick-slide": {},
      }}
    >
      <Slider {...settings}>
        {eventData.map((event) => (
          <SliderCard key={event.id} {...event} />
        ))}
      </Slider>
    </Box>
  );
};

const ResponsiveComponent = () => {
  const content = useBreakpointValue({
    base: <SliderEventComponent />,
    md: <EventComponent />,
  });

  return <>{content}</>;
};

const Events = () => {
  return (
    <Stack paddingY={20} backgroundColor={"white"}>
      <Container>
        <Stack gap={{ base: "32px", md: "52px" }}>
          <HStack
            justifyContent={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "flex-start", md: "center" }}
            gap={3}
          >
            <Stack maxWidth={"594px"}>
              <Text
                textStyle={"subTitle"}
                color={"primary.500"}
                fontWeight={700}
                fontSize={{ base: "14px", md: "18px" }}
              >
                📅 Upcoming Events & Leagues
              </Text>
              <Text
                textStyle={"homepageTitle"}
                lineHeight={"140%"}
                fontSize={{ base: "24px", md: "42px" }}
              >
                Get Ready for the Next Big Match!
              </Text>
            </Stack>
            <Button variant={"outline"} fontSize={{ base: "12px", md: "14px" }}>
              View More
            </Button>
          </HStack>
          <ResponsiveComponent />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Events;
