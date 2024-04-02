import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import fbIcon from "@/assets/landing_page/facebook.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIn from "@/assets/landing_page/linkedin.png";
import instaIcon from "@/assets/landing_page/instagram.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 37, 34)" py={4}>
      <Container>
        {/* Footer nav */}
        <Stack direction="row" gap={4} justifyContent="center" py={2}>
          <Typography
            color="#fff"
            component={Link}
            href="/consultation"
            underline="none"
          >
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">Contact Us</Typography>
        </Stack>
        {/* Social Icons */}
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Image
            src={fbIcon}
            alt="facebook icon"
            width={30}
            height={30}
          ></Image>
          <Image
            src={twitterIcon}
            alt="Twitter icon"
            width={30}
            height={30}
          ></Image>
          <Image
            src={instaIcon}
            alt="Instagram icon"
            width={30}
            height={30}
          ></Image>
          <Image
            src={linkedIn}
            alt="LinkedIn icon"
            width={30}
            height={30}
          ></Image>
        </Stack>
        {/* Border */}
        <div style={{ border: "1px dashed white" }}></div>
        {/* Footer Bottom */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={5}
        >
          <Typography color="#fff">
            &copy;PH HealthCare. All Right Reserved
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="#fff"
            underline="none"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Stack direction="row" gap={1} justifyContent="space-between">
            <Typography component={Link} href="#" color="#fff" underline="none">
              Privacy Policy
            </Typography>
            <Typography color="#fff">Terms & Condition</Typography>
            <Typography color="#fff">Contact</Typography>
            <Typography color="#fff">Diagnostics</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
