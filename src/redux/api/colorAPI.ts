import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IColor from "../../interfaces/IColor";

export const colorAPI = createApi({
    reducerPath: "colorAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/color"}),
    tagTypes: ['Color'],
    endpoints: build => ({
        fetchAll: build.query<IColor[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['Color']
        }),
        fetchById: build.query<IColor, number>({
            query: (id) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['Color']
        }),
        fetchByProductColorId: build.query<IColor, number>({
            query: (id) => ({
                url: "/productColor",
                params: {productColorId: id}
            }),
            providesTags: ['Color']
        }),
        add: build.mutation<void, IColor>({
            query: (color: IColor) => ({
                url: "",
                method: "POST",
                body: color,
            }),
            invalidatesTags: ['Color']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['Color']
        })
    })
})