import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ProductList from "./components/ProductList";
import AddSeller from "./components/AddSeller";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-seller" element={<AddSeller />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Welcome />} /> {/* Default fallback */}
      </Routes>
    </>
  );
};

export default App;
