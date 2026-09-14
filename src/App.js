import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Side */}
        <Route path="/" element={<Home />} />

        {/* Admin Side */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;