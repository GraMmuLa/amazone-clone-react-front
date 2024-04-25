import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IDiscountType from "../../interfaces/IDiscountType";

export const discountTypeAPI = createApi({
    reducerPath: "discountTypeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/discountType"}),
    endpoints: (build) => ({
        fetchDiscountTypes: build.query<IDiscountType[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchOtherDiscountTypes: build.query<IDiscountType[], string>({
            query: (exceptDiscountTypeName) => ({
                url: "/otherDiscounts",
                params: {exceptDiscountTypeName: exceptDiscountTypeName}
            })
        }),
        fetchDiscountType: build.query<IDiscountType, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})