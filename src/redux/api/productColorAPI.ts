import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductColor from "../../interfaces/IProductColor";
import IProduct from "../../interfaces/IProduct";

export const productColorAPI = createApi({
    reducerPath: "productColorAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productColor"}),
    tagTypes: ['ProductColor'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductColor[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductColor']
        }),
        fetchById: build.query<IProductColor, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductColor']
        }),
        add: build.mutation<void, IProductColor>({
            query: (productColor: IProductColor) =>  ({
                url: "",
                method: "POST",
                body: productColor
            }),
            invalidatesTags: ['ProductColor']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductColor']
        })
    })
})