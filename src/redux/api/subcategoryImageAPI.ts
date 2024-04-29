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
        add: build.mutation<void, ISubcategoryImage>({
            query: (subcategoryImage: ISubcategoryImage) =>  ({
                url: "",
                method: "POST",
                body: subcategoryImage
            }),
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