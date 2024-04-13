import { Outlet } from "react-router-dom";
import Header from "./Header";
import Welcome from "./Welcome";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Welcome />
      <Outlet />
    </>
  );
}
