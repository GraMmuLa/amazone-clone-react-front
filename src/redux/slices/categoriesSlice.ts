import {createSlice, Slice} from "@reduxjs/toolkit";
import ICategory from "../../interfaces/ICategory";
import ICategoryState from "../../interfaces/ICategoryState";

const categoriesSlice : Slice<ICategoryState> = createSlice({
    name: "categories",
    initialState: {
        categories: new Array<ICategory>()
    },
    reducers: {

    }
});

export default categoriesSlice;
export const categoriesReducer = categoriesSlice.reducer;