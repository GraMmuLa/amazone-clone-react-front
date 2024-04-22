import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IDiscount from "../../interfaces/IDiscount";

export const discountAPI = createApi({
    reducerPath: "discountAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/discount"}),
    endpoints: (build) => ({
        fetchDiscounts: build.query<IDiscount, void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchDiscount: build.query<IDiscount, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})