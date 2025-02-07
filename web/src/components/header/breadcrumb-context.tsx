"use client"; // Ensures this file is treated as a client component

import React, {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export type Breadcrumb = {
  name: string;
  href: string;
};

export type BreadcrumbContextProps = {
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: Dispatch<SetStateAction<Breadcrumb[]>>;
};

const BreadcrumbContext = createContext<BreadcrumbContextProps>({
  breadcrumbs: [],
  setBreadcrumbs: () => {
    throw new Error("setBreadcrumbs must be overridden by BreadcrumbProvider");
  },
});

export const useBreadcrumb = () => useContext(BreadcrumbContext);

export const BreadcrumbProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
