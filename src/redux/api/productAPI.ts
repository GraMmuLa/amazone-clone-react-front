import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProduct from "../../interfaces/IProduct";
import IDiscountType from "../../interfaces/IDiscountType";

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/product"}),
    tagTypes: ['Product'],
    endpoints: (build) => ({
        fetchAll: build.query<IProduct[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['Product']
        }),
        fetchAllByDiscountTypeName: build.query<IProduct[], string>({
            query: (discountTypeName: string) => ({
                url: "/discountType",
                params: {discountTypeName: discountTypeName}
            }),
            providesTags: ['Product']
        }),
        fetchById: build.query<IProduct, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['Product']
        }),
        add: build.mutation<void, IProduct>({
            query: (product: IProduct) =>  ({
                url: "",
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['Product']
        })
    })
});