import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home_page/HomePage";
import LoginPage from "../login_page/LoginPage";
import DashboardPage from "../dashboard_page/DashboardPage";
import AboutPage from "../about_page/AboutPage";
import TodoDetailPage from "../todo_detail_page/TodoDetailPage";
import TodoList from "../components/TodoList";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="todo/:id" element={<TodoDetailPage />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
