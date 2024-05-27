import Aside from "./aside/Aside";
import Body from "./body/Body";
import Offers from "./offers/Offers";
import Select from "./select/Select";
import ProductsPagePagination from "./ProductsPagePagination";
import { useEffect, useState } from "react";
import styles from "./ProductsPage.module.css";
import { productColorAPI } from "../../redux/api/productColorAPI";
import Preloader from "../preloader/Preloader";
import { categoryAPI } from "../../redux/api/categoryAPI";
import { subcategoryAPI } from "../../redux/api/subcategoryAPI";
import { useAppSelector } from "../../redux/hooks/useAppSelector";

const ProductsPage = () => {
    const filter = useAppSelector(state => state.filter);

    // let { data: productColors, isLoading: isLoadingProductColors} = productColorAPI.useFetchAllQuery(filter);

    const [fetchProductColors, { data: productColors, isLoading: isLoadingProductColors }] = productColorAPI.useLazyFetchAllQuery();

    const [fetchCategories, { data: categories, isLoading: isLoadingCategories }] = categoryAPI.useLazyFetchAllQuery();

    const [fetchSubcategories, { data: subcategories, isLoading: isLoadingSubcategories }] = subcategoryAPI.useLazyFetchAllQuery();

    useEffect(() => {
        fetchProductColors(filter);
        fetchCategories();
        fetchSubcategories();
    }, [filter]);

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        if (isLoadingProductColors || isLoadingCategories || isLoadingSubcategories) {
            preloader?.classList.add("_active");
        } else {
            preloader?.classList.remove("_active");
        }
    }, [isLoadingProductColors, isLoadingCategories, isLoadingSubcategories]);

    return (
        <>
            <Preloader />
            <main className={styles.page}>
                {categories && <Offers categories={categories} title='Сьогоднішні пропозиції' />}
                <div className={styles.main}>
                    <Select />
                    <div className={styles.main__wrapper}>
                        {subcategories && <Aside subcategories={subcategories} />}
                        {productColors && <Body productColors={productColors} />}
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductsPage;