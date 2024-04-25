import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IProduct from "../../interfaces/IProduct";

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/product"}),
    endpoints: (build) => ({
        fetchProducts: build.query<IProduct[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchProductByDiscountTypeName: build.query<IProduct[], string>({
            query: (discountTypeName: string) => ({
                url: "/discountType",
                params: {discountTypeName: discountTypeName}
            })
        }),
        fetchProduct: build.query<IProduct, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            })
        })
    })
});