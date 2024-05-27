import styles from "./ProductList.module.css";
import React from "react";
import ProductItem from "./ProductItem";
import {productColorAPI} from "../../redux/api/productColorAPI";
import IProductColor from "../../interfaces/IProductColor";

const ProductList: React.FunctionComponent<{itemsCount: number}> = ({ itemsCount}) => {

    const {data: productColors} = productColorAPI.useFetchAllQuery({quantity: itemsCount});

    return (
        <>
            <div className={styles.productList__container}>
                {productColors && productColors.length !== 0 &&
                    <>
                        <div className={styles.productList}>
                            <div className={styles.productList__items}>
                                {productColors.map(productColor => <ProductItem key={productColor.id}
                                                                              productColor={productColor}/>)}
                            </div>
                        </div>


                    </>
                }
            </div>
        </>
    );
}

export default ProductList;