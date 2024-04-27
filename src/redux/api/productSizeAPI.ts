import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductSize from "../../interfaces/IProductSize";

export const productSizeAPI = createApi({
    reducerPath: "productSizeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productSize"}),
    endpoints: (build) => ({
        fetchAll: build.query<IProductSize[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchById: build.query<IProductSize, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})