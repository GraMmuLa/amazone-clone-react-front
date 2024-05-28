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
import SellerPage from "./components/sellerPage/SellerPage";
import GiftCards from "./components/giftCards/GiftCards";
import GiftCardsList from "./components/giftCardsList/GiftCardsList";
import GiftCard from "./components/giftCard/GiftCard";
import AddProduct from "./components/addProduct/AddProduct";
import AddReview from "./components/addReview/AddReview";
import ThankForFeedback from "./components/thankForFeedback/ThankForFeedback";
import Login from "./components/auth/login/Login";
import Basket from "./components/basket/Basket";

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
                        <Route path="/sellerPage/:sellerId" element={<SellerPage />} />
                        <Route path="/giftCards" element={<GiftCards />} />
                        <Route path="/giftCardsList" element={<GiftCardsList />} />
                        <Route path="/giftCard/:id" element={<GiftCard />} />
                        <Route path="/addProduct" element={<AddProduct />} />
                        <Route path="/addReview" element={<AddReview />} />
                        <Route path="/thankForFeedback" element={<ThankForFeedback />} />
                        <Route path="/basket" element={<Basket />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
