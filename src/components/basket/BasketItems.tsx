import React, {Dispatch, useState} from "react";
import BasketItem from "./BasketItem";
import IProductColor from "../../interfaces/IProductColor";

const BasketItems: React.FunctionComponent<{
    productColors: IProductColor[],
    removeProductColor: Function,
    priceSum: number,
    setPriceSum: Dispatch<React.SetStateAction<number>>,
    allCheck: boolean}> = ({productColors,
                                              removeProductColor,
                                              priceSum,
                                              setPriceSum,
                                              allCheck}) => {

    const [productColorsState, setProductColorsState] = useState<IProductColor[]>(productColors);
    return (
        <ul className="basketItems">
            {productColorsState.map(productColor => productColor.id && <BasketItem key={productColor.id}
                                                           removeProductColor={removeProductColor}
                                                           allCheck={allCheck}
                                                           priceSum={priceSum}
                                                           setPriceSum={setPriceSum}
                                                           productColor={productColor}
                                                           productColorsState={productColorsState}
                                                           setProductColorsState={setProductColorsState}/>)}
        </ul>
    );
}

export default BasketItems;