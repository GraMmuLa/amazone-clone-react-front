import React from "react";
import {productReviewAPI} from "../../../redux/api/productReviewAPI";
import AdminTable from "../AdminTables";

export const ProductReviewTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductReviewMutation] = productReviewAPI.useDeleteMutation();

    const {data: productReviews, isLoading} = productReviewAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productReviews && <AdminTable itemsPerPage={itemsPerPage} items={productReviews} deleteMutation={deleteProductReviewMutation}/>
            }
        </>
    );
}

export default ProductReviewTable;