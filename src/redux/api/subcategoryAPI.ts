import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategory from "../../interfaces/ISubcategory";

export const subcategoryAPI = createApi({
    reducerPath: "subcategoryAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/subcategory"}),
    endpoints: (build) => ({
        fetchSubcategories: build.query<ISubcategory[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchSubcategory: build.query<ISubcategory, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})