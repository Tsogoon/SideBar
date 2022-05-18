import React from "react";

import SideMenu from "./components/SideMenu";
// import HeaderMenu from "./components/HeaderMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ControlPanel from "./Pages/ControlPanel";
import Product from "./Pages/Product";
import Warehouse from "./Pages/Warehouse";
import Settings from "./Pages/Settings";
import Cost from "./Pages/Cost";
import Report from "./Pages/Purchase";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <div className="flex h-[100%] w-[100%]">
          <SideMenu />
          <div className="flex flex-col w-[90%]">
            <Header />
            <Routes>
              <Route path={"/"} element={<ControlPanel />}></Route>
              <Route path={"/product"} element={<Product />}></Route>
              <Route path={"/warehouse"} element={<Warehouse />}></Route>
              <Route path={"/settings"} element={<Settings />}></Route>
              <Route path={"/report"} element={<Report />}></Route>
              <Route path={"/cost"} element={<Cost />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
