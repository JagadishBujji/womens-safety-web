import { AppSidebar } from "@/components/app-sidebar";
import Toggle from "@/components/toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TabsDemo } from "@/components/ui/tabs";

import UploadButton from "@/components/ui/upload";
import Video from "@/components/ui/video";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
          {/* Logout */}
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </header>
        <div className="flex bg-white-400 flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="rounded-xl col-span-5">
              <div>
                {" "}
                <Video
                  videoSrc="/assets/image/Adobe installation tutorial.mp4"
                  detections={[]}
                />
              </div>
              <div>
                <UploadButton />
              </div>
            </div>
            <div className="col-span-7 flex flex-col gap-4">
              {/* <h3>
                <b>Summary</b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                lobortis nulla. Suspendisse ultricies tincidunt malesuada.
                Pellentesque finibus sem elit, eu lobortis justo ultrices et.
              </p>
              <Toggle /> */}
              <TabsDemo />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
