import React from 'react';
import * as ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './reset.css';
import { Provider } from "react-redux";
import store from "./redux/store/store"
import App from "./App";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainPage/>
//     },
//     {
//         path: "/admin",
//         element: <AdminPage/>
//     },
//     {
//         path: "/todaysOffers",
//         element: <ProductsPage/>
//     },
//     {
//         path: "/productPage:productColorId",
//         element: <ProductPage/>,
//     }
// ]);


root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
