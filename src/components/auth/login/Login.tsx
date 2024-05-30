import React, { useEffect, useState } from "react";
import { authAPI } from "../../../redux/api/authAPI";
import { invalidPasswordPattern } from "../patterns";
import { emailPattern } from "../patterns"
import { phonePattern } from "../patterns"
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { userSlice } from "../../../redux/slices/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "../Auth.module.css"
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const Login: React.FunctionComponent = () => {


    const dispatch = useAppDispatch();
    const { init } = userSlice.actions;

    const navigate = useNavigate();

    const [phoneEmail, setPhoneEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [goNext, setGoNext] = useState<boolean>(false);

    const [loginByEmail] = authAPI.useLoginByEmailMutation();
    const [loginByPhone] = authAPI.useLoginByPhoneMutation();

    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (invalidPasswordPattern.test(password)) {
            setErrorMessage("Введіть коректний пароль!")
            setIsError(true);
            return;
        }
        if (emailPattern.test(phoneEmail)) {
            try {
                const withEmailToken = await loginByEmail({ email: phoneEmail, password: password }).unwrap();
                console.log(withEmailToken);
                dispatch(init(withEmailToken));
                sessionStorage.setItem("auth_token", `Bearer ${withEmailToken.token}`);
                navigate("/");
            } catch (e) {
                setIsError(true);
                setErrorMessage("Невірний пароль, пошта");
            }

        }
        else {
            try {
                const withPhoneToken = await loginByPhone({ phone: phoneEmail, password: password }).unwrap();
                console.log(withPhoneToken);
                dispatch(init(withPhoneToken));
                sessionStorage.setItem("auth_token", `Bearer ${withPhoneToken.token}`);
                navigate("/");
            } catch (e) {
                setIsError(true);
                setErrorMessage("Невірний пароль, номер телефону");
            }
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                {!goNext
                    ?
                    <LoginEmail errorMessage={errorMessage} setErrorMessage={setErrorMessage}
                                isError={isError} setIsError={setIsError}
                                phoneEmail={phoneEmail} setPhoneEmail={setPhoneEmail}
                                goNext={goNext} setGoNext={setGoNext} />
                    :
                    <>
                        <LoginPassword errorMessage={errorMessage} password={password} setPassword={setPassword} setGoNext={setGoNext} isError={isError} setIsError={setIsError} />
                    </>
                }
            </form>
        </main>
    );
}

const LoginEmail: React.FunctionComponent<{
    phoneEmail: string,
    setPhoneEmail: React.Dispatch<React.SetStateAction<string>>,
    goNext: boolean,
    setGoNext: React.Dispatch<React.SetStateAction<boolean>>,
    isError: boolean,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>,
    errorMessage: string,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}> = ({ phoneEmail, setPhoneEmail, goNext, setGoNext, isError, setIsError, errorMessage, setErrorMessage }) => {

    return (
        <div className={classes.formBlock}>
            <div className={classes.cardWrapper}>
                {isError && <div className={classes.error}>{errorMessage}</div>}
                <h2 className={classes.formHeader}>Ввійти</h2>
                <div className={classes.formBody}>
                    <div className={classes.formGroup}>
                        <label htmlFor="loginInput">Емейл або номер телефону</label>
                        <input className={classes.formInput} placeholder="Емейл або номер телефону" id="loginInput" type="text" value={phoneEmail} onChange={(e) => setPhoneEmail(e.target.value)} />
                    </div>
                </div>
                <button type="button" className={classes.formSubmit} onClick={(e) => {
                    if (emailPattern.test(phoneEmail) || phonePattern.test(phoneEmail)) {
                        setIsError(false);
                        setGoNext(true);
                    } else {
                        console.log(phonePattern.test(phoneEmail));
                        setErrorMessage("Введіть коректний телефон або email!")
                        setIsError(true);
                    }
                }}>Продовжити</button>
            </div>
            <div className={classes.otherBlock}>
                <span>Немає аккаунту?</span>
                <NavLink to="/register" className={classes.buttonLink}>Створити новий аккаунт</NavLink>
            </div>
        </div>
    );
}

const LoginPassword: React.FunctionComponent<{
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setGoNext: React.Dispatch<React.SetStateAction<boolean>>,
    isError: boolean,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>,
    errorMessage: string
}> = ({ password, setPassword, setGoNext, isError, setIsError, errorMessage}) => {

    useEffect(() => {
        setIsError(false);
    }, []);

    const handleReturn = () => {
        setGoNext(false);
        setIsError(false);
        setPassword("");
    }

    return (
        <div className={classes.formBlock}>
            <div className={classes.cardWrapper}>
                {isError && <div className={classes.error}>{errorMessage}</div>}
                <h2 className={classes.formHeader}>Ввійти</h2>
                <div className={classes.formBody}>
                    <div className={classes.formGroup}>
                        <label htmlFor="passwordInput">Пароль</label>
                        <input className={classes.formInput} placeholder="Пароль" id="passwordInput" type="password" value={password}
                               onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button className={classes.formSubmit} type="submit">Продовжити</button>
            </div>
            <button className={classes.returnButton} onClick={() => handleReturn()}>{'<-'}</button>
            <div className={classes.otherBlock}>
                <span>Немає аккаунту?</span>
                <NavLink to="/register" className={classes.buttonLink}>Створити новий аккаунт</NavLink>
            </div>
        </div>

    );
}

export default Login;