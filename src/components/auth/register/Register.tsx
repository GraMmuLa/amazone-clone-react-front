import React, {useEffect, useState} from 'react';
import {emailPattern, invalidPasswordPattern, phonePattern} from "../patterns";
import {authAPI} from "../../../redux/api/authAPI";
import {useNavigate} from "react-router-dom";
import {userSlice} from "../../../redux/slices/userSlice";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";

const Register:React.FunctionComponent = () => {

    const [register, {data: jwtResponse}] = authAPI.useRegisterMutation();

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
    const {isLogged} = useAppSelector(state=>state.user);
    const {init} = userSlice.actions;

    useEffect(()=>{
        if(isLogged)
            navigate("/");
    }, [isLogged]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!emailPattern.test(email) ||
            !phonePattern.test(phone) ||
            invalidPasswordPattern.test(password) ||
            password !== passwordRepeat ||
            username.length < 4 ||
            firstname.length === 0 ||
            surname.length === 0) {
            setIsError(true);
            return;
        }
        register({username: username,
            firstname: firstname,
            surname: surname,
            email: email,
            phone: phone,
            password: password,
            roleName: "Customer"});
    }

    if(jwtResponse) {
        dispatch(init(jwtResponse));
        sessionStorage.setItem("auth_token", `Bearer ${jwtResponse.token}`);
    }

    return (
        <>
            {isError && <div>Введіть коректні дані</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usernameInput">Ім'я користувача</label>
                    <input placeholder="Ім'я користувача" type="text" id="usernameInput" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="firstnameInput">Ім'я</label>
                    <input placeholder="Ім'я" type="text" id="firstnameInput" onChange={(e)=>setFirstname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="surname">Фамілія</label>
                    <input placeholder="Фамілія" type="text" id="nameInput" onChange={(e)=>setSurname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="emailInput">Емейл</label>
                    <input type="text" id="emailInput" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="phoneInput">Номер телефону</label>
                    <input type="text" id="phoneInput" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="phoneInput">Пароль</label>
                    <input type="text" id="phoneInput" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="phoneInput">Повторіть пароль</label>
                    <input type="text" id="phoneInput" onChange={(e)=>setPasswordRepeat(e.target.value)}/>
                </div>
                <button type="submit">Зареєструватися</button>
            </form>
        </>

    );
};

export default Register;