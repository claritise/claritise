"use client";

import Link from "next/link";
import { useBreadcrumb } from "./breadcrumb-context";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme-provider";

export default function Header() {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <nav aria-label="breadcrumbs">
          <ol className="flex items-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                <Link legacyBehavior href={crumb.href}>
                  <a>{crumb.name}</a>
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="ml-auto px-4">
        <ModeToggle />
      </div>
    </header>
  );
}
