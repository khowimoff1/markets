import React from "react";
import { FaWarehouse } from "react-icons/fa";

const Cards = () => {
  const data_card = [
    { id: 1, name: "Tashkilotlar", description: "Tashkilotlar soni: 3 ta" },
    { id: 2, name: "kategoriyalar", description: "Kategoriyalar soni: 11 ta" },
    {
      id: 3,
      name: "Olchov birligi",
      description: "Olchov birliklari soni: 1 ta",
    },
    { id: 4, name: "Mahsulotlar", description: "Mahsulotlar soni: 1 ta" },
    { id: 5, name: "Yuk xatlari", description: "Yuk xatlari soni: 0 ta" },
    { id: 6, name: "Kirim qilish", description: "Kirim qilishlar soni: 0 ta" },
  ];
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 mt-10 md:mx-10 mx-5">
      {data_card.map((item) => (
        <div key={item.id} className="bg-white rounded md:gap-4 gap-2 flex items-center md:py-5 py-3 px-4">
          <div className="md:p-3 p-2 rounded-full bg-blue-100">
            <FaWarehouse className="text-blue-600" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-400 font-bold md:text-lg text-base">{item.name}</h2>
            <p className="md:text-xs text-[10px] text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
