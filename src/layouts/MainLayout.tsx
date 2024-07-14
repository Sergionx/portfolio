import { Outlet } from "react-router-dom";
import SideMenu from "../components/navigation/SideMenu";

export default function MainLayout() {
  return (
    <main
      className="flex flex-col items-center  min-h-[200vh] px-8 md:px-48 transition-colors duration-500
      dark:text-normal-white text-normal-black bg-normal-white dark:bg-normal-black"
    >
      <SideMenu />

      <Outlet />
    </main>
  );
}
