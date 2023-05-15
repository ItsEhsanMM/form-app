import React from "react";
import SignUp from "./Components/SignUp";
import Login from './Components/Login'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default App;
