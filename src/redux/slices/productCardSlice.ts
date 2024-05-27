import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IProductCard from "../../interfaces/IProductCard";

export const productCardSlice = createSlice({
    name: "productCard",
    initialState: {} as IProductCard,
    reducers: {
        setGiftCard(state: IProductCard, payload: PayloadAction<IProductCard>) {
            state.price = payload.payload.price;
            state.fromWho = payload.payload.fromWho;
            state.email = payload.payload.email;
            state.message = payload.payload.message;
            state.productCardDesignId = payload.payload.productCardDesignId;
            return state;
        },
        setGiftCardFull(state: IProductCard, payload: PayloadAction<IProductCard>) {
            state.price = payload.payload.price;
            state.fromWho = payload.payload.fromWho;
            state.email = payload.payload.email;
            state.message = payload.payload.message;
            state.productCardDesignId = payload.payload.productCardDesignId;
            state.code = payload.payload.code;
            state.id = payload.payload.id;
            state.createdAt = payload.payload.createdAt;
            return state;
        },
        setPrice(state: IProductCard, payload: PayloadAction<number>) {
            state.price = payload.payload;
            return state;
        },
        setFromWho(state: IProductCard, payload: PayloadAction<string>) {
            state.fromWho = payload.payload;
            return state;
        },
        setEmail(state: IProductCard, payload: PayloadAction<string>) {
            state.email = payload.payload;
            return state;
        },
        setMessage(state: IProductCard, payload: PayloadAction<string>) {
            state.message = payload.payload;
            return state;
        },
        setProductCardDesignId(state: IProductCard, payload: PayloadAction<number>) {
            state.productCardDesignId = payload.payload;
            return state;
        }
    }
});

export default productCardSlice.reducer;