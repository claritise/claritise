"use client";

import { useEffect } from "react";
import {
  type Breadcrumb,
  useBreadcrumb,
} from "~/components/header/breadcrumb-context";

export default function BreadcrumbSetter({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  }, [breadcrumbs, setBreadcrumbs]);

  return null; // This component doesn't render anything visible
}
