import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProduct from "../../interfaces/IProduct";

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/product"}),
    endpoints: (build) => ({
        fetchAll: build.query<IProduct[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchAllByDiscountTypeName: build.query<IProduct[], string>({
            query: (discountTypeName: string) => ({
                url: "/discountType",
                params: {discountTypeName: discountTypeName}
            })
        }),
        fetchById: build.query<IProduct, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
});