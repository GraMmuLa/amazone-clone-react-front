import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IBanner from "../../interfaces/IBanner";

export const bannerAPI = createApi({
    reducerPath: "bannerAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/banner"}),
    tagTypes: ['Banner'],
    endpoints: (build) => ({
        fetchAll: build.query<IBanner[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['Banner']
        }),
        fetchById: build.query<IBanner, number>({
            query: (id) => ({
                url: "",
                params: {id}
            }),
            providesTags: ['Banner']
        }),
        fetchByUser: build.query<IBanner, number>({
            query: (userId) => ({
                url: "/user",
                params: {userId}
            }),
            providesTags: ['Banner']
        }),
        add: build.mutation<IBanner, IBanner>({
            query: (banner) =>  {
                const body = new FormData();
                body.append("Content-Type", banner.data.type);
                body.append("file", banner.data);

                return {
                    url: "",
                    method: "POST",
                    body,
                    params: {userId: banner.userId},
                    formData: true
                };
            },
            invalidatesTags: ['Banner']
        }),
        delete: build.mutation<void, number>({
            query: (id) => ({
                url: "",
                method: "DELETE",
                params: {id}
            }),
            invalidatesTags: ['Banner']
        })
    })
})