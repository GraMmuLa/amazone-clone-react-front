import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IJwtObject from "../../interfaces/IJwtObject";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/user"}),
    endpoints: (build) => ({
        addFavouriteProductColor: build.mutation<IJwtObject, {userId: number, productColorId: number, validityFrom: number, validityTo: number}>({
            query: (data) => ({
                url: "/addFavouriteProductColor",
                method: "POST",
                params: data
            })
        }),
        deleteFavouriteProductColor: build.mutation<IJwtObject, {userId: number, productColorId: number, validityFrom: number, validityTo: number}>({
            query: (data) => ({
                url: "/deleteFavouriteProductColor",
                method: "DELETE",
                params: data
            })
        })
    })
})