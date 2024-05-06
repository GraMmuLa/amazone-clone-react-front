import React from "react";
import {productAPI} from "../../../redux/api/productAPI";
import AdminTable from "../AdminTable";

const ProductTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductMutation] = productAPI.useDeleteMutation();

    const {data: products, isLoading} = productAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                products && <AdminTable itemsPerPage={itemsPerPage} items={products} deleteMutation={deleteProductMutation}/>
            }
        </>
    )
}

export default ProductTable;