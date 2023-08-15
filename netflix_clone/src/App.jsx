import "./App.css";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Netflix from "./pages/Netflix";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = "/login" element={<Login/>}/>
      <Route exact path = "/signup" element={<SignUp/>}/>
      <Route exact path = "/" element={<Netflix/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
