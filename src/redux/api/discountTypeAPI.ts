import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IDiscountType from "../../interfaces/IDiscountType";
import IDiscount from "../../interfaces/IDiscount";

export const discountTypeAPI = createApi({
    reducerPath: "discountTypeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/discountType"}),
    tagTypes: ['DiscountType'],
    endpoints: (build) => ({
        fetchAll: build.query<IDiscountType[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['DiscountType']
        }),
        fetchExceptDiscountTypeName: build.query<IDiscountType[], string>({
            query: (exceptDiscountTypeName) => ({
                url: "/otherDiscounts",
                params: {exceptDiscountTypeName: exceptDiscountTypeName}
            }),
            providesTags: ['DiscountType']
        }),
        fetchById: build.query<IDiscountType, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['DiscountType']
        }),
        add: build.mutation<void, IDiscountType>({
            query: (discountType: IDiscountType) =>  ({
                url: "",
                method: "POST",
                body: discountType
            }),
            invalidatesTags: ['DiscountType']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['DiscountType']
        })
    })
})