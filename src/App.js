import React, { useEffect, useState } from "react";
import Signup from "./authRoutes/signup/Signup";
import Login from "./authRoutes/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { auth } from "./config/config";

const App = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else setUsername("");
    });
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home name={username} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
