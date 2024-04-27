import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategory from "../../interfaces/ISubcategory";

export const subcategoryAPI = createApi({
    reducerPath: "subcategoryAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/subcategory"}),
    endpoints: (build) => ({
        fetchAll: build.query<ISubcategory[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchById: build.query<ISubcategory, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})