import React from "react";
import {colorAPI} from "../../../redux/api/colorAPI";
import AdminTable from "../AdminTable";

const ColorTable: React.FunctionComponent<{itemsPerPage: number}> = ({itemsPerPage}) => {
    const [deleteColor] = colorAPI.useDeleteMutation();

    const {data: colors, isLoading} = colorAPI.useFetchAllQuery();

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                colors && <AdminTable itemsPerPage={itemsPerPage} items={colors} deleteMutation={deleteColor}/>
            }
        </>
    )
}

export default ColorTable;