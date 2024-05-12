import classes from './subcategoryList.module.css'
import SubcategoryCard from "./SubcategoryCard";
import {subcategoryAPI} from "../../redux/api/subcategoryAPI";
import ISubcategory from "../../interfaces/ISubcategory";
import React from "react";

const SubcategoryList: React.FunctionComponent<{subcategories: ISubcategory[]}> = ({subcategories}) => {

    return (
        <div className={classes.subcategory}>
            <ul className={classes.subcategoryList}>
                {subcategories.map(subcategory => (<li key={subcategory.id} className={classes.subcategoryItem}>
                    <SubcategoryCard subcategory={subcategory}/>
                </li>))}
            </ul>
        </div>
    );
}

export default SubcategoryList;