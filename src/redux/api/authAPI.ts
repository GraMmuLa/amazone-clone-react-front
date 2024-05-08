import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ILoginUser from "../../interfaces/ILoginUser";
import IUser from "../../interfaces/IUser";
import ISignUpUser from "../../interfaces/ISignUpUser";
import IJwtObject from "../../interfaces/IJwtObject";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081"}),
    endpoints: (build) => ({
        loginByEmail: build.mutation<IJwtObject, ILoginUser>({
            query: (user) => ({
                url: "/loginByEmail",
                method: "POST",
                body: user
            })
        }),
        loginByPhone: build.mutation<IJwtObject, ILoginUser>({
            query: (user) => ({
                url: "/loginByPhone",
                method: "POST",
                body: user
            })
        }),
        register: build.mutation<IJwtObject, ISignUpUser>({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user
            })
        })
    })
})