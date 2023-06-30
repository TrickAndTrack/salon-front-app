import React from "react";
import { createRoot } from "react-dom/client";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Home from "../src/components/Home";
//import Appoinment from "./components/Appoinment";
import BookNow from "./components/BookNow";
import Layout from './components/Layout';
import Shop from './components/Shop';
import About from "../src/components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Contact from './components/Contact';
import HairService from './components/HairService';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="HairSservice" element={<HairService />} />
          <Route path="Shop" element={<Shop />} />
          
          <Route path="booknow" element={ <BookNow/> } />
        </Route>
      </Routes>
  </BrowserRouter>
);

export default reportWebVitals();

