import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Academy from "./pages/Academy";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTA PADRE */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/academy" element={<Academy />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
