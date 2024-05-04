import React from "react";
import {productDetailKeyAPI} from "../../../redux/api/productDetailKeyAPI";
import AdminTable from "../AdminTables";

export const ProductDetailKeyTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductDetailKeyMutation] = productDetailKeyAPI.useDeleteMutation();

    const {data: productDetailKeys, isLoading} = productDetailKeyAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productDetailKeys && <AdminTable itemsPerPage={itemsPerPage} items={productDetailKeys} deleteMutation={deleteProductDetailKeyMutation}/>}
        </>
    );
}

export default ProductDetailKeyTable;