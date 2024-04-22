import {createSlice, Slice} from "@reduxjs/toolkit";
import ICategory from "../../interfaces/ICategory";
import ICategoryState from "../../interfaces/ICategoryState";

const categorySlice : Slice<ICategoryState> = createSlice({
    name: "categories",
    initialState: {
        categories: new Array<ICategory>()
    },
    reducers: {

    },
});

export default categorySlice;
export const categoryReducer = categorySlice.reducer;