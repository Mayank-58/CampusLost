import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportFound from "./pages/ReportFound";
import ReportLost from "./pages/ReportLost";
import FindItem from "./pages/FindItem";
import ItemDetails from "./pages/ItemDetails";
import ClaimItem from "./pages/ClaimItem";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Side */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/report-found" element={<ReportFound />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/find-item" element={<FindItem />} />

        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/claim/:id" element={<ClaimItem />} />

        <Route path="/dashboard" element={<UserDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;