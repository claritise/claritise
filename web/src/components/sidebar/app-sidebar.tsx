"use client";

import * as React from "react";
import { FolderGit2, House, Rss } from "lucide-react";

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
      icon: House,
    },
    {
      name: "Projects",
      url: "/projects",
      icon: FolderGit2,
    },
    {
      name: "Blog",
      url: "/blog",
      icon: Rss,
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
