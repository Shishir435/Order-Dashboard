import { configureStore } from '@reduxjs/toolkit';
import storeReducer from "@/features/order/orderSlice"
export const store=configureStore({
    reducer: storeReducer
})