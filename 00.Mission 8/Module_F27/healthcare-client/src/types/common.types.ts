import { USER_ROLE } from "@/constants/userRole";

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
