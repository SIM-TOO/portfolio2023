import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 페이지
import HomePage from "./pages/HomePage";
import Port01 from "./components/port/Port01";

// 기능
import lenis from "./utils/lenis";
import link from "./utils/link";

function App() {

  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/port01" element={<Port01 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
