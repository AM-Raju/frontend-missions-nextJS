import { USER_ROLE } from "@/constants/userRole";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TUserRole = keyof typeof USER_ROLE;

export interface IDrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  children?: IDrawerItem[];
}
