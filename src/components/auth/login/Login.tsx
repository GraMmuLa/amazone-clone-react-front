import React, {useState} from "react";
import classes from "./Login.module.css";
import {authAPI} from "../../../redux/api/authAPI";
import bcrypt from "bcryptjs"

const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
const phonePattern = new RegExp(/^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/g);
const passwordPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

const Login: React.FunctionComponent = () => {

    const [isError, setIsError] = useState<boolean>(false);

    const [phoneEmail, setPhoneEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [goNext, setGoNext] = useState<boolean>(false);

    const [loginByEmail] = authAPI.useLoginByEmailMutation();
    const [loginByPhone] = authAPI.useLoginByPhoneMutation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!passwordPattern.test(password)) {
            setIsError(true);
            return;
        }
        if(emailPattern.test(phoneEmail))
            loginByEmail({email: phoneEmail, password: bcrypt.hashSync(password)})
        else
            loginByPhone({phone: phoneEmail, password: bcrypt.hashSync(password)});
    }

    return (
        <form onSubmit={handleSubmit}>
            {!goNext
                ?
                <LoginEmail phoneEmail={phoneEmail} setPhoneEmail={setPhoneEmail} goNext={goNext} setGoNext={setGoNext}/>
                :
                <>
                    {isError && <div className={classes.error}>Введіть коректний пароль</div>}
                    <LoginPassword password={password} setPassword={setPassword}/>
                </>
            }

        </form>
    );
}

const LoginEmail: React.FunctionComponent<{phoneEmail: string,
    setPhoneEmail: React.Dispatch<React.SetStateAction<string>>,
    goNext: boolean,
    setGoNext: React.Dispatch<React.SetStateAction<boolean>>}> = ({phoneEmail, setPhoneEmail, goNext, setGoNext}) => {

    const [isError, setIsError] = useState<boolean>(false);

    return (
        <div className={classes.emailBlock}>
            <div className={classes.cardWrapper}>
                {isError && <div className={classes.error}>Введіть коректний емейл або номер телефону</div>}
                <h2>Ввійти</h2>
                <label htmlFor="loginInput">Емейл або номер телефону</label>
                <input placeholder="Емейл або номер телефону" id="loginInput" type="text" value={phoneEmail} onChange={(e) => setPhoneEmail(e.target.value)}/>
                <button onClick={(e)=>{
                    if(emailPattern.test(phoneEmail) || phonePattern.test(phoneEmail)) {
                        setIsError(false);
                        setGoNext(true);
                    } else {
                        setIsError(true);
                    }
                }}>Продовжити</button>
            </div>
        </div>
    );
}

const LoginPassword: React.FunctionComponent<{password: string, setPassword: React.Dispatch<React.SetStateAction<string>>}> = ({password, setPassword}) => {

    return (
        <div>
            <h2>Ввійти</h2>
            <label htmlFor="passwordInput">Пароль</label>
            <input placeholder="Пароль" id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Продовжити</button>
        </div>
    );
}

export default Login;