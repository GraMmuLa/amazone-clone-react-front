import React, { useEffect, useState } from 'react';
import { emailPattern, invalidPasswordPattern, phonePattern } from "../patterns";
import { authAPI } from "../../../redux/api/authAPI";
import {NavLink, useNavigate} from "react-router-dom";
import { userSlice } from "../../../redux/slices/userSlice";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import classes from "../Auth.module.css"
import styles from "../registerSeller/RegisterSeller.module.css";
import {withMask} from "use-mask-input";

const Register: React.FunctionComponent = () => {

    const [register] = authAPI.useRegisterMutation();

    const [username, setUsername] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRepeat, setPasswordRepeat] = useState<string>("");
    const [isConfidential, setIsConfidential] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { isLogged } = useAppSelector(state => state.user);
    const { init } = userSlice.actions;

    useEffect(() => {
        if (isLogged)
            navigate("/");
    }, [isLogged]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailPattern.test(email) ||
            !phonePattern.test("380"+phone) ||
            invalidPasswordPattern.test(password) ||
            password !== passwordRepeat ||
            username.length < 4 ||
            firstname.length === 0 ||
            surname.length === 0 ||
            !isConfidential) {
            setIsError(true);
            return;
        }

        const jwtResponse = await register({
            username: username,
            firstname: firstname,
            surname: surname,
            email: email,
            phone: "380"+phone,
            password: password,
            roleName: "Customer"
        }).unwrap();
        console.log(jwtResponse);

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
                            <input value={username} className={classes.formInput} placeholder="Ім'я користувача" type="text"
                                   id="usernameInput" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="firstnameInput">Ім'я</label>
                            <input value={firstname} className={classes.formInput} placeholder="Ім'я" type="text" id="firstnameInput"
                                   onChange={(e) => setFirstname(e.target.value)}/>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="surname">Фамілія</label>
                            <input value={surname} className={classes.formInput} placeholder="Фамілія" type="text" id="nameInput"
                                   onChange={(e) => setSurname(e.target.value)}/>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="emailInput">Емейл</label>
                            <input value={email} className={classes.formInput} placeholder="Емейл" type="text" id="emailInput"
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="sellerRegistPhone">Номер телефону</label>
                            <div className={styles.sellerRegist__phone}>
                                <span>+380</span>
                                <input className={classes.formInput} id="sellerRegistPhone" type="text" ref={withMask('-99-999-99-99')}
                                       onChange={(e) => {setPhone(e.target.value)}} placeholder="-00-000-00-00"/>
                            </div>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="passwordInput">Пароль</label>
                            <input value={password} className={classes.formInput} placeholder="Пароль" type="text" id="passwordInput"
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="passwordRepeatInput">Повторіть пароль</label>
                            <input value={passwordRepeat} className={classes.formInput} placeholder="Повторіть пароль" type="text"
                                   id="passwordRepeatInput" onChange={(e) => setPasswordRepeat(e.target.value)}/>
                        </div>
                        <div className={classes.formGroup}>
                            <input onChange={()=>setIsConfidential(!isConfidential)} className={classes.formCheckBox} type="checkbox" id="checkBoxInput"/>
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
                <NavLink to="/login" className={classes.buttonLink}>Увійти</NavLink>
            </div>
        </div>
    );
};

export default Register;