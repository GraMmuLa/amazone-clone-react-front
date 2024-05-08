import React from "react";
import Login from "../login/Login";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";

const LoginWrapper:React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
    const {isLogged} = useAppSelector(state=>state.user);

    console.log(isLogged);

    return (
        <>
            {isLogged ? children : <Login/>}
        </>
    )
}

export default LoginWrapper;