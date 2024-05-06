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
        fetchAllByProductColorId: build.query<IProductColorImage[], number>({
            query: (productColorId: number) => ({
                url: "/productColor",
                params: {productColorId}
            })
        }),
        fetchById: build.query<IProductColorImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductColorImage']
        }),
        add: build.mutation<IProductColorImage, { file: File, productColorId: number }>({
            query: (productColorImage) =>  {
                const body = new FormData();
                body.append("Content-Type", productColorImage.file.type);
                body.append("file", productColorImage.file);

                return {
                    url: "",
                    method: "POST",
                    body,
                    params: {productColorId: productColorImage.productColorId},
                    formData: true
                }
            },
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