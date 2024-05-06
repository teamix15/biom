import {configureStore} from "@reduxjs/toolkit";
import {searchReducer} from "./search/searchSlice";
import {bacteriaReducer} from "./bacteria/biomSlice.ts";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        bacteria: bacteriaReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

