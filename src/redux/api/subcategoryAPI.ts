import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategory from "../../interfaces/ISubcategory";
import IProductType from "../../interfaces/IProductType";

export const subcategoryAPI = createApi({
    reducerPath: "subcategoryAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/subcategory"}),
    tagTypes: ['Subcategory'],
    endpoints: (build) => ({
        fetchAll: build.query<ISubcategory[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['Subcategory']
        }),
        fetchById: build.query<ISubcategory, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['Subcategory']
        }),
        add: build.mutation<ISubcategory, ISubcategory>({
            query: (subcategory: ISubcategory) =>  ({
                url: "",
                method: "POST",
                body: subcategory
            }),
            invalidatesTags: ['Subcategory']
        }),
        addWithImage: build.mutation<ISubcategory, {file: File, subcategory: ISubcategory}>({
            query: (data) => {
                const body = new FormData();
                body.append("Content-Type", data.file.type);
                body.append("file", data.file);

                return ({
                    url: "/withImage",
                    method: "POST",
                    body,
                    params: {name: data.subcategory.name, categoryId: data.subcategory.categoryId}
                });
            },
            invalidatesTags: ['Subcategory']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['Subcategory']
        })
    })
})