import React from "react";
import Login from "../login/Login";

const LoginWrapper:React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
    const [isLogged] = [false];

    return (
        <>
            {isLogged ? {children} : <Login/>}
        </>
    )
}

export default LoginWrapper;