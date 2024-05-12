import styles from "./User.module.css";
import arrow from "../../../../imgs/arrow.svg"
import React from "react";
import { useAppSelector } from "../../../../redux/hooks/useAppSelector";
import { NavLink } from "react-router-dom";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch";
import {userSlice} from "../../../../redux/slices/userSlice";

const User: React.FunctionComponent = () => {

   const { isLogged, username } = useAppSelector(state => state.user);

   const dispatch = useAppDispatch();
   const {logout} = userSlice.actions;

    const handleOnLogout = () => {
        dispatch(logout());
    }

   return (
      <div id="user" className={styles.user}>
         <div className={styles.user__top}>
            {isLogged ? (
               <>
                  <div className={styles.user__ava}><img src="" alt="avatar" /></div>
                  <div className={styles.user__regAction}>
                     <div className={styles.user__name}>{username}</div>
                     <button onClick={handleOnLogout} className={styles.user__leave}>Вийти</button>
                  </div>
               </>
            ) : (
               <>
                  <div className={styles.user__regAva}><img src="" alt="reg avatar" /></div>
                  <div className={styles.user__regAction}>
                     <NavLink to="/login" className={styles.user__login}>Вхід</NavLink>
                     <NavLink to="/register" className={styles.user__register}>Зареєструватися</NavLink>
                  </div>
               </>
            )}
         </div>
         <div className={styles.user__body}>
            <ul className={styles.user__list}>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Жіночий одяг<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Чоловічий одяг<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Взуття<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Прикраси<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Телефони<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Ноутбуки<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Планшети<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Доставка</a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Налаштування</a></li>
            </ul>
         </div>
      </div>
   );
}

export default User;