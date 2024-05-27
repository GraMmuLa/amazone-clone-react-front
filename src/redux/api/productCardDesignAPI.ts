import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductCardDesign from "../../interfaces/IProductCardDesign";

export const productCardDesignAPI = createApi({
    reducerPath: "productCardDesignAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productCardDesign"}),
    tagTypes: ['ProductCardDesign'],
    endpoints: build => ({
        fetchAll: build.query<IProductCardDesign[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductCardDesign']
        }),
        fetchById: build.query<IProductCardDesign, number>({
            query: (id) => ({
                url: "",
                params: {id}
            }),
            providesTags: ['ProductCardDesign']
        }),
        add: build.mutation<IProductCardDesign, IProductCardDesign>({
            query: (body) => ({
                url: "",
                method: "POST",
                body
            }),
            invalidatesTags: ['ProductCardDesign']
        }),
        delete: build.mutation<void, number>({
            query: (id) => ({
                url: "",
                method: "DELETE",
                params: {id}
            }),
            invalidatesTags: ['ProductCardDesign']
        })
    })
})