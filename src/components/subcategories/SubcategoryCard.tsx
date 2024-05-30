import classes from './subcategoryCard.module.css'
import React from "react";
import ISubcategory from "../../interfaces/ISubcategory";
import { subcategoryImageAPI } from "../../redux/api/subcategoryImageAPI";
import {NavLink} from "react-router-dom";

const SubcategoryCard: React.FunctionComponent<{ subcategory: ISubcategory }> = ({ subcategory }) => {

    const { data: subcategoryImage } = subcategoryImageAPI.useFetchByIdQuery(subcategory.subcategoryImageId!);


    return (
        <div className={classes.subcategoryCard}>
            <div className={classes.subcategoryCardLink}>
                <NavLink to="/todaysOffers">
                    <img className={classes.subcategoryCardImage}
                         src={'data:image/jpg;base64,' + (subcategoryImage ? subcategoryImage.data : '')}
                         alt="Category"/>
                </NavLink>
            </div>
            <NavLink to="/todaysOffers" className={classes.subcategoryCardText}>{subcategory.name}</NavLink>
        </div>
    );
}

export default SubcategoryCard;