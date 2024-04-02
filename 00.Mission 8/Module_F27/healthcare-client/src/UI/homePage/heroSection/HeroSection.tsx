import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      {/* Left Section */}
      <Box height={650} sx={{ flex: 1, position: "relative" }}>
        <Box sx={{ position: "absolute" }}>
          <Image
            src={assets.svgs.grid}
            width={650}
            height={650}
            alt="Grid"
          ></Image>
        </Box>
        <Box sx={{ position: "absolute", top: "100px", left: "70px" }}>
          <Box>
            <Typography variant="h3" component="h1" fontWeight={600}>
              Healthier Hearts
            </Typography>
            <Typography variant="h3" component="h1" fontWeight={600} py={1}>
              Comes from
            </Typography>
            <Typography
              color="primary.main"
              variant="h3"
              component="h1"
              fontWeight={600}
            >
              Preventive Care
            </Typography>
          </Box>
          <Typography py={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            accusamus repellendus at molestiae, error illo culpa, soluta magni
            impedit hic placeat provident excepturi? Nobis, cupiditate optio
            exercitationem architecto nulla necessitatibus!
          </Typography>
          <Box>
            <Button>Make Appointment</Button>
            <Button variant="outlined" sx={{ marginLeft: "8px" }}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Right section */}
      <Box sx={{ flex: 1, position: "relative" }} py={10} pl={5}>
        <Box
          sx={{ position: "absolute", left: "200px", top: "50px", zIndex: -10 }}
        >
          <Image
            src={assets.svgs.arrow}
            alt="arrow"
            width={100}
            height={100}
          ></Image>
        </Box>
        <Box sx={{ display: "flex", direction: "row" }}>
          <Box mt={2}>
            <Image
              src={assets.images.doctor1}
              width={250}
              height={380}
              alt="Doctor1"
            ></Image>
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={250}
              height={350}
              alt="Doctor2"
            ></Image>
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "50%", left: "30%" }}>
          <Image
            src={assets.images.doctor3}
            width={250}
            height={250}
            alt="Doctor3"
          ></Image>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "120px",
            right: "-10px",
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="Stethoscope"
          ></Image>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
