import { withMask } from 'use-mask-input';
import React, { useEffect, useState } from 'react';
import { emailPattern, invalidPasswordPattern, phonePattern } from "../patterns";
import { authAPI } from "../../../redux/api/authAPI";
import { useNavigate } from "react-router-dom";
import { userSlice } from "../../../redux/slices/userSlice";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import styles from "./RegisterSeller.module.css";
import IJwtObject from "../../../interfaces/IJwtObject";

const RegisterSeller: React.FunctionComponent = () => {
   const [register] = authAPI.useRegisterMutation();

   const [username, setUsername] = useState<string>("");
   const [firstname, setFirstname] = useState<string>("");
   const [middlename, setMiddlename] = useState<string>("");
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
         !phonePattern.test("+380" + phone) ||
         invalidPasswordPattern.test(password) ||
         password !== passwordRepeat ||
         username.length < 4 ||
         firstname.length === 0 ||
         middlename.length === 0 ||
         surname.length === 0 ||
         !isConfidential) {
         setIsError(true);
         return;
      }
      const jwtResponse = await register({
         username: username,
         firstname: firstname,
         middlename: middlename,
         surname: surname,
         email: email,
         phone: "+380" + phone,
         password: password,
         roleName: "Seller"
      }).unwrap();

      dispatch(init(jwtResponse));
      sessionStorage.setItem("auth_token", `Bearer ${jwtResponse.token}`);
   };

   return (
      <main className={styles.sellerRegist}>
         <div className="sellerRegist__container">
            <h2 className={styles.sellerRegist__title}>Реєстрація продавця</h2>
            <form action="" onSubmit={handleSubmit}>
               {isError && <div className={styles.error}>Введіть коректні дані</div>}
               <div className={styles.sellerRegist__formBody}>
                  <div className={styles.formItemWrapper}>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistUsername">Назва магазину</label>
                        <input id="sellerRegistUsername" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Назва магазину" />
                     </div>
                  </div>
                  <div className={styles.formItemWrapper}>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistFirstname">Ім’я</label>
                        <input value={firstname} id="sellerRegistFirstname" type="text" onChange={(e) => setFirstname(e.target.value)} placeholder="Ім’я" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistSurname">Фамілія</label>
                        <input value={surname} id="sellerRegistSurname" type="text" onChange={(e) => setSurname(e.target.value)} placeholder="Фамілія" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistMiddleName">По-батькові</label>
                        <input value={middlename} id="sellerRegistMiddleName" onChange={(e) => setMiddlename(e.target.value)} type="text" placeholder="По-батькові" />
                     </div>
                  </div>
                  <div className={styles.formItemWrapper}>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistEmail">Емейл</label>
                        <input value={email} id="sellerRegistEmail" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Емейл" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistPhone">Номер телефону</label>
                        <div className={styles.sellerRegist__phone}>
                           <span>+380</span>
                           <input value={phone} id="sellerRegistPhone" type="text" ref={withMask('-99-999-99-99')} onChange={(e) => setPhone(e.target.value)} placeholder="-00-000-00-00" />
                        </div>
                     </div>
                  </div>
                  <div className={styles.formItemWrapper}>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistPassword">Пароль</label>
                        <input value={password} id="sellerRegistPassword" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistPasswordRepeat">Повторіть пароль</label>
                        <input value={passwordRepeat} type="password" id="sellerRegistPasswordRepeat" onChange={(e) => setPasswordRepeat(e.target.value)} placeholder="Повторіть пароль" />
                     </div>
                  </div>
               </div>
               <div className={styles.sellerRegist__checkboxBlock}>
                  <input className={styles.formCheckBox} type="checkbox" id="sellerRegistCheckBoxInput"
                     onChange={() => setIsConfidential(!isConfidential)} />
                  <label className={styles.formLabel} htmlFor="sellerRegistCheckBoxInput">
                     Я підтверджую що всі введені данні коректні
                  </label>
               </div>
               <button type="submit">Зареєструватись</button>
            </form>
         </div>
      </main>
   );
}

export default RegisterSeller;
