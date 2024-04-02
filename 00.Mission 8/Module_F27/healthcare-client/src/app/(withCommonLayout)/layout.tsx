import React, { ReactNode } from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Box minHeight="100vh">{children}</Box>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
