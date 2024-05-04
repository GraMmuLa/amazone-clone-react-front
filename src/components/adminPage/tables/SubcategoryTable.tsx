import React from "react";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";
import AdminTable from "../AdminTables";

const SubcategoryTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteSubcategoryMutation] = subcategoryAPI.useDeleteMutation();

    const {data: subcategories, isLoading} = subcategoryAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                subcategories && <AdminTable itemsPerPage={itemsPerPage} items={subcategories} deleteMutation={deleteSubcategoryMutation}/>
            }
        </>
    );
}

export default SubcategoryTable;