import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductType from "../../interfaces/IProductType";

export const productTypeAPI = createApi({
    reducerPath: "productTypeAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productType"}),
    endpoints: (build) => ({
        fetchAll: build.query<IProductType[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchById: build.query<IProductType, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})