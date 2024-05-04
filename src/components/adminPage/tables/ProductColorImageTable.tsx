import React from "react";
import {productColorImageAPI} from "../../../redux/api/productColorImageAPI";
import AdminTable from "../AdminTables";

const ProductColorImageTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteProductColorImageMutation] = productColorImageAPI.useDeleteMutation();

    const {data: productColorImages, isLoading} = productColorImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColorImages && <AdminTable itemsPerPage={itemsPerPage} items={productColorImages} deleteMutation={deleteProductColorImageMutation}/>
            }
        </>
    );
}

export default ProductColorImageTable;