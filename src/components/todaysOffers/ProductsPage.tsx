import Aside from "./aside/Aside";
import Body from "./body/Body";
import Offers from "./offers/Offers";
import Select from "./select/Select";
import ProductsPagePagination from "./ProductsPagePagination";
import {useEffect, useState} from "react";
import styles from "./ProductsPage.module.css";
import {productColorAPI} from "../../redux/api/productColorAPI";
import Preloader from "../preloader/Preloader";
import {categoryAPI} from "../../redux/api/categoryAPI";
import {subcategoryAPI} from "../../redux/api/subcategoryAPI";

const ProductsPage = () => {
    const [selected, setSelected] = useState({title:"Сортувати по", value: ""});

    const {data: productColors, isLoading: isLoadingProductColors} = productColorAPI.useFetchAllQuery({sortBy: selected.value});

    const {data: categories, isLoading: isLoadingCategories} = categoryAPI.useFetchAllQuery();

    const { data: subcategories, isLoading: isLoadingSubcategories } = subcategoryAPI.useFetchAllQuery();

    return (
        <>
            {isLoadingProductColors || isLoadingCategories || isLoadingSubcategories ?
                <Preloader/> :
                <main className={styles.page}>
                    {categories && <Offers categories={categories} title='Сьогоднішні пропозиції'/>}
                    <div className={styles.main}>
                        <Select selected={selected} setSelected={setSelected}/>
                        <div className={styles.main__wrapper}>
                            {subcategories && <Aside subcategories={subcategories}/>}
                            {productColors && <Body productColors={productColors}/>}
                        </div>
                        <ProductsPagePagination/>
                    </div>
                </main>
            }
        </>
    );
}

export default ProductsPage;