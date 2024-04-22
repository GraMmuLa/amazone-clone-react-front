import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategoryImage from "../../interfaces/ISubcategoryImage";

export const subcategoryImageAPI = createApi({
    reducerPath: "subcategoryImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/subcategoryImage"}),
    endpoints: (build) =>( {
        fetchSubcategoryImages: build.query<ISubcategoryImage, void>({
            query: ()=>({
                url: "/all"
            })
        }),
        fetchSubcategoryImage: build.query<ISubcategoryImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
});