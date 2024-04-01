import { Box, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Typography variant="h5" component="h1" fontWeight={600}>
        P
        <Box component="span" color="primary.main">
          H
        </Box>{" "}
        Health Care
      </Typography>
    </Container>
  );
};

export default Navbar;
