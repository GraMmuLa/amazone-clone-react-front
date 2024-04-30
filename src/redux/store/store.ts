import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {categoryReducer} from "../slices/categorySlice";
import {categoryAPI} from "../api/categoryAPI";
import {categoryImageAPI} from "../api/categoryImageAPI";
import {subcategoryAPI} from "../api/subcategoryAPI";
import {subcategoryImageAPI} from "../api/subcategoryImageAPI";
import {productAPI} from "../api/productAPI";
import {discountAPI} from "../api/discountAPI";
import {productColorAPI} from "../api/productColorAPI";
import {discountTypeAPI} from "../api/discountTypeAPI";
import {productColorImageAPI} from "../api/productColorImageAPI";
import {productTypeAPI} from "../api/productTypeAPI";
import {productReviewAPI} from "../api/productReviewAPI";
import {productSizeAPI} from "../api/productSizeAPI";
import {productDetailValueAPI} from "../api/productDetailValueAPI";
import {productDetailKeyAPI} from "../api/productDetailKeyAPI";
import {colorAPI} from "../api/colorAPI";

const rootReducer = combineReducers({
    categories: categoryReducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [categoryImageAPI.reducerPath]: categoryImageAPI.reducer,
    [subcategoryAPI.reducerPath]: subcategoryAPI.reducer,
    [subcategoryImageAPI.reducerPath]: subcategoryImageAPI.reducer,
    [productTypeAPI.reducerPath]: productTypeAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [productColorAPI.reducerPath]: productColorAPI.reducer,
    [productColorImageAPI.reducerPath]: productColorImageAPI.reducer,
    [discountTypeAPI.reducerPath]: discountTypeAPI.reducer,
    [discountAPI.reducerPath]: discountAPI.reducer,
    [productReviewAPI.reducerPath]: productReviewAPI.reducer,
    [productSizeAPI.reducerPath]: productSizeAPI.reducer,
    [productDetailKeyAPI.reducerPath]: productDetailKeyAPI.reducer,
    [productDetailValueAPI.reducerPath]: productDetailValueAPI.reducer,
    [colorAPI.reducerPath]: colorAPI.reducer
});


const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(categoryAPI.middleware)
                .concat(categoryImageAPI.middleware)
                .concat(subcategoryAPI.middleware)
                .concat(subcategoryImageAPI.middleware)
                .concat(productTypeAPI.middleware)
                .concat(productAPI.middleware)
                .concat(productColorAPI.middleware)
                .concat(productColorImageAPI.middleware)
                .concat(discountTypeAPI.middleware)
                .concat(discountAPI.middleware)
                .concat(productReviewAPI.middleware)
                .concat(productSizeAPI.middleware)
                .concat(productDetailKeyAPI.middleware)
                .concat(productDetailValueAPI.middleware)
                .concat(colorAPI.middleware)
    });
}

export default setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];