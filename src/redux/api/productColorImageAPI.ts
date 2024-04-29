import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductColorImage from "../../interfaces/IProductColorImage";

export const productColorImageAPI = createApi({
    reducerPath: "productColorImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productColorImage"}),
    tagTypes: ['ProductColorImage'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductColorImage[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductColorImage']
        }),
        fetchById: build.query<IProductColorImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductColorImage']
        }),
        add: build.mutation<void, IProductColorImage>({
            query: (productColorImage: IProductColorImage) =>  ({
                url: "",
                method: "POST",
                body: productColorImage
            }),
            invalidatesTags: ['ProductColorImage']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductColorImage']
        })
    })
})