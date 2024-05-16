import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductSize from "../../interfaces/IProductSize";
import IReview from "../../interfaces/IReview";

export const productSizeAPI = createApi({
    reducerPath: "productSizeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productSize"}),
    tagTypes: ['ProductSize'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductSize[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductSize']
        }),
        fetchById: build.query<IProductSize, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductSize']
        }),
        add: build.mutation<IProductSize, IProductSize>({
            query: (productSize: IProductSize) =>  ({
                url: "",
                method: "POST",
                body: productSize
            }),
            invalidatesTags: ['ProductSize']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductSize']
        })
    })
})