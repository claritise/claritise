import BreadcrumbSetter from "~/components/header/breadcrumb-setter";
import Header from "~/components/header/header-main";

export default function Page() {
  // Define the breadcrumb data on the server
  const breadcrumbs = [
    { name: "Building Your Application", href: "#" },
    { name: "Data Fetching", href: "#" },
  ];

  return (
    <>
      {/* Set the breadcrumb data in the client context */}
      <BreadcrumbSetter breadcrumbs={breadcrumbs} />

      {/* The Header will read from the context */}
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
