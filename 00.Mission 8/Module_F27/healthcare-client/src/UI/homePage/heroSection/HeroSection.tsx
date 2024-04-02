import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
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
          <Typography py={4} width={600}>
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
      <Box>right</Box>
    </Container>
  );
};

export default HeroSection;
