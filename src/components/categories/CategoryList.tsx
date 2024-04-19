import classes from './categoryList.module.css'
import {useStoreSelector} from "../../redux/hooks/useStoreSelector";
import {useState} from "react";
import CategoryCard from "./CategoryCard";
import exp from "node:constants";

const CategoryList = () => {

    const categoryState = useStoreSelector(state=>state.categories);

    const [categories, setCategories] = useState(categoryState.categories);

    return (
        <div className={classes.category}>
            <ul className={classes.categoryList}>
                {categories.map(category=> (<li className={classes.categoryItem}>
                    <CategoryCard name={category.name}/>
                </li>))}

            </ul>
        </div>
    );
}

export default CategoryList;