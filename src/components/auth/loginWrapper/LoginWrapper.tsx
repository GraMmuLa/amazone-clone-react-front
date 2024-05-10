import React, {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";
import {useNavigate} from "react-router-dom";

const LoginWrapper:React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
    const {isLogged} = useAppSelector(state=>state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogged)
            navigate("/login");
    }, [isLogged]);

    return (
        <>
            {children}
        </>
    )
}

export default LoginWrapper;