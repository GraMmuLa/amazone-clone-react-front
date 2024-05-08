import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/MainPage";
import ProductsPage from "./components/productsPage/ProductsPage";
import { Route, Routes } from "react-router";
import AdminPage from "./components/adminPage/AdminPage";
import ProductPage from "./components/productPage/ProductPage";
import SellerRegist from "./components/sellerRegist/SellerRegist";
import Orders from "./components/orders/Orders";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Register from "./components/auth/register/Register";
import BecomeSeller from "./components/becomeSeller/BecomeSeller";

//! Problems
//todo Пи error емейла в последующем исправлении и переходе ошибка появляеться и в пароле
//todo Error пороля появляеться вне блока formBlock

//?(Не обязательно) Из-за того что блок регистрации большой рядовому посетителю сайта не будет видно ошибкку. Возможные решения: ScrollToTop при ошибке, изменение рассположения ошибки.

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
                        <Route path="/register" element={<Register />} />
                        <Route path="/becomeSeller" element={<BecomeSeller />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/sellerRegist" element={<SellerRegist />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
