import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginTakeOnRent from "./pages/LoginTakeOnRent";
import LoginGiveOnRent from "./pages/LoginGiveOnRent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-take-on-rent" element={<LoginTakeOnRent />} />
        <Route path="/login-give-on-rent" element={<LoginGiveOnRent />} />
      </Routes>
    </Router>
  );
}

export default App;
