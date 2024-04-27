import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import ICategoryImage from "../../interfaces/ICategoryImage";

export const categoryImageAPI = createApi({
    reducerPath: "categoryImageAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/categoryImage"}),
    endpoints: (build)=> ({
        fetchAll: build.query<ICategoryImage[], void>({
            query: () => ({
                url: "/all"
            })
        }),
        fetchById: build.query<ICategoryImage, number>({
            query: (id: number) => {
                return {
                    url: "",
                    params: {id: id}
                }
            }
        })
    })
});
