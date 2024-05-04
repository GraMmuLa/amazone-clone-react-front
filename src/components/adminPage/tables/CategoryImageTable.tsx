import React from "react";
import {categoryImageAPI} from "../../../redux/api/categoryImageAPI";
import AdminTable from "../AdminTables";

export const CategoryImageTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteCategoryImageMutation] = categoryImageAPI.useDeleteMutation();

    const {data: categoryImages, isLoading} = categoryImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                categoryImages && <AdminTable itemsPerPage={itemsPerPage} items={categoryImages} deleteMutation={deleteCategoryImageMutation}/>
            }
        </>
    );
}

export default CategoryImageTable;