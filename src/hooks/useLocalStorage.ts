import { CartItemType, CartType, ProductType } from "@/types";
import { useEffect, useState } from "react";

export function useLocalStorageCart() {
  const [cart, setCart] = useState<CartType | null>(null);

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    setCart(cart);
  }, []);

  function addToCart(product: ProductType) {
    const existingCart = localStorage.getItem("cart");
    let cart = existingCart ? JSON.parse(existingCart) : ([] as CartType);

    const existingItem = cart.find(
      (cartItem: CartItemType) => cartItem.id === product.id,
    );

    if (existingItem) {
      cart = cart
        .map((cartItem: CartItemType) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem: CartItemType) => cartItem.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setCart(cart);
  }

  function decrementQuantity(id: number) {
    const existingCart = localStorage.getItem("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cart.find(
      (cartItem: CartItemType) => cartItem.id === id,
    );

    if (existingItem) {
      cart = cart
        .map((cartItem: CartItemType) => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem: CartItemType) => cartItem.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setCart(cart);
  }

  return { cart, addToCart, decrementQuantity };
}
