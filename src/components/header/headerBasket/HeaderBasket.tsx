import exp from "node:constants";
import HeaderBasketList from "./HeaderBasketList";

const HeaderBasket = () => {

    const headerBasketItems = [
        {
            productName: "QINSEN  Жіночі міні-сукні з ліфом із квадратним вирізом і довгими рукавами",
            productPrice: 1539.38,
            productColor: "Чорний",
        },
        {
            productName: "Жіночі чорні шкіряні спідниці з високою талією, облягаючі міні-спідниці",
            productPrice: 962.86,
            productColor: "Білий",
        },
        {
            productName: "Жіночі чорні шкіряні спідниці з високою талією, облягаючі міні-спідниці",
            productPrice: 962.86,
            productColor: "Чорний"
        }
    ];

    return (
        <div className="header__basket-wrapper">
            <a href="" className="header__basket-block">
                <img src="img/header/basket.svg" alt="basket"/>
                    <div className="header__value">3</div>
            </a>
            <div className="header__basket-body basket-body">
                <div className="basket-body__count">Ваші товари: <span>{headerBasketItems.length}</span></div>
                <HeaderBasketList products={headerBasketItems}/>
            </div>
        </div>
    );
}

export default HeaderBasket;