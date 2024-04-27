import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductDetailKey from "../../interfaces/IProductDetailKey";

export const productDetailKeyAPI = createApi({
    reducerPath: "productDetailKeyAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productDetailKey"}),
    endpoints: (build) => ({
        fetchAll: build.query<IProductDetailKey[], void>({
            query: () => ({
                url: "all"
            })
        }),
        fetchById: build.query<IProductDetailKey, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})