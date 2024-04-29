import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategory from "../../interfaces/ISubcategory";
import IProductType from "../../interfaces/IProductType";

export const subcategoryAPI = createApi({
    reducerPath: "subcategoryAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/subcategory"}),
    tagTypes: ['Subcategory'],
    endpoints: (build) => ({
        fetchAll: build.query<ISubcategory[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['Subcategory']
        }),
        fetchById: build.query<ISubcategory, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['Subcategory']
        }),
        add: build.mutation<void, ISubcategory>({
            query: (subcategory: ISubcategory) =>  ({
                url: "",
                method: "POST",
                body: subcategory
            }),
            invalidatesTags: ['Subcategory']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['Subcategory']
        })
    })
})