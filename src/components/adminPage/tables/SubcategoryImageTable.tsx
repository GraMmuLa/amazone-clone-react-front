import React from "react";
import {subcategoryImageAPI} from "../../../redux/api/subcategoryImageAPI";
import AdminTable from "../AdminTable";

const SubcategoryImageTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {

    const [deleteSubcategoryImageMutation] = subcategoryImageAPI.useDeleteMutation();

    const {data: subcategoryImages, isLoading} = subcategoryImageAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                subcategoryImages && <AdminTable itemsPerPage={itemsPerPage} items={subcategoryImages} deleteMutation={deleteSubcategoryImageMutation}/>
            }
        </>
    );
}

export default SubcategoryImageTable;