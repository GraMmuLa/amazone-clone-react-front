import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import classes from "./OtherDiscounts.module.css"
import {discountTypeAPI} from "../../../../redux/api/discountTypeAPI";
import {Discounts} from "../../../../enums/discounts";
import IDiscountType from "../../../../interfaces/IDiscountType";
import {productAPI} from "../../../../redux/api/productAPI";
import IProductColor from "../../../../interfaces/IProductColor";
import {productColorImageAPI} from "../../../../redux/api/productColorImageAPI";
import IProduct from "../../../../interfaces/IProduct";
import {productColorAPI} from "../../../../redux/api/productColorAPI";
import {discountAPI} from "../../../../redux/api/discountAPI";

const OtherDiscounts: React.FunctionComponent = () => {

    const {data: discountTypes, isLoading} = discountTypeAPI.useFetchExceptDiscountTypeNameQuery(Discounts.dayDiscount);

    return (
        <Tabs>
            <TabList className={classes.discounts__nav}>
                { isLoading ?
                    <div>Loading...</div> :
                    discountTypes && discountTypes.map(discountType =>
                        <Tab className={`${classes.discounts__navItem} ${classes.buttonLink}`}
                             key={discountType.id}
                             id={`${discountType.id}`}>{discountType.type}</Tab>)
                }
            </TabList>
            {discountTypes && discountTypes.map(discountType => (
                <TabPanel>
                    <OtherDiscountsContent discountType={discountType}/>
                </TabPanel>
            ))}

        </Tabs>
    )
}

const OtherDiscountsProduct: React.FunctionComponent<{product: IProduct}> = ({product}) => {

    const {data: productColor, isLoading} = productColorAPI.useFetchByIdQuery(product.productColorsIds[0]);

    return (
        <>
            { isLoading ? <div>Loading...</div> :
                <div className={classes.dayDiscountItem}>
                    <div className={classes.discount__imgBlock}>
                        <Image productColor={productColor!}/>
                    </div>
                    <DiscountBlock product={product} productColor={productColor!}/>
                </div>
            }
        </>
    );
}

const Image: React.FunctionComponent<{productColor: IProductColor}> = ({productColor}) => {
    const {data: productColorImage} = productColorImageAPI.useFetchByIdQuery(productColor.mainImageId);

    return (
        <>
            {productColorImage && <img src={'data:image/jpg;base64,' + productColorImage.data} alt="Product" className={classes.discount__img}/> }
        </>
    );
}

const DiscountBlock: React.FunctionComponent<{product: IProduct, productColor: IProductColor}> = ({product, productColor}) => {
    const {data: discount} = discountAPI.useFetchByIdQuery(productColor.discountId!);

    return (
        <div>
            {discount &&
                <span
                    className={classes.discount__discount}>{product.price - discount.price + " грн"}</span>}
        </div>
    );
}

const OtherDiscountsContent: React.FunctionComponent<{ discountType: IDiscountType }> = ({discountType}) => {

    const {data: products, isLoading} = productAPI.useFetchAllByDiscountTypeNameQuery(discountType.type);

    return (
        <>
            {isLoading ?
                <div>Loading...</div> :
                products && products.map(product => (
                        <OtherDiscountsProduct product={product}/>
                ))
            }
        </>
    );
}

export default OtherDiscounts;