import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { TUserRole } from "@/types";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        p={2}
        alignItems="center"
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo"></Image>
        <Typography
          variant="h6"
          component="h1"
          ml={1}
          sx={{ cursor: "pointer" }}
        >
          PH HealthCare
        </Typography>
      </Stack>
      <List>
        {drawerItems("admin" as TUserRole).map((item, index) => (
          <SidebarItems item={item} key={index}></SidebarItems>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
