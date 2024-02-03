import "./App.css";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        
      </Routes>
    
    </>
  );
}

export default App;
