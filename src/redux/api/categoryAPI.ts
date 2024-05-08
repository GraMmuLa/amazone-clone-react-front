import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ICategory from "../../interfaces/ICategory";

export const categoryAPI = createApi({
    reducerPath: "categoryAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/category"}),
    tagTypes: ['Category'],
    endpoints: (build)=> ({
        fetchAll: build.query<ICategory[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['Category']
        }),
        fetchById: build.query<ICategory, number>({
            query: (id: number) => ({
                url: "/",
                params: {id: id},
            }),
            providesTags: ['Category']
        }),
        add: build.mutation<ICategory, ICategory>({
            query: (category: ICategory) => ({
                url: "",
                method: "POST",
                body: category,
            }),
            invalidatesTags: ['Category']
        }),
        addWithImage: build.mutation<ICategory, {file: File, category: ICategory}>({
           query: (data) => {
               const body = new FormData();
               body.append("Content-Type", data.file.type);
               body.append("file", data.file);
               return ({
                   url: "/withImage",
                   method: "POST",
                   body,
                   params: {categoryName: data.category.name},
                   formData: true
               });
           },
            invalidatesTags: ['Category']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id},
            }),
            invalidatesTags: ['Category']
        })
    })
});
