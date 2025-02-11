import * as React from "react";
import Link from "next/link";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const RandomLogo: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export function CompanyHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <RandomLogo />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">claritise</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
