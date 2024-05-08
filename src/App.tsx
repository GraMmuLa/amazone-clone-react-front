import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/MainPage";
import ProductsPage from "./components/productsPage/ProductsPage";
import {Route, Routes} from "react-router";
import AdminPage from "./components/adminPage/AdminPage";
import ProductPage from "./components/productPage/ProductPage";
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Register from "./components/auth/register/Register";
import BecomeSeller from "./components/becomeSeller/BecomeSeller";

function App() {
  return (
      <BrowserRouter>
          <ScrollToTop>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<MainPage/>}/>
                      <Route path="/admin" element={<AdminPage/>}/>
                      <Route path="/todaysOffers" element={<ProductsPage/>}/>
                      <Route path="/productPage/:productColorId" element={<ProductPage/>}/>
                      <Route path="/register" element={<Register/>}/>
                      <Route path="/becomeSeller" element={<BecomeSeller/>}/>
                  </Route>
              </Routes>
          </ScrollToTop>
      </BrowserRouter>
  );
}

export default App;
