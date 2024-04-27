import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategoryImage from "../../interfaces/ISubcategoryImage";

export const subcategoryImageAPI = createApi({
    reducerPath: "subcategoryImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/subcategoryImage"}),
    endpoints: (build) =>( {
        fetchAll: build.query<ISubcategoryImage[], void>({
            query: ()=>({
                url: "/all"
            })
        }),
        fetchById: build.query<ISubcategoryImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
});