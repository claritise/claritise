"use client";

import * as React from "react";
import { Frame, Map, PieChart } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";
import { CompanyHeader } from "./company-header";
import { NavSimple } from "./nav-simple";

// This is sample data.
const data = {
  nav: [
    {
      name: "Home",
      url: "/",
      icon: Frame,
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: PieChart,
    },
    {
      name: "Blog",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CompanyHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavSimple items={data.nav} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
