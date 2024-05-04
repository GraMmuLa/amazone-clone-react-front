import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductDetailValue from "../../interfaces/IProductDetailValue";
import IProductDetailKey from "../../interfaces/IProductDetailKey";

export const productDetailValueAPI = createApi({
    reducerPath: "productDetailValueAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productDetailValue"}),
    tagTypes: ['ProductDetailValue'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductDetailValue[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductDetailValue']
        }),
        fetchById: build.query<IProductDetailValue, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductDetailValue']
        }),
        add: build.mutation<IProductDetailValue, IProductDetailValue>({
            query: (productDetailValue: IProductDetailValue) =>  ({
                url: "",
                method: "POST",
                body: productDetailValue
            }),
            invalidatesTags: ['ProductDetailValue']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductDetailValue']
        })
    })
})