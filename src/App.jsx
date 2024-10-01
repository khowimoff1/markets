import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Sidebar from "./components/Sidebar";
import SotuvBolim from "./pages/SotuvBolim";
import Magazine from "./pages/Magazine";
import Omborxona from "./pages/Omborxona";
import Sozlamalar from "./pages/Sozlamalar";

const App = () => {
  return (
    <div className="flex bg-[#dde6ee] min-h-screen">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/sotuvbolim" element={<SotuvBolim />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/omborxona" element={<Omborxona />} />
        <Route path="/sozlamalar" element={<Sozlamalar />} />
      </Routes>
    </div>
  );
};

export default App;
