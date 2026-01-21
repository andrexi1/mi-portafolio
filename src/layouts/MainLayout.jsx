import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 70px)",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
