import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store/store"
import MainPage from "./components/mainPage/MainPage";
import AdminPage from "./components/adminPage/AdminPage";
import ProductPage from "./components/productPage/ProductPage";
import ProductsPage from "./components/productsPage/ProductsPage";
import RegisterPage from "./components/registerPage/RegisterPage";
import Orders from "./components/orders/Orders";
import AddSubcategoryImage from "./components/adminPage/addPages/AddSubcategoryImage";
import AddCategoryImage from "./components/adminPage/addPages/AddCategoryImage";
import AddCategory from "./components/adminPage/addPages/AddCategory";
import AddSubcategory from "./components/adminPage/addPages/AddSubcategory";
import './index.css';
import './reset.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const addRouters = [
    {
        path: "/admin/addCategory",
        element: <AddCategory />
    },
    {
        path: "/admin/addCategoryImage",
        element: <AddCategoryImage />
    },
    {
        path: "/admin/addSubcategory",
        element: <AddSubcategory />
    },
    {
        path: "/admin/addSubcategoryImage",
        element: <AddSubcategoryImage />
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/admin",
        element: <AdminPage />
    },
    ...addRouters,
    {
        path: "/todaysOffers",
        element: <ProductsPage />
    },
    {
        path: "/productPage",
        element: <ProductPage />
    },
    {
        path: "/registerPage",
        element: <RegisterPage />
    },
    {
        path: "/orders",
        element: <Orders />
    },
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
