import React from "react";
import {productDetailValueAPI} from "../../../redux/api/productDetailValueAPI";
import AdminTable from "../AdminTable";

export const ProductDetailValueTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductDetailValueMutation] = productDetailValueAPI.useDeleteMutation();

    const {data: productDetailValues, isLoading} = productDetailValueAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productDetailValues && <AdminTable itemsPerPage={itemsPerPage} items={productDetailValues} deleteMutation={deleteProductDetailValueMutation}/>}
        </>
    );
}

export default ProductDetailValueTable;