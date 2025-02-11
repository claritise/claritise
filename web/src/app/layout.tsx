import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { BreadcrumbProvider } from "~/components/header/breadcrumb-context";

export const metadata: Metadata = {
  title: "claritise",
  description: "claritise personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <BreadcrumbProvider>
              <AppSidebar />
              <SidebarInset>{children}</SidebarInset>
            </BreadcrumbProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
