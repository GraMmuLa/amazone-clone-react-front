import Aside from "./aside/Aside";
import ProductsPageBody from "./ProductsPageBody";
import Offers from "./offers/Offers";
import Select from "./select/Select";
import ProductsPagePagination from "./ProductsPagePagination";
import { useState } from "react";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
    const [selected, setSelected] = useState("Сортувати по");
    return (
        <main className={styles.page}>
            <Offers title='Сьогоднішні пропозиції' />
            <div className={styles.main}>
                <Select selected={selected} setSelected={setSelected} />
                <div className={styles.main__wrapper}>
                    <Aside />
                    <ProductsPageBody />
                </div>
                <ProductsPagePagination />
            </div>
        </main>
    );
}

export default ProductsPage;