import React from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/signup" />} />
    </Routes>
  );
};

export default App;
