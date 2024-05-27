import styles from "./AccordionContentBody.module.css";
import React, {useEffect, useState} from "react";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch";
import {filterSlice} from "../../../redux/slices/filterSlice";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";


const AccordionContentBodyItem: React.FunctionComponent<{ isOpen: boolean, itemId: number }> = ({ isOpen, itemId }) => {

    const [isLocalOpen, setIsLocalOpen] = useState(isOpen);

    const {data: productType } = productTypeAPI.useFetchByIdQuery(itemId);

    const dispatch = useAppDispatch();
    const {addProductTypeId, removeProductTypeId} = filterSlice.actions;

    useEffect(() => {
        if(isLocalOpen)
            dispatch(addProductTypeId(itemId));
        else
            dispatch(removeProductTypeId(itemId));
    }, [isLocalOpen]);

    return (
    <div className={styles.bodyAccordion__item}>
        {productType &&
            <>
                <input
                    type="checkbox"
                    id={`${itemId}`}
                    name="category"
                    defaultValue={`${itemId}`}
                    onChange={(e)=>setIsLocalOpen(!isLocalOpen)}
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