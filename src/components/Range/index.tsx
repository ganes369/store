import { IProductsItens } from "@/@types/CartItens";
import { Cart } from "@/context/context";
import React, { useContext } from "react";

interface Props {
  products: IProductsItens;
}
const QuantityRange = ({ products }: Props) => {
  const { addToCart, removeItem } = useContext(Cart);

  const handleIncrease = () => {
    addToCart(products);
  };

  const handleDecrease = () => {
    removeItem(products);
  };

  return (
    <div className="flex items-center space-x-2 rounded border">
      <button className="px-1 text-black " onClick={handleDecrease}>
        -
      </button>
      <span className="text-xs font-bold border-x-4 px-2">{products.qtde}</span>
      <button className="px-1  text-black " onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityRange;
