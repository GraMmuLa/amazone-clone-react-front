import styles from "./RegisterSeller.module.css";
import { productAPI } from "../../../redux/api/productAPI";
import { useParams } from "react-router";
import { withMask } from 'use-mask-input';
import React, { useState } from 'react';

const isValidEmail = (email: string) => {
   const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const RegisterSeller: React.FunctionComponent = () => {
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [tel, setTel] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (name === "") {
         console.log('error username');
      }
      if (lastName === "") {
         console.log('error last name');
      }
      if (email === "" || !isValidEmail(email)) {
         console.log('error email');
      }
      if (tel === "") {
         console.log('error tel');
      }
   };

   return (
      <form action="" onSubmit={handleSubmit}>
         <div>
            <div className="formItem">
               <label htmlFor="">Ім’я</label>
               <input id="username" type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="formItem">
               <label htmlFor="">Фамілія</label>
               <input id="lastName" type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="formItem">
               <label htmlFor="">По-батькові</label>
               <input type="text" />
            </div>
            <div className="formItem">
               <label htmlFor="">Пошта</label>
               <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="formItem">
               <label htmlFor="">Номер телефону</label>
               <div>
                  <span>+380</span>
                  <input id="tel" type="text" ref={withMask('999-99-99-99')} onChange={(e) => setTel(e.target.value)} />
               </div>
            </div>
         </div>
         <div>
            <input id="confirm" type="checkbox" />
            <label htmlFor="confirm">Я підтверджую що всі введені данні коректні</label>
         </div>
         <button type="submit">Зареєструватись</button>
      </form>
   );
}

export default RegisterSeller;

//       if (password === "" || password.length < 8) {
//          console.log('error password');
//       }

//       <div className="formItem">
//          <label htmlFor="">Пароль</label>
//          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
