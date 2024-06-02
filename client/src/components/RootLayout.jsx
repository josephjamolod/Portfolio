import { Outlet } from "react-router-dom";
import Header from "./Header";
import StarsCanvas from "../canvas/Stars";

export default function RootLayout() {
  return (
    <div className="flex flex-col items-center  ">
      <Header />
      <Outlet />
    </div>
  );
}
