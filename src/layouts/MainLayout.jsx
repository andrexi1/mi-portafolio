import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "calc(100vh - 70px)"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              width: "100%",
              minHeight: "100%",
            }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
}
