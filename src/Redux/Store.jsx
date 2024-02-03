import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/CartSlice.jsx";

const Store = configureStore({
    reducer: {
        allCart: CartReducer,
    }
});

export default Store;