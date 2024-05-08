import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {

    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [location.pathname]);

    return (
        <>
            {children}
        </>
    );
}

export default ScrollToTop;