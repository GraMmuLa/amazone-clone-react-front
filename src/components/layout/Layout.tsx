import React from "react";
import Header from "./header/Header";
import {Outlet} from "react-router";
import Footer from "./footer/Footer";

const Layout: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;