import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
     

      <main style={{ padding: "2rem" }}>
        {children}
      </main>
    </>
  );
}
