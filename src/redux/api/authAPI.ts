import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ILoginUser from "../../interfaces/ILoginUser";
import IUser from "../../interfaces/IUser";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081"}),
    endpoints: (build) => ({
        loginByEmail: build.mutation<IUser, ILoginUser>({
            query: (user) => ({
                url: "/loginByEmail",
                method: "POST",
                body: user
            })
        }),
        loginByPhone: build.mutation<IUser, ILoginUser>({
            query: (user) => ({
                url: "/loginByPhone",
                method: "POST",
                body: user
            })
        })
    })
})