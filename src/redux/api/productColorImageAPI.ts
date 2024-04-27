import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductColorImage from "../../interfaces/IProductColorImage";

export const productColorImageAPI = createApi({
    reducerPath: "productColorImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productColorImage"}),
    endpoints: (build) => ({
        fetchAll: build.query<IProductColorImage[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchById: build.query<IProductColorImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})