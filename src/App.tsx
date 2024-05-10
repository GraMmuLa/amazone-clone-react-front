import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/MainPage";
import ProductsPage from "./components/todaysOffers/ProductsPage";
import { Route, Routes } from "react-router";
import AdminPage from "./components/adminPage/AdminPage";
import ProductPage from "./components/productPage/ProductPage";
import RegisterSeller from "./components/auth/registerSeller/RegisterSeller";
import Orders from "./components/orders/Orders";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Register from "./components/auth/register/Register";
import BecomeSeller from "./components/becomeSeller/BecomeSeller";
import Login from "./components/auth/login/Login";
//?(Не обязательно) Из-за того что блок регистрации большой рядовому посетителю сайта не будет видно ошибку. Возможные решения: ScrollToTop при ошибке, изменение рассположения ошибки.

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
                        <Route path="/becomeSeller" element={<BecomeSeller />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/registerSeller" element={<RegisterSeller />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
