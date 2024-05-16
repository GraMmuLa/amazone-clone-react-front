import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import ICategoryImage from "../../interfaces/ICategoryImage";
import ICategory from "../../interfaces/ICategory";

export const categoryImageAPI = createApi({
    reducerPath: "categoryImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/categoryImage"}),
    tagTypes: ['CategoryImage'],
    endpoints: (build)=> ({
        fetchAll: build.query<ICategoryImage[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['CategoryImage']
        }),
        fetchById: build.query<ICategoryImage, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['CategoryImage']
        }),
        add: build.mutation<ICategoryImage, ICategoryImage>({
            query: (categoryImage) =>  {
                const body = new FormData();
                body.append("Content-Type", categoryImage.data.type);
                body.append("file", categoryImage.data);

                return {
                    url: "",
                    method: "POST",
                    body,
                    params: {categoryId: categoryImage.categoryId},
                    formData: true
                }
            },
            invalidatesTags: ['CategoryImage']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['CategoryImage']
        })
    })
});
