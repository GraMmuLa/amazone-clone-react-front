import React from "react";
import HeaderBasketItem from "./HeaderBasketItem";

const HeaderBasketList: React.FunctionComponent<{products: Array<{productName: string, productPrice: number, productColor: string}>}> = ({products}) => {
    return (
        <div className="basket-body__items">
            {products.map(x=>(<HeaderBasketItem productName={x.productName} productPrice={x.productPrice} productColor={x.productColor}/>))}
            <a href="" className="basket-body__link">Перейти до корзини</a>
        </div>
    );
}

export default HeaderBasketList;