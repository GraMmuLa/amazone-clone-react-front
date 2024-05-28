import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategoryImage from "../../interfaces/ISubcategoryImage";
import IReviewImage from "../../interfaces/IReviewImage";

export const productReviewImageAPI = createApi({
    reducerPath: "productReviewImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/reviewImage"}),
    tagTypes: ['ProductReviewImage'],
    endpoints: (build) => ({
        fetchAll: build.query<IReviewImage[], void>({
            query: ()=>({
                url: "/all"
            }),
            providesTags: ['ProductReviewImage']
        }),
        fetchById: build.query<IReviewImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['ProductReviewImage']
        }),
        add: build.mutation<IReviewImage, IReviewImage>({
            query: (reviewImage) =>  {
                const body = new FormData();
                body.append("Content-Type", reviewImage.data.type);
                body.append("file", reviewImage.data);

                return {
                    url: "",
                    method: "POST",
                    body,
                    params: {reviewId: reviewImage.reviewId},
                    formData: true
                }
            },
            invalidatesTags: ['ProductReviewImage']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['ProductReviewImage']
        })
    })
})