import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IDiscountType from "../../interfaces/IDiscountType";

export const discountTypeAPI = createApi({
    reducerPath: "discountTypeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/discountType"}),
    endpoints: (build) => ({
        fetchAll: build.query<IDiscountType[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchExceptDiscountTypeName: build.query<IDiscountType[], string>({
            query: (exceptDiscountTypeName) => ({
                url: "/otherDiscounts",
                params: {exceptDiscountTypeName: exceptDiscountTypeName}
            })
        }),
        fetchById: build.query<IDiscountType, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})