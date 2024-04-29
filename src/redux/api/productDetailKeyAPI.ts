import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductDetailKey from "../../interfaces/IProductDetailKey";
import IProductColorImage from "../../interfaces/IProductColorImage";

export const productDetailKeyAPI = createApi({
    reducerPath: "productDetailKeyAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productDetailKey"}),
    tagTypes: ['ProductDetailKey'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductDetailKey[], void>({
            query: () => ({
                url: "all"
            }),
            providesTags: ['ProductDetailKey']
        }),
        fetchById: build.query<IProductDetailKey, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductDetailKey']
        }),
        add: build.mutation<void, IProductDetailKey>({
            query: (productDetailKey: IProductDetailKey) =>  ({
                url: "",
                method: "POST",
                body: productDetailKey
            }),
            invalidatesTags: ['ProductDetailKey']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductDetailKey']
        })
    })
})