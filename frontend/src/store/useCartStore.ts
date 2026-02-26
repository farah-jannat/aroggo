import { create } from "zustand";

export interface Product {
  id: number | string;
  title: string;
  image: string;
  oldPrice: number;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
  delivery: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  // Simplified getters
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  // 1. Easy way to count total items
  getTotalItems: () => {
    let total = 0;
    get().cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  },

  // 2. Easy way to calculate total price
  getTotalPrice: () => {
    let total = 0;
    get().cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  },

  addToCart: (product) => {
    const cart = get().cart;
    const findItem = cart.find((item) => item.id === product.id);

    if (findItem) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
      console.log("add to cart check ", cart)
    }
  },
}));

export default useCartStore;
