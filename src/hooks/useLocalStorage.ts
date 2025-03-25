import { CartItemType, CartType, ProductType } from "@/types";
import { useEffect, useState } from "react";

export function useLocalStorage<T>() {
  const [localStorageData, setLocalStorageData] = useState<T | null>(null);
  function getItem(key: string) {
    useEffect(() => {
      const data = localStorage.getItem(key);
      data ? setLocalStorageData(JSON.parse(data)) : setLocalStorageData(null);
    }, []);
    return localStorageData;
  }

  function setItem(key: string, value: CartItemType) {
    const existingCart = localStorage.getItem(key);
    let cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cart.find((cartItem: any) => cartItem.id === value.id);

    if (existingItem) {
      cart = cart
        .map((cartItem: any) => {
          if (cartItem.id === value.id) {
            return { ...cartItem, quantity: value.quantity };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem: any) => cartItem.quantity > 0);

      localStorage.setItem(key, JSON.stringify(cart));
    } else {
      cart.push(value);
      localStorage.setItem(key, JSON.stringify(cart));
    }
  }

  return { getItem, setItem };
}

export function useLocalStorageCart() {
  const [cart, setCart] = useState<CartType | null>(null);

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    setCart(cart);
  }, []);

  function addToCart(product: ProductType) {
    const existingCart = localStorage.getItem("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cart.find(
      (cartItem: any) => cartItem.id === product.id,
    );

    if (existingItem) {
      cart = cart
        .map((cartItem: any) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem: any) => cartItem.quantity > 0);

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

    const existingItem = cart.find((cartItem: any) => cartItem.id === id);

    if (existingItem) {
      cart = cart
        .map((cartItem: any) => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem: any) => cartItem.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setCart(cart);
  }

  return { cart, addToCart, decrementQuantity };
}
