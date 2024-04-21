import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ICategory from "../../interfaces/ICategory";

export const categoryAPI = createApi({
    reducerPath: "categoryAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/category"}),
    endpoints: (build)=> ({
        fetchCategories: build.query<ICategory[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchCategory: build.query<ICategory, number>({
            query: (id: number) => ({
                url: "/",
                params: {id: id}
            })
        })
    })
});
