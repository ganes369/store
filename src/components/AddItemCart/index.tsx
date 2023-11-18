"use client";

import { IProductsItens } from "@/@types/CartItens";
import Button from "../Button";
import { useContext } from "react";
import { Cart } from "@/context/context";
type Product = { product: IProductsItens };

const BtnAddCart = ({ product }: Product) => {
  const { cart } = useContext(Cart);

  const handleAddItemCart = () => {
    cart.push(product);

    alert(3);
  };

  return (
    <Button
      fn={handleAddItemCart}
      iconLeft="lets-icons:bag-fill"
      styles="w-full bg-orange rounded-b-lg font-bold text-white flex justify-center"
    >
      Comprar
    </Button>
  );
};

export default BtnAddCart;
