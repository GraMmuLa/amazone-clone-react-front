import { withMask } from 'use-mask-input';
import React, { useEffect, useState } from 'react';
import { emailPattern, invalidPasswordPattern } from "../patterns";
import { authAPI } from "../../../redux/api/authAPI";
import { useNavigate } from "react-router-dom";
import { userSlice } from "../../../redux/slices/userSlice";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import styles from "./RegisterSeller.module.css";

const RegisterSeller: React.FunctionComponent = () => {
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
         // !phonePattern.test(phone) ||
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
         roleName: "Seller"
      });
   };

   if (jwtResponse) {
      dispatch(init(jwtResponse));
      sessionStorage.setItem("auth_token", `Bearer ${jwtResponse.token}`);
   }

   return (
      <div className={styles.sellerRegist}>
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
                        <input id="sellerRegistFirstname" type="text" onChange={(e) => setFirstname(e.target.value)} placeholder="Ім’я" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistSurname">Фамілія</label>
                        <input id="sellerRegistSurname" type="text" onChange={(e) => setSurname(e.target.value)} placeholder="Фамілія" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistMiddleName">По-батькові</label>
                        <input id="sellerRegistMiddleName" type="text" placeholder="По-батькові" />
                     </div>
                  </div>
                  <div className={styles.formItemWrapper}>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistEmail">Емейл</label>
                        <input id="sellerRegistEmail" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Емейл" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistPhone">Номер телефону</label>
                        <div className={styles.sellerRegist__phone}>
                           <span>+380</span>
                           <input id="sellerRegistPhone" type="text" ref={withMask('999-99-99-99')} onChange={(e) => setPhone(e.target.value)} placeholder="000-00-00-00" />
                        </div>
                     </div>
                  </div>
                  <div className={styles.formItemWrapper}>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistPassword">Пароль</label>
                        <input id="sellerRegistPassword" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
                     </div>
                     <div className={styles.formItem}>
                        <label htmlFor="sellerRegistPasswordRepeat">Повторіть пароль</label>
                        <input type="password" id="sellerRegistPasswordRepeat" onChange={(e) => setPasswordRepeat(e.target.value)} placeholder="Повторіть пароль" />
                     </div>
                  </div>
               </div>
               <div className={styles.sellerRegist__checkboxBlock}>
                  <input className={styles.formCheckBox} type="checkbox" id="sellerRegistCheckBoxInput" />
                  <label className={styles.formLabel} htmlFor="sellerRegistCheckBoxInput">
                     Я підтверджую що всі введені данні коректні
                  </label>
               </div>
               <button type="submit">Зареєструватись</button>
            </form>
         </div>
      </div>
   );
}

export default RegisterSeller;
