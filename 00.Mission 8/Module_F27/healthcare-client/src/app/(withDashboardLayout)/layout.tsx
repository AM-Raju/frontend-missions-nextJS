import DashboardDrawer from "@/components/dashboard/dashboardDrawer/DashboardDrawer";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
