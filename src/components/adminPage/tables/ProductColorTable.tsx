import React from "react";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import AdminTable from "../AdminTables";

const ProductColorTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductColorMutation] = productColorAPI.useDeleteMutation();

    const {data: productColors, isLoading} = productColorAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColors && <AdminTable itemsPerPage={itemsPerPage} items={productColors} deleteMutation={deleteProductColorMutation}/>
            }
        </>
    );
}

export default ProductColorTable;