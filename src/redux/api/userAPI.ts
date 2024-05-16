import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IJwtObject from "../../interfaces/IJwtObject";
import IUser from "../../interfaces/IUser";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/user"}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchAll: build.query<IUser[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['User']
        }),
        fetchById: build.query<IUser, number>({
            query: (id) => ({
                url: "",
                params: {id}
            }),
            providesTags: ['User']
        }),
        addFavouriteProductColor: build.mutation<IJwtObject, {userId: number, productColorId: number, validityFrom: number, validityTo: number}>({
            query: (data) => ({
                url: "/addFavouriteProductColor",
                method: "POST",
                params: data
            }),
            invalidatesTags: ['User']
        }),
        deleteFavouriteProductColor: build.mutation<IJwtObject, {userId: number, productColorId: number, validityFrom: number, validityTo: number}>({
            query: (data) => ({
                url: "/deleteFavouriteProductColor",
                method: "DELETE",
                params: data
            }),
            invalidatesTags: ['User']
        })
    })
})