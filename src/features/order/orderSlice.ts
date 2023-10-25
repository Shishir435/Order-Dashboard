import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

import ProductData from '@/lib/DummyData';

interface Order {
    id: string;
    customer_name: string;
    customer_email: string;
    product: string;
    quantity: number;
}

interface OrderState {
    orders: Order[];
}

const initialState: OrderState = {
    orders: ProductData,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            const newOrder: Order = {
                id: nanoid(),
                customer_name: action.payload.customer_name,
                customer_email: action.payload.customer_email,
                product: action.payload.product,
                quantity: action.payload.quantity,
            };
            state.orders.push(newOrder);
        },
        removeOrder: (state, action: PayloadAction<string>) => {
            state.orders = state.orders.filter((order) => order.id !== action.payload);
        },
        editOrder: (state, action: PayloadAction<Order>) => {
            const updatedOrder = action.payload;
            const orderIndex = state.orders.findIndex((order) => order.id === updatedOrder.id);
            if (orderIndex !== -1) {
                state.orders[orderIndex] = { ...state.orders[orderIndex], ...updatedOrder };
            }
        }
    },
});

export const { addOrder, removeOrder, editOrder } = orderSlice.actions;

export default orderSlice.reducer;
