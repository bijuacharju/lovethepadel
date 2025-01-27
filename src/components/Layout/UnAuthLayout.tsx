import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event1 from "@lovethepadel/assets/images/Event1.png";
import Event2 from "@lovethepadel/assets/images/Event2.png";
import Event3 from "@lovethepadel/assets/images/Event3.jpg";

const sliderData = [
  {
    id: 1,
    image: Event1,
    title: "Welcome to a World of Possibilities",
    subTitle: "Connect with like-minded people and explore new opportunities.",
  },
  {
    id: 2,
    image: Event2,
    title: "Welcome to a World of Possibilities",
    subTitle: "Connect with like-minded people and explore new opportunities.",
  },
  {
    id: 3,
    image: Event3,
    title: "Welcome to a World of Possibilities",
    subTitle: "Connect with like-minded people and explore new opportunities.",
  },
];

const SliderLayoutComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <Box
        bottom={"40px"}
        css={{
          "& li": {
            margin: "0px 28px",
          },
          "& .slick-active button::before": {
            backgroundColor: "primary.500",
          },
          "& button": {
            height: "4px !important",
            width: "60px !important",
            padding: "0px !important",
          },
          "& button::before": {
            backgroundColor: "gray.600",
            height: "4px !important",
            width: "60px !important",
            textIndent: "-9999px",
            overflow: "hidden !important",
            borderRadius: "xl",
            opacity: "1 !important",
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
      flex={1}
      css={{
        "& .slick-list": { height: "full" },
        "& .slick-list div": { height: "full" },
      }}
    >
      <Slider {...settings} style={{ height: "100%" }}>
        {sliderData.map((item) => (
          <Stack
            key={item.id}
            background={`linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${item.image}) lightgray 50% / cover no-repeat`}
            display={"flex !important"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            gap={1}
            padding={20}
            borderRadius={"4xl"}
          >
            <Text textStyle={"cardTitle"} color={"white"} textAlign={"center"}>
              {item.title}
            </Text>
            <Text
              textStyle={"paragraph_large"}
              color={"white"}
              textAlign={"center"}
            >
              {item.subTitle}
            </Text>
          </Stack>
        ))}
      </Slider>
    </Box>
  );
};

const UnAuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      minH={"100vh"}
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      backgroundColor={"white"}
      gap={10}
      padding={{ base: 6, sm: 10 }}
    >
      <GridItem
        as={Stack}
        justifyContent={"center"}
        alignItems={"center"}
        minW={0}
      >
        {children}
      </GridItem>
      <GridItem as={Stack} minWidth={0} display={{ base: "none", lg: "flex" }}>
        <SliderLayoutComponent />
      </GridItem>
    </Grid>
  );
};

export default UnAuthLayout;
