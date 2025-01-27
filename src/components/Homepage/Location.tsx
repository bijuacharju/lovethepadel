import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import LocationIcon from "@lovethepadel/assets/svgs/LocationIcon.svg?react";
import SkylineArenaCourt from "@lovethepadel/assets/images/SkylineArenaCourt.png";
import GreenOasisCourt from "@lovethepadel/assets/images/GreenOasisCourt.png";
import LegendsCourt from "@lovethepadel/assets/images/LegendsCourt.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LocationCardProps } from "@lovethepadel/@types/components/homepage";

const locationData = [
  {
    id: 1,
    image: SkylineArenaCourt,
    title: "Skyline Arena Court",
    subTitle: "A Premier Padel Experience in the Heart of Dubai",
    address: "Dusit Thani, Sheikh Zayed Road, Dubai",
  },
  {
    id: 2,
    image: GreenOasisCourt,
    title: "Green Oasis Court",
    subTitle: "Where Luxury Meets Sport",
    address: "Emirates Golf Club, Dubai",
  },
  {
    id: 3,
    image: LegendsCourt,
    title: "Legends Court",
    subTitle: "World-class facilities with professional-grade courts.",
    address: "Jumeirah Golf Estates, Dubai",
  },
];

const LocationCard = ({
  address,
  image,
  subTitle,
  title,
}: LocationCardProps) => {
  return (
    <GridItem>
      <Card.Root
        overflow="hidden"
        borderRadius={"3xl"}
        borderColor={"gray.lighter"}
      >
        <Box
          height={{ base: "200px", md: "287px" }}
          position={"relative"}
          _before={{
            content: `""`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            background: `url(${image}) lightgray 50% / cover no-repeat`,
          }}
        ></Box>
        <Card.Body gap="4">
          <Stack gap={2}>
            <Card.Title
              textStyle={"subTitle"}
              fontWeight={700}
              lineHeight={"140%"}
              fontSize={{ base: "16px", md: "18px" }}
            >
              {title}
            </Card.Title>
            <Card.Description
              color={"gray.dark"}
              textStyle={"paragraph_large"}
              lineHeight={"140%"}
              fontSize={{ base: "12px", md: "14px" }}
            >
              {subTitle}
            </Card.Description>
          </Stack>
          <HStack>
            <Icon fontSize={"20px"}>
              <LocationIcon />
            </Icon>
            <Text
              color={"gray.darkest"}
              textStyle={"paragraph_regular"}
              lineHeight={{ base: "100%", md: "140%" }}
              fontSize={{ base: "12px", md: "14px" }}
            >
              {address}
            </Text>
          </HStack>
        </Card.Body>
        <Card.Footer gap="2">
          <Button
            variant="solid"
            size={"sm"}
            fontSize={{ base: "12px", md: "14px" }}
          >
            Book Coming Soon
          </Button>
        </Card.Footer>
      </Card.Root>
    </GridItem>
  );
};

const LocationComponent = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={5}
    >
      {locationData.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}
    </Grid>
  );
};

export const SliderLocationComponent = () => {
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
      minW={0}
    >
      <Slider {...settings}>
        {locationData.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </Slider>
    </Box>
  );
};

const ResponsiveComponent = () => {
  const content = useBreakpointValue({
    base: <SliderLocationComponent />,
    md: <LocationComponent />,
  });

  return <>{content}</>;
};

const Location = () => {
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
                📍Locations
              </Text>
              <Text
                textStyle={"homepageTitle"}
                lineHeight={"140%"}
                fontSize={{ base: "24px", md: "42px" }}
              >
                Play at Premium Locations Across Dubai&rsquo;s Iconic Venues
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

export default Location;
