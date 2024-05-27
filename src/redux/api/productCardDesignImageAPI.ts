import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductColorImage from "../../interfaces/IProductColorImage";
import IProductCardDesignImage from "../../interfaces/IProductCardDesignImage";

export const productCardDesignImageAPI = createApi({
    reducerPath: "productCardDesignImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productCardDesignImage"}),
    tagTypes: ['ProductCardDesignImage'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductCardDesignImage[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductCardDesignImage']
        }),
        fetchById: build.query<IProductCardDesignImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductCardDesignImage']
        }),
        add: build.mutation<IProductCardDesignImage, IProductCardDesignImage>({
            query: (productCardDesignImage) =>  {
                const body = new FormData();
                body.append("Content-Type", productCardDesignImage.data.type);
                body.append("file", productCardDesignImage.data);

                return {
                    url: "",
                    method: "POST",
                    body,
                    params: {productCardDesignId: productCardDesignImage.productCardDesignId},
                    formData: true
                }
            },
            invalidatesTags: ['ProductCardDesignImage']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductCardDesignImage']
        })
    })
})