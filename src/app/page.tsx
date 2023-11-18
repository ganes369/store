"use client";

import Button from "@/components/Button";
import { Cart } from "@/context/context";
import React, { useContext, useState } from "react";
export default function Home() {
  const { addToCart, cart } = useContext(Cart);
  const [aa, setAa] = useState(cart);
  const handleAddItemCart = (a: any) => {
    addToCart({ ...a, qtde: 1 });
    setAa(cart);
  };

  const p = {
    products: [
      {
        id: 1,
        name: "Iphone 11 128 GB",
        brand: "Apple",
        description:
          "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
        price: "5000.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        id: 2,
        name: "AirPods",
        brand: "Apple",
        description:
          "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
        price: "1200.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        id: 3,
        name: "Macbook Air",
        brand: "Apple",
        description:
          "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
        price: "8200.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        id: 4,
        name: "iPhone 12 64 GB",
        brand: "Apple",
        description:
          "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
        price: "6500.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        id: 5,
        name: "Apple Watch Series 7",
        brand: "Apple",
        description:
          "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
        price: "3200.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        id: 6,
        name: "iPad",
        brand: "Apple",
        description:
          "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
        price: "4200.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        id: 7,
        name: "Headset Cloud Revolver",
        brand: "HyperX",
        description:
          "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
        price: "1000.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        id: 8,
        name: "Headset Cloud Stinger",
        brand: "HyperX",
        description:
          "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
        price: "600.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
    ],
    count: 8,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] md:w-[80%] m-auto">
      {p.products.map((item, index) => (
        <div
          key={index}
          className="h-[260px] bg-white rounded-md shadow-lg flex flex-col justify-between"
        >
          <div className="w-full p-1 flex-2">
            <center>
              <img
                className="w-[25%]"
                src={item.photo}
                alt={item.description}
              ></img>
            </center>
          </div>
          <div className="flex-1 p-2">
            <div className="w-full flex flex-wrap justify-around items-center ">
              {item.name}
              <div className="w-[25%] sm:w-[40%] h-[35px] bg-black rounded-md text-white text-xs flex flex-wrap items-center p-1 justify-center">
                <h1>
                  R$ <small>{item.price}</small>
                </h1>
              </div>
            </div>
            <p className="text-xs pt-5">{item.description}</p>
          </div>
          <Button
            fn={() => handleAddItemCart(item)}
            iconLeft="lets-icons:bag-fill"
            styles="w-full bg-orange rounded-b-lg font-bold text-white flex justify-center"
          >
            Comprar
          </Button>
        </div>
      ))}
    </div>
  );
}
