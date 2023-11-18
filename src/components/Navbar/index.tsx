"use client";
import React, { ReactNode, useContext, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";
import SideBar from "../SideBar";
import { Cart } from "@/context/context";
import QuantityRange from "../Range";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const { cart, totalValue, removeFromCart } = useContext(Cart);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  let TOTAL_ITEMS: number | string = cart.length;

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="px-10 bg-orange h-[100px] flex justify-between items-center">
      <h1 className="font-bold text-xl">
        STORY <small className="font-normal text-white">Sistemas</small>
      </h1>
      {children}
      <Button fn={toggleSidebar} iconLeft="typcn:shopping-cart">
        {TOTAL_ITEMS ? TOTAL_ITEMS : 0}
      </Button>
      <div
        className={`${
          sidebarVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out fixed top-0 right-0 h-full w-64 bg-white z-50`}
      >
        <SideBar close={toggleSidebar} totalValue={totalValue.toFixed(2)}>
          <div className="h-[60vh] overflow-y-auto text-black">
            <ul className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              {cart
                ? cart.map((item, index) => (
                    <li
                      key={index}
                      className="py-2 sm:py-4 mb-4 bg-white rounded-md sm:h-[40px] md:h-[40px] lg:h-[100px] xl:h-[100px]"
                    >
                      <div className="flex items-center justify-around flex-wrap">
                        <img
                          className="w-[15%]"
                          src={item.photo}
                          alt={item.description}
                        />
                        <div className="flex flex-col items-center">
                          <p className="w-full sm:w-40 md:w-70 lg:w-100 xl:w-100 text-center">
                            {item.name}
                          </p>
                          <QuantityRange products={item} />
                        </div>
                        <h1 className="font-bold">
                          R$ <small>{item.price}</small>
                        </h1>
                        <div className=" h-full w-[10px] relative">
                          <Icon
                            cursor={"pointer"}
                            icon="zondicons:close-outline"
                            className="text-1xl text-orange "
                            onClick={() => removeFromCart(item.id)}
                          />
                        </div>
                      </div>
                    </li>
                  ))
                : "l"}
            </ul>
          </div>
        </SideBar>
      </div>
    </div>
  );
};

export default NavBar;
