import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
