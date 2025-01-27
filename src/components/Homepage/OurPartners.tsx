import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeftGreenIcon from "@lovethepadel/assets/svgs/ArrowLeftGreenIcon.svg?react";
import ArrowRightGreenIcon from "@lovethepadel/assets/svgs/ArrowRightGreenIcon.svg?react";
import M3 from "@lovethepadel/assets/images/M3.png";
import Vendit from "@lovethepadel/assets/images/Vendit.png";
import Playbook from "@lovethepadel/assets/images/Playbook.png";
import AspirockIcon from "@lovethepadel/assets/svgs/AspirockIcon.svg";

const slideList = [AspirockIcon, Playbook, Vendit, M3];

const OurPartners = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowLeftGreenIcon />,
    nextArrow: <ArrowRightGreenIcon />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          dots: false,
          centerMode: false,
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Stack paddingY={20} backgroundColor={"success.800"}>
      <Container paddingX={8}>
        <Stack gap={20}>
          <Stack gap={2}>
            <Text
              textStyle={"subTitle"}
              color={"primary.500"}
              fontWeight={700}
              textAlign={"center"}
            >
              Our Partners
            </Text>
            <Text
              textStyle={"homepageTitle"}
              textAlign={"center"}
              fontSize={"32px"}
              lineHeight={"32px"}
            >
              Together, We Grow the Game!
            </Text>
          </Stack>
          <Box
            css={{
              "& .slick-track": {
                display: "flex",
                alignItems: "center",
              },
              "& .slick-current>div>div>div": {
                backgroundColor: "primary.500",
              },
            }}
            className="slider-container"
          >
            <Slider {...settings}>
              {slideList.map((slide) => (
                <Box
                  key={slide}
                  width={"full"}
                  height={"32px"}
                  maskImage={`url(${slide})`}
                  maskRepeat={"no-repeat"}
                  maskPosition={"center"}
                  maskSize={"contain"}
                >
                  <Box
                    width={"full"}
                    height={"32px"}
                    backgroundColor={"gray.500"}
                  ></Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default OurPartners;
