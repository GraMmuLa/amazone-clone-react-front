import classes from './subcategoryList.module.css'
import SubcategoryCard from "./SubcategoryCard";
import {subcategoryAPI} from "../../redux/api/subcategoryAPI";

const SubcategoryList = () => {
    const {data: subcategories} = subcategoryAPI.useFetchAllQuery();

    return (
        <div className={classes.subcategory}>
            <ul className={classes.subcategoryList}>
                {subcategories && subcategories.map(subcategory => (<li key={subcategory.id} className={classes.subcategoryItem}>
                    <SubcategoryCard subcategory={subcategory}/>
                </li>))}
            </ul>
        </div>
    );
}

export default SubcategoryList;