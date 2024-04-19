import classes from './categoryCard.module.css'
import ICategory from "../../interfaces/ICategory";
import React from "react";

const CategoryCard : React.FunctionComponent<ICategory> = ({name}) => {
    return (
        <div className={classes.categoryCard}>
            <div className={classes.categoryCardLink}>
                <img className={classes.categoryCardImage}
                     src="'data:image/jpg;base64, '+${subcategory.getImage().decompressImage()}"
                     alt="Category"/>
            </div>
            <span className={classes.categoryCardText}>{name}</span>
        </div>
    );
}

export default CategoryCard;