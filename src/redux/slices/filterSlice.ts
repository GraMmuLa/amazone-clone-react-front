import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IFilterState from "../../interfaces/IFilterState";


export const filterSlice = createSlice({
    name: "filter",
    initialState: {} as IFilterState,
    reducers: {
        setFilter(state: IFilterState, payload: PayloadAction<IFilterState>) {
            return payload.payload;
        },
        addProductTypeId(state: IFilterState, payload: PayloadAction<number>) {
            if(!state.productTypeIds)
                state.productTypeIds = [payload.payload];
            else
                state.productTypeIds.push(payload.payload);
            return state;
        },
        removeProductTypeId(state: IFilterState, payload: PayloadAction<number>) {
            if(state.productTypeIds && state.productTypeIds.includes(payload.payload))
                state.productTypeIds = state.productTypeIds.filter(x => x !== payload.payload);

            return state;
        },
        addAllProductTypeIds(state: IFilterState, payload: PayloadAction<number[]>) {
            if(!state.productTypeIds)
                state.productTypeIds = [...payload.payload];
            else
                state.productTypeIds.push(...payload.payload);
            return state;
        },
        removeAllProductTypeId(state: IFilterState, payload: PayloadAction<number[]>) {
            if(state.productTypeIds)
                state.productTypeIds = state.productTypeIds.filter(x => !payload.payload.includes(x));

            return state;
        },
        setSortBy(state: IFilterState, payload: PayloadAction<string>) {
            state.sortBy = payload.payload;
            return state;
        },
        setPriceFromPriceTo(state: IFilterState, payload: PayloadAction<{priceFrom: number, priceTo: number}>) {
            state.priceFrom = payload.payload.priceFrom;
            state.priceTo = payload.payload.priceTo;
            return state;
        },
        setDiscountPercentFrom(state: IFilterState, payload: PayloadAction<number>) {
            state.discountPercentFrom = payload.payload;
        }
    }
});

export default filterSlice.reducer;