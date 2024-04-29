import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './reset.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store/store"
import MainPage from "./components/mainPage/MainPage";
import AdminPage from "./components/adminPage/AdminPage";
import {AdminAddCategoryImagePage, AdminAddCategoryPage} from "./components/adminPage/AdminAddPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/admin",
        element: <AdminPage/>
    },
    {
        path: "/admin/addCategory",
        element: <AdminAddCategoryPage/>
    },
    {
        path: "/admin/addCategoryImage",
        element: <AdminAddCategoryImagePage/>
    }
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
