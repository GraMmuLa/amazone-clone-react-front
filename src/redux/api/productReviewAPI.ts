import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IReview from "../../interfaces/IReview";
import IProductDetailValue from "../../interfaces/IProductDetailValue";

export const productReviewAPI = createApi({
    reducerPath: "productReviewAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productReview"}),
    tagTypes: ['ProductReview'],
    endpoints: (build) => ({
        fetchAll: build.query<IReview[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['ProductReview']
        }),
        fetchById: build.query<IReview, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductReview']
        }),
        add: build.mutation<IReview, IReview>({
            query: (productReview: IReview) =>  ({
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