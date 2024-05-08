import React, { useEffect, useState } from 'react';
import { emailPattern, invalidPasswordPattern, phonePattern } from "../patterns";
import { authAPI } from "../../../redux/api/authAPI";
import { useNavigate } from "react-router-dom";
import { userSlice } from "../../../redux/slices/userSlice";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import classes from "../Auth.module.css"

const Register: React.FunctionComponent = () => {

    const [register, { data: jwtResponse }] = authAPI.useRegisterMutation();

    const [username, setUsername] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRepeat, setPasswordRepeat] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { isLogged } = useAppSelector(state => state.user);
    const { init } = userSlice.actions;

    useEffect(() => {
        if (isLogged)
            navigate("/");
    }, [isLogged]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailPattern.test(email) ||
            !phonePattern.test(phone) ||
            invalidPasswordPattern.test(password) ||
            password !== passwordRepeat ||
            username.length < 4 ||
            firstname.length === 0 ||
            surname.length === 0) {
            setIsError(true);
            return;
        }
        register({
            username: username,
            firstname: firstname,
            surname: surname,
            email: email,
            phone: phone,
            password: password,
            roleName: "Customer"
        });
    }

    if (jwtResponse) {
        dispatch(init(jwtResponse));
        sessionStorage.setItem("auth_token", `Bearer ${jwtResponse.token}`);
    }

    return (
        <div className={classes.formBlock}>
            <div className={classes.cardWrapper}>
                {isError && <div className={classes.error}>Введіть коректні дані</div>}
                <form onSubmit={handleSubmit}>
                    <h2 className={classes.formHeader}>Реєстрація</h2>
                    <div className={classes.formBody}>

                        <div className={classes.formGroup}>
                            <label htmlFor="usernameInput">Ім'я користувача</label>
                            <input className={classes.formInput} placeholder="Ім'я користувача" type="text"
                                id="usernameInput" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="firstnameInput">Ім'я</label>
                            <input className={classes.formInput} placeholder="Ім'я" type="text" id="firstnameInput"
                                onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="surname">Фамілія</label>
                            <input className={classes.formInput} placeholder="Фамілія" type="text" id="nameInput"
                                onChange={(e) => setSurname(e.target.value)} />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="emailInput">Емейл</label>
                            <input className={classes.formInput} placeholder="Емейл" type="text" id="emailInput"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="phoneInput">Номер телефону</label>
                            <input className={classes.formInput} placeholder="Номер телефону" type="text" id="phoneInput"
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="passwordInput">Пароль</label>
                            <input className={classes.formInput} placeholder="Пароль" type="text" id="passwordInput"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="passwordRepeatInput">Повторіть пароль</label>
                            <input className={classes.formInput} placeholder="Повторіть пароль" type="text"
                                id="passwordRepeatInput" onChange={(e) => setPasswordRepeat(e.target.value)} />
                        </div>
                        <div className={classes.formGroup}>
                            <input className={classes.formCheckBox} type="checkbox" id="checkBoxInput" />
                            <label className={classes.formLabel} htmlFor="checkBoxInput">
                                Я погоджуюсь з <a className={classes.formLink} href="#">Політикою конфеденційності</a>
                            </label>
                        </div>
                    </div>
                    <button className={classes.formSubmit} type="submit">Зареєструватися</button>
                </form>
            </div>
            <div className={classes.otherBlock}>
                <span>Вже є аккаунт?</span>
                <a href='' className={classes.buttonLink}>Увійти</a>
            </div>
        </div>
    );
};

export default Register;