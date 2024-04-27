import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductDetailValue from "../../interfaces/IProductDetailValue";

export const productDetailValueAPI = createApi({
    reducerPath: "productDetailValueAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productDetailValue"}),
    endpoints: (build) => ({
        fetchAll: build.query<IProductDetailValue[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchById: build.query<IProductDetailValue, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})