import { createSlice } from "@reduxjs/toolkit";
import { productsCart } from "../../Data";
import { toast } from "react-toastify";
import { dollarToNumber } from "../../tools/convert";

const initialState = {
  cart: [],
  items: productsCart,
  // quantity: 0,
  totalQuantity: 0,
  totalPrice: 0,
  like: false,
};

// eslint-disable-next-line react-refresh/only-export-components
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find] = {
          ...state.cart[find],
          cartQuantity: state.cart[find].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "top-left",
        });
      } else {
        // state.cart.push(action.payload);
        let tempProduct = { ...action.payload, quantity: 1 };
        state.cart.push(tempProduct);
        toast.success("Product added to cart", {
          position: "top-left",
        });
      }
    },

    calculateCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = dollarToNumber(price) * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.info("Product removed from cart", {
        position: "top-left",
      });
    },

    likeItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, like: !item.like };
        }
        return item;
      });
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      calculateCartTotal(state);
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart
        .map((item) => {
          if (item.quantity > 1) {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity - 1 };
            }
          } else {
            if (item.id === action.payload) {
              return undefined;
            }
          }
          return item;
        })
        .filter((item) => item);
      state;
    },
  },
});

export const {
  addToCart,
  calculateCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  likeItem
} = CartSlice.actions;

export default CartSlice.reducer;
