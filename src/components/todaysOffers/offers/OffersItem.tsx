import React from "react";
import styles from "./OffersItem.module.css";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import {categoryImageAPI} from "../../../redux/api/categoryImageAPI";
import {NavLink} from "react-router-dom";


const OffersItem: React.FunctionComponent<{ categoryId: number }> = ({ categoryId }) => {

    const {data: category} = categoryAPI.useFetchByIdQuery(categoryId);

    return (
        <>
            {category &&
                <div className={styles.itemOffers}>
                    <OffersItemImage categoryImageId={category.categoryImageId!} alt={category.name}/>
                    <NavLink to="/" className={styles.itemOffers__title}>
                        {category.name}
                    </NavLink>
                </div>
            }
        </>
    )
}

const OffersItemImage: React.FunctionComponent<{categoryImageId: number, alt: string}> = ({categoryImageId, alt}) => {

    const {data: categoryImage} = categoryImageAPI.useFetchByIdQuery(categoryImageId);

    return (
        <>
            {categoryImage &&
                <div className={styles.itemOffers__image}>
                    <NavLink to="/">
                        <img src={`data:image/jpg;base64,${categoryImage.data}`} alt={alt}/>
                    </NavLink>
                </div>
            }
        </>
    );
}

export default OffersItem;