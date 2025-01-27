import { Box, Container, Span, Stack, Text } from "@chakra-ui/react";
import Image1 from "@lovethepadel/assets/images/Image1.jpg";
import Image2 from "@lovethepadel/assets/images/Image2.jpg";
import Image3 from "@lovethepadel/assets/images/Image3.jpg";
import Image4 from "@lovethepadel/assets/images/Image4.jpg";
import Image5 from "@lovethepadel/assets/images/Image5.jpg";

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <Stack
      flex={{
        base: "1 1 100%",
        sm: "1 1 calc(50% - 16px)",
        md: "1 1 calc(33.33% - 16px)",
        xl: "1 1 calc((100% - 554px - 32px) / 3)",
      }}
      height={{ base: "180px", md: "320px" }}
      position={"relative"}
      background={`linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${image}) lightgray 50% / cover no-repeat`}
      padding={"24px"}
      borderRadius={"lg"}
    >
      <Text
        textStyle={"cardTitle"}
        color={"white"}
        textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        fontSize={{ base: "16px", md: "20px" }}
      >
        {title}
      </Text>
    </Stack>
  );
};

const Mission = () => {
  return (
    <Container>
      <Stack gap={5}>
        <Box display="flex" flexWrap="wrap" gap={{ base: 10, md: 4 }}>
          <Stack
            flex={{
              base: "1 1 100%",
              sm: "1 1 100%",
              md: "1 1 calc(50% - 16px)",
              xl: "0 0 554px",
            }}
            gap={5}
          >
            <Stack gap={3}>
              <Text
                textStyle={"homepageTitle"}
                lineHeight={{ base: "34px", md: "52px" }}
                fontSize={{ base: "24px", md: "42px" }}
              >
                More Than a Game - It&rsquo;s a Lifestyle
              </Text>
              <Stack gap={5}>
                <Text
                  textStyle={"paragraph_large"}
                  color={"gray.normal"}
                  lineHeight={"24px"}
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  <Span color={"gray.darkest"} fontWeight={700}>
                    Vision Currently
                  </Span>{" "}
                  - Love the Padel will globally connect players passionate
                  about Padel, building communities, cutting edge facilities and
                  social events and festivals.
                </Text>
                <Text
                  textStyle={"paragraph_large"}
                  color={"gray.normal"}
                  lineHeight={"24px"}
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  <Span color={"gray.darkest"} fontWeight={700}>
                    Mission Currently
                  </Span>{" "}
                  - Love the Padel is a vibrant community based in Dubai
                  competing on the court and connecting off it. We operate
                  weekly matches, leagues and monthly competitions and socials
                  operated through an online hub that connects players and
                  provides clubs an opportunity to engage new players.
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Card title={"This weeks games"} image={Image1} />
          <Card title={"Join a LTP League"} image={Image2} />
          <Card title={"LTP Tournaments"} image={Image3} />
          <Card title={"Premium courts in Dubai"} image={Image4} />
          <Card title={"Social events"} image={Image5} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Mission;
