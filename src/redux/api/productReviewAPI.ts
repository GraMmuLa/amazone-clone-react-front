import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductReview from "../../interfaces/IProductReview";

export const productReviewAPI = createApi({
    reducerPath: "productReviewAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productReview"}),
    endpoints: (build) => ({
        fetchAll: build.query<IProductReview[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchById: build.query<IProductReview, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
});