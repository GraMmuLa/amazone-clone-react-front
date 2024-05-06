import React from "react";
import {categoryImageAPI} from "../../../redux/api/categoryImageAPI";
import AdminTable from "../AdminTable";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import {productColorSizeAPI} from "../../../redux/api/productColorSizeAPI";

export const ProductColorSizeTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductColorSizeMutation] = productColorSizeAPI.useDeleteMutation();

    const {data: productColorSizes, isLoading} = productColorSizeAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColorSizes && <AdminTable itemsPerPage={itemsPerPage} items={productColorSizes} deleteMutation={deleteProductColorSizeMutation}/>
            }
        </>
    );
}

export default ProductColorSizeTable;