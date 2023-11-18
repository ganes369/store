"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

type Close = {
  close?: () => void;
  children?: React.ReactNode;
  totalValue?: number | string;
};
const SideBar = ({ close, children, totalValue }: Close) => {
  return (
    <div className="justify-between shadow-[0_35px_45px_-15px_black] w-full md:w-[500px] bg-black flex flex-col flex-wrap absolute inset-y-0 right-0 text-white">
      <div className="w-full md:px-10 h-[100px] flex justify-between items-center p-2">
        <p className="font-bold">Carrinho</p>
        <Icon
          cursor={"pointer"}
          icon="zondicons:close-outline"
          className="text-4xl text-orange"
          onClick={close}
        />
      </div>
      <div className="flex-1">
        {Number(totalValue) ? (
          children
        ) : (
          <div className="h-full flex flex-direction-col justify-center items-center">
            <p>Sem Itens</p>
          </div>
        )}
      </div>
      <div className="font-bold text-white flex justify-between items-center p-5">
        <h1>Total:</h1>
        <h1>
          R$ <small>{totalValue}</small>
        </h1>
      </div>
      <div className="w-full font-bold text-black bg-orange h-[10%] flex justify-center items-center cursor-pointer">
        Finalizar Compra
      </div>
    </div>
  );
};

export default SideBar;
