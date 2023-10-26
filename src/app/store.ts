import { configureStore } from '@reduxjs/toolkit';
import orderReducer from "@/features/order/orderSlice"
import paginationReducer from "@/features/order/paginationSlice"
export const store = configureStore({
    reducer: {
        orders: orderReducer,
        pagination: paginationReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>