"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { IProductsItens } from "@/@types/CartItens";

interface ProductsProps {
  cart: IProductsItens[];
  addToCart: (item: IProductsItens) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  removeItem: (item: IProductsItens) => void;
  totalValue: number;
}

const defaultState: ProductsProps = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  removeItem: () => {},
  totalValue: 0,
};

export const Cart = createContext<ProductsProps>(defaultState);

export const useCart = () => {
  return useContext(Cart);
};

export const ProductsProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [cart, setCart] = useState<IProductsItens[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  const addToCart = (item: IProductsItens) => {
    const index = cart.findIndex((elem) => elem.id === item.id);
    const aux = cart;

    if (index !== -1) {
      cart[index] = { ...cart[index], qtde: ++cart[index].qtde };
      setCart(aux);
    } else {
      aux.push(item);
      setCart(aux);
    }

    if (!cart.length) {
      setTotalValue(Number(item.price));
      return;
    }
    let CART_ITENS_TOTAL = cart?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.qtde * Number(currentValue.price);
    }, 0);
    setTotalValue(CART_ITENS_TOTAL);
  };

  const removeItem = (item: IProductsItens) => {
    const index = cart.findIndex((elem) => elem.id === item.id);
    if (cart[index].qtde <= 1) return;
    cart[index] = { ...cart[index], qtde: --cart[index].qtde };
    const aux = cart;
    setCart(aux);
    console.log(aux);
    let CART_ITENS_TOTAL = cart?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.qtde * Number(currentValue.price);
    }, 0);
    setTotalValue(CART_ITENS_TOTAL);
  };

  const removeFromCart = (itemId: number) => {
    const index = cart.findIndex((elem) => elem.id === itemId);

    const novoArray = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(novoArray);
    let CART_ITENS_TOTAL = novoArray?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.qtde * Number(currentValue.price);
    }, 0);
    setTotalValue(CART_ITENS_TOTAL);
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue: ProductsProps = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    removeItem,
    totalValue,
  };

  return <Cart.Provider value={contextValue}>{children}</Cart.Provider>;
};
