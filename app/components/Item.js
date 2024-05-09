import React from "react";
import Button from "./Button";
import { MoveRight } from "lucide-react";

function Item({ item, link, tableName }) {
  return (
    <div className="p-4 bg-blue-500 border border-gray-200 rounded-2xl  flex flex-col ">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-white text-center italic">
        {item.title}
      </h1>
      <hr />
      <div className="mb-6 mt-6 mx-5 font-normal text-white flex justify-between ">
        <span className="font-bold text-xl">Amount: </span>
        <span className="text-2xl italic">{item.amount}</span>
      </div>

      <div className="mb-6  mx-5 font-normal text-white flex justify-between ">
        <span className=" font-bold text-xl">Source: </span>
        <span className="text-2xl italic">{item.source.toLowerCase()}</span>
      </div>
      <div className="flex justify-center">
        <Button
          href={`${link}/${item.slug}`}
          description={`Show details and manage ${tableName}`}
          icon={<MoveRight />}
          style={" rounded-2xl bg-white px-8 py-3 text-blue-500"}
        />
      </div>
    </div>
  );
}

export default Item;
