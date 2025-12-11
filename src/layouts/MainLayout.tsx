import { Outlet } from "@tanstack/react-router";
import SideMenu from "../components/navigation/SideMenu";

export default function MainLayout() {
  return (
    <main
      className="flex flex-col items-center  min-h-[200vh] px-8 md:px-48 transition-colors duration-500
      text-foreground bg-background"
    >
      <SideMenu />

      <Outlet />
    </main>
  );
}
