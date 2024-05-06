import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductColorSize from "../../interfaces/IProductColorSize";

export const productColorSizeAPI = createApi({
    reducerPath: "productColorSizeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productColorSize"}),
    tagTypes: ['ProductColorSize'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductColorSize[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductColorSize']
        }),
        fetchById: build.query<IProductColorSize, number>({
            query: (id: number) => ({
                url: "",
                params: {id}
            }),
            providesTags: ['ProductColorSize']
        }),
        add: build.mutation<IProductColorSize, IProductColorSize>({
            query: (productColorSize: IProductColorSize) => ({
                url: "",
                method: "POST",
                body: productColorSize
            }),
            invalidatesTags: ['ProductColorSize']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id}
            }),
            invalidatesTags: ['ProductColorSize']
        })
    })
})