import React from "react";

const HeaderBasketItem : React.FunctionComponent<{productName: string, productPrice: number, productColor: string}> = ({productName, productPrice, productColor}) => {
    return (
        <div className="basket-body__item basket-body-item">
            <div className="basket-body-item__checkbox-block">
                <input checked id="checkbox-basket" type="checkbox"/>
                    <label className="basket-body-item__label" htmlFor="checkbox-basket"></label>
            </div>
            <div className="basket-body-item__content">
                <div className="basket-body-item__image">
                    <a href="#">
                        <picture><source srcSet="img/basket/image1.webp" type="image/webp"/><img src="img/basket/image1.jpg" alt="product"/></picture>
                    </a>
                </div>
                <div className="basket-body-item__body">
                    <div className="basket-body-item__price">{productPrice} грн</div>
                    <div className="basket-body-item__text">
                        {productName}

                    </div>
                    <div className="basket-body-item__info">Колір: {productColor}</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBasketItem;