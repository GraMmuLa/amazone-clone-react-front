import React from "react";
import {productTypeAPI} from "../../../redux/api/productTypeAPI";
import AdminTable from "../AdminTable";

export const ProductTypeTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductTypeMutation] = productTypeAPI.useDeleteMutation();

    const {data: productTypes, isLoading} = productTypeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productTypes && <AdminTable itemsPerPage={itemsPerPage} items={productTypes} deleteMutation={deleteProductTypeMutation}/>
            }
        </>
    );
}

export default ProductTypeTable;