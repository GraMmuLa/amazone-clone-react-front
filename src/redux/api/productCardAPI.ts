import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductCard from "../../interfaces/IProductCard";

export const productCardAPI = createApi({
    reducerPath: "productCardAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productCard"}),
    tagTypes: ['ProductCard'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductCard[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductCard']
        }),
        fetchById: build.query<IProductCard, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductCard']
        }),
        add: build.mutation<IProductCard, IProductCard>({
            query: (productCard: IProductCard) =>  ({
                url: "",
                method: "POST",
                body: productCard
            }),
            invalidatesTags: ['ProductCard']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductCard']
        })
    })
})