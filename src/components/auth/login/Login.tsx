import React, { useState } from "react";
import { authAPI } from "../../../redux/api/authAPI";
import { invalidPasswordPattern } from "../patterns";
import { emailPattern } from "../patterns"
import { phonePattern } from "../patterns"
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { userSlice } from "../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import classes from "../Auth.module.css"

const Login: React.FunctionComponent = () => {

    const [isError, setIsError] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { init } = userSlice.actions;

    const navigate = useNavigate();

    const [phoneEmail, setPhoneEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [goNext, setGoNext] = useState<boolean>(false);

    const [loginByEmail] = authAPI.useLoginByEmailMutation();
    const [loginByPhone] = authAPI.useLoginByPhoneMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (invalidPasswordPattern.test(password)) {
            setIsError(true);
            return;
        }
        if (emailPattern.test(phoneEmail)) {
            const withEmailToken = await loginByEmail({ email: phoneEmail, password: password }).unwrap();
            console.log(withEmailToken);
            dispatch(init(withEmailToken));
            sessionStorage.setItem("auth_token", `Bearer ${withEmailToken.token}`);
            navigate("/");
        }
        else {
            const withPhoneToken = await loginByPhone({ phone: phoneEmail, password: password }).unwrap();
            console.log(withPhoneToken);
            dispatch(init(withPhoneToken));
            sessionStorage.setItem("auth_token", `Bearer ${withPhoneToken.token}`);
            navigate("/");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {!goNext
                ?
                <LoginEmail phoneEmail={phoneEmail} setPhoneEmail={setPhoneEmail} goNext={goNext} setGoNext={setGoNext} />
                :
                <>
                    {isError && <div className={classes.error}>Введіть коректний пароль</div>}
                    <LoginPassword password={password} setPassword={setPassword} setGoNext={setGoNext} />
                </>
            }
        </form>
    );
}

const LoginEmail: React.FunctionComponent<{
    phoneEmail: string,
    setPhoneEmail: React.Dispatch<React.SetStateAction<string>>,
    goNext: boolean,
    setGoNext: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ phoneEmail, setPhoneEmail, goNext, setGoNext }) => {

    const [isError, setIsError] = useState<boolean>(false);

    return (
        <div className={classes.formBlock}>
            <div className={classes.cardWrapper}>
                {isError && <div className={classes.error}>Введіть правильний телефон або email.</div>}
                <h2 className={classes.formHeader}>Ввійти</h2>
                <div className={classes.formBody}>
                    <div className={classes.formGroup}>
                        <label htmlFor="loginInput">Емейл або номер телефону</label>
                        <input className={classes.formInput} placeholder="Емейл або номер телефону" id="loginInput" type="text" value={phoneEmail} onChange={(e) => setPhoneEmail(e.target.value)} />
                    </div>
                </div>
                <button className={classes.formSubmit} onClick={(e) => {
                    if (emailPattern.test(phoneEmail) || phonePattern.test(phoneEmail)) {
                        setIsError(false);
                        setGoNext(true);
                    } else {
                        setIsError(true);
                    }
                }}>Продовжити</button>
            </div>
            <div className={classes.otherBlock}>
                <span>Немає аккаунту?</span>
                <a href="" className={classes.buttonLink}>Створити новий аккаунт</a>
            </div>
        </div>
    );
}

const LoginPassword: React.FunctionComponent<{
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setGoNext: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ password, setPassword, setGoNext }) => {

    return (
        <div className={classes.formBlock}>
            <div className={classes.cardWrapper}>
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
            <button className={classes.returnButton} onClick={() => setGoNext(false)}>{'<-'}</button>
            <div className={classes.otherBlock}>
                <span>Немає аккаунту?</span>
                <a href="" className={classes.buttonLink}>Створити новий аккаунт</a>
            </div>
        </div>

    );
}

export default Login;