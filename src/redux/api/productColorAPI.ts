import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductColor from "../../interfaces/IProductColor";

export const productColorAPI = createApi({
    reducerPath: "productColorAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productColor"}),
    tagTypes: ['ProductColor'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductColor[], { sortBy?: string, priceFrom?: number, priceTo?: number }>({
            query: (filters) => ({
                url: "/all",
                params: filters
            }),
            providesTags: ['ProductColor']
        }),
        fetchAllByProduct: build.query<IProductColor[], number>({
            query: (productId: number) => ({
                url: "/product",
                params: {productId}
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
        add: build.mutation<IProductColor, IProductColor>({
            query: (productColor: IProductColor) =>  ({
                url: "",
                method: "POST",
                body: productColor
            }),
            invalidatesTags: ['ProductColor']
        }),
        setMainImage: build.mutation<void, { productColorId: number, productColorImageId: number }>({
            query: (data) => ({
                url: "/mainImage",
                method: "POST",
                params: data
            }),
            invalidatesTags: ['ProductColor']
        }),
        addWithImage: build.mutation<IProductColor, {files: File[], productColor: IProductColor}>({
            query: (data) => {
                const body = new FormData();
                body.append("Content-Type", data.files[0].type);
                for(const file of data.files)
                    body.append("files", file);

                return ({
                    url: "/withImage",
                    method: "POST",
                    body,
                    params: {price: data.productColor.price, colorId: data.productColor.colorId, productId: data.productColor.productId},
                    formData: true
                })
            },
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