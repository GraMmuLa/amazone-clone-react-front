import React from "react";
import {discountAPI} from "../../../redux/api/discountAPI";
import {discountTypeAPI} from "../../../redux/api/discountTypeAPI";
import AdminTable from "../AdminTables";

export const DiscountTypeTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteDiscountTypeMutation] = discountTypeAPI.useDeleteMutation();

    const {data: discountTypes, isLoading} = discountTypeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                discountTypes && <AdminTable itemsPerPage={itemsPerPage} items={discountTypes} deleteMutation={deleteDiscountTypeMutation}/>
            }
        </>
    );
}

export default DiscountTypeTable;