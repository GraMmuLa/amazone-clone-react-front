import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProductColor from "../../interfaces/IProductColor";

export const productColorAPI = createApi({
    reducerPath: "productColorAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/productColor"}),
    endpoints: (build) => ({
        fetchProductColors: build.query<IProductColor, void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchProductColor: build.query<IProductColor, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
})