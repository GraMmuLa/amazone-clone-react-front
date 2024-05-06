import React from "react";
import {productSizeAPI} from "../../../redux/api/productSizeAPI";
import AdminTable from "../AdminTable";

export const ProductSizeTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductSizeMutation] = productSizeAPI.useDeleteMutation();

    const {data: productSizes, isLoading} = productSizeAPI.useFetchAllQuery();

    return (
        <>
            {isLoading ?
                <div>Loading...</div> :
                productSizes && <AdminTable itemsPerPage={itemsPerPage} items={productSizes}
                                            deleteMutation={deleteProductSizeMutation}/>
            }
        </>
    );
}

export default ProductSizeTable;