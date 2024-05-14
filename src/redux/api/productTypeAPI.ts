import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductType from "../../interfaces/IProductType";
import IProductSize from "../../interfaces/IProductSize";

export const productTypeAPI = createApi({
    reducerPath: "productTypeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productType"}),
    tagTypes: ['ProductType'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductType[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductType']
        }),
        fetchAllBySubcategory: build.query<IProductType[], number>({
            query: (subcategoryId) => ({
                url: "/subcategory",
                params: {subcategoryId: subcategoryId}
            }),
            providesTags: ['ProductType']
        }),
        fetchById: build.query<IProductType, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductType']
        }),
        add: build.mutation<IProductType, IProductType>({
            query: (productType: IProductType) =>  ({
                url: "",
                method: "POST",
                body: productType
            }),
            invalidatesTags: ['ProductType']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductType']
        })
    })
})