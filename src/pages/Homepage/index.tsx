import { Icon, IconButton, Stack } from "@chakra-ui/react";
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
import WhatsApp from "@lovethepadel/assets/svgs/WhatsApp.svg?react";

const Homepage = () => {
  const handleRedirect = () => {
    const phoneNumber = "+971 4 273 4431";
    window.location.href = `whatsapp://send?phone=${phoneNumber}`;
  };

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
      <IconButton
        variant={"ghost"}
        position={"fixed"}
        zIndex={1100}
        right={{ base: 4, md: 10, xl: 14 }}
        bottom={{ base: 4, md: 10, xl: 14 }}
        height={"max-content"}
        width={"max-content"}
        onClick={handleRedirect}
      >
        <Icon>
          <WhatsApp />
        </Icon>
      </IconButton>
    </Stack>
  );
};

export default Homepage;
