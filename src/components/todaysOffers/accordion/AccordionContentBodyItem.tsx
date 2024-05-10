import styles from "./AccordionContentBody.module.css";
import React from "react";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";


const AccordionContentBodyItem: React.FunctionComponent<{ itemId: number }> = ({ itemId }) => {

    const {data: productType } = productTypeAPI.useFetchByIdQuery(itemId);

    return (
    <div className={styles.bodyAccordion__item}>
        {productType &&
            <>
                <input
                    type="checkbox"
                    id={`${itemId}`}
                    name="category"
                    defaultValue={`${itemId}`}
                />
                <label htmlFor={`${itemId}`}>
                    {productType.name}
                </label>
            </>
        }
    </div>
    );
}


export default AccordionContentBodyItem;