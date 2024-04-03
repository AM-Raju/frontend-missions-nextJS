import HeroSection from "@/UI/homePage/heroSection/HeroSection";
import HowItWorks from "@/UI/homePage/howItWorks/HowItWorks";
import Specialist from "@/UI/homePage/specialist/Specialists";
import Stats from "@/UI/homePage/stats/Stats";
import TopRatedDoctors from "@/UI/homePage/topRatedDoctors/TopRatedDoctors";
import WhyUs from "@/UI/homePage/whyUs/WhyUs";
import { Button, Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialist></Specialist>
      <TopRatedDoctors></TopRatedDoctors>
      <WhyUs></WhyUs>
      <HowItWorks></HowItWorks>
      <Stats></Stats>
    </>
  );
};

export default HomePage;
