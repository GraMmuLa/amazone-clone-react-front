import React from "react";
import {productReviewAPI} from "../../../redux/api/productReviewAPI";
import {discountAPI} from "../../../redux/api/discountAPI";
import AdminTable from "../AdminTable";

const DiscountTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteDiscount] = discountAPI.useDeleteMutation();

    const {data: discounts, isLoading} = discountAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                discounts && <AdminTable itemsPerPage={itemsPerPage} items={discounts} deleteMutation={deleteDiscount}/>
            }
        </>
    );
}

export default DiscountTable;