import React from "react";
import {categoryAPI} from "../../../redux/api/categoryAPI";
import AdminTable from "../AdminTable";

const CategoryTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteCategoryMutation] = categoryAPI.useDeleteMutation();

    const {data: categories, isLoading} = categoryAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                categories && <AdminTable itemsPerPage={itemsPerPage} items={categories} deleteMutation={deleteCategoryMutation}/>}
        </>
    );
}

export default CategoryTable;