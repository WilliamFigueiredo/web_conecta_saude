// import { useState } from "react";
// import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login";
// [NOVO] import da página de Registro
import Register from "./pages/Register";
import Prontuario from "./pages/Prontuario";
import Nutrition from "./pages/Nutrition";
import Exercises from "./pages/Exercises";
import IaChat from "./pages/iaChat";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";

// // import Content from "./components/Content/DashboardContent";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* Rota inicial cai na home*/}
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prontuario" element={<Prontuario />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/iaChat" element={<IaChat />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
