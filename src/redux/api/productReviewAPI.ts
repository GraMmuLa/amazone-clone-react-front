import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductReview from "../../interfaces/IProductReview";
import IProductDetailValue from "../../interfaces/IProductDetailValue";

export const productReviewAPI = createApi({
    reducerPath: "productReviewAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productReview"}),
    tagTypes: ['ProductReview'],
    endpoints: (build) => ({
        fetchAll: build.query<IProductReview[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductReview']
        }),
        fetchById: build.query<IProductReview, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductReview']
        }),
        add: build.mutation<void, IProductReview>({
            query: (productReview: IProductReview) =>  ({
                url: "",
                method: "POST",
                body: productReview
            }),
            invalidatesTags: ['ProductReview']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductReview']
        })
    })
});