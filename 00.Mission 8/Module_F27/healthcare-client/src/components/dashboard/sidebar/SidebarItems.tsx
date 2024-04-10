import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IDrawerItem } from "@/types";

import { usePathname } from "next/navigation";

type TSidebarItemProps = {
  item: IDrawerItem;
};

const SidebarItems = ({ item }: TSidebarItemProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: " #1586FD",
                },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
