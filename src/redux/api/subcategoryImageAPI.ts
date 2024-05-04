import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ISubcategoryImage from "../../interfaces/ISubcategoryImage";
import ISubcategory from "../../interfaces/ISubcategory";

export const subcategoryImageAPI = createApi({
    reducerPath: "subcategoryImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/subcategoryImage"}),
    tagTypes: ['SubcategoryImage'],
    endpoints: (build) =>( {
        fetchAll: build.query<ISubcategoryImage[], void>({
            query: ()=>({
                url: "/all"
            }),
            providesTags: ['SubcategoryImage']
        }),
        fetchById: build.query<ISubcategoryImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['SubcategoryImage']
        }),
        add: build.mutation<ISubcategoryImage, { file: File, subcategoryId: number }>({
            query: (subcategoryImage) =>  {
                const body = new FormData();
                body.append("Content-Type", subcategoryImage.file.type);
                body.append("file", subcategoryImage.file);

                return {
                    url: "",
                    method: "POST",
                    body,
                    params: {subcategoryId: subcategoryImage.subcategoryId},
                    formData: true
                }
            },
            invalidatesTags: ['SubcategoryImage']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['SubcategoryImage']
        })
    })
});