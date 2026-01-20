import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <div
        style={{
          position: "relative",
          height: "calc(100vh - 70px)",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              inset: 0,
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
