import { Stack } from "@chakra-ui/react";
import DownloadApp from "@lovethepadel/components/Homepage/DownloadApp";
import Events from "@lovethepadel/components/Homepage/Events";
import Footer from "@lovethepadel/components/Homepage/Footer";
import Header from "@lovethepadel/components/Homepage/Header";
import HeroSection from "@lovethepadel/components/Homepage/HeroSection";
import Location from "@lovethepadel/components/Homepage/Location";
import Membership from "@lovethepadel/components/Homepage/Membership";
import Mission from "@lovethepadel/components/Homepage/Mission";
import OurPartners from "@lovethepadel/components/Homepage/OurPartners";
import Testimonial from "@lovethepadel/components/Homepage/Testimonial";

const Homepage = () => {
  return (
    <Stack
      minH={"100vh"}
      gap={0}
      position={"relative"}
      backgroundColor={"primary.50"}
    >
      <Header />
      <Stack gap={{ base: 20, md: "140px" }}>
        <HeroSection />
        <Mission />
        <Events />
        <Location />
        <Membership />
        <Testimonial />
        <DownloadApp />
      </Stack>
      <OurPartners />
      <Footer />
    </Stack>
  );
};

export default Homepage;
