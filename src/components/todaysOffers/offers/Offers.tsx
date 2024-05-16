import styles from './Offers.module.css'
import React from "react";
import OffersItem from "./OffersItem";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import allProducts from "../../../imgs/offers/allProducts.png"
import {NavLink} from "react-router-dom";
import ICategory from "../../../interfaces/ICategory";

const Offers: React.FunctionComponent<{categories: ICategory[], title: string }> = ({categories, title }) => {

    return (
      <section className={styles.offers}>
         <div className={styles.offers__container}>
            <h1 className={styles.offers__title}>{title}</h1>
         </div>
         <div className={styles.offers__itemsWrapper}>
             <div className={styles.offers__items}>
                 <div className={styles.itemOffers}>
                     <div className={styles.itemOffers__image}>
                         <NavLink to="/">
                             <img src={allProducts} alt="Всі продукти"/>
                         </NavLink>
                     </div>
                     <NavLink to="/" className={styles.itemOffers__title}>Всі продукти</NavLink>
                 </div>
                 {categories &&
                     categories.map(category => category.id && <OffersItem key={category.id} categoryId={category.id!}/>)}
             </div>
         </div>
      </section>
   );
}

export default Offers;