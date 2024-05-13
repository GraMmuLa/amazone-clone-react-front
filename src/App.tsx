import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/MainPage";
import { Route, Routes } from "react-router";
import AdminPage from "./components/adminPage/AdminPage";
import ProductPage from "./components/productPage/ProductPage";
import Orders from "./components/orders/Orders";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Register from "./components/auth/register/Register";
import BecomeSeller from "./components/becomeSeller/BecomeSeller";
import RegisterSeller from "./components/auth/registerSeller/RegisterSeller";
import ProductsPage from "./components/todaysOffers/ProductsPage";
import Qinsen from "./components/qinsen/Qinsen";
import GiftCards from "./components/giftCards/GiftCards";
import GiftCard from "./components/giftCard/GiftCard";
import Login from "./components/auth/login/Login";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/todaysOffers" element={<ProductsPage />} />
                        <Route path="/productPage/:productColorId" element={<ProductPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/registerSeller" element={<RegisterSeller />} />
                        <Route path="/becomeSeller" element={<BecomeSeller />} />
                        <Route path="/orders/:defaultIndex?" element={<Orders />} />
                        <Route path="/qinsen" element={<Qinsen />} />
                        <Route path="/giftCards" element={<GiftCards />} />
                        <Route path="/giftCard" element={<GiftCard />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
