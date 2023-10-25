import { combineReducers } from 'redux';
import orderReducer from '@/features/order/orderSlice';

const rootReducer = combineReducers({
  orders: orderReducer,
  // Add other reducers here if you have them
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
