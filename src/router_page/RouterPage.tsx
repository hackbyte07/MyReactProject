import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home_page/HomePage";
import LoginPage from "../login_page/LoginPage";
import DashboardPage from "../dashboard_page/DashboardPage";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
