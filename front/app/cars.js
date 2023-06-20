"use client";

import React, { useEffect, useState, useRef } from "react";
import Model from "./const";

export default function Cars() {
    let mod = useRef(1)
    useEffect(() => {
        
    },[])
    function checkCar(e){
        let model_name = document.getElementById("model_name")
        let model_cost = document.getElementById("model_cost")
        let imgg = document.getElementById("images_car")
        mod.current = e.target.id
        let img_model = Model.find(function (item) {
            return item.id === mod.current;
          });
        imgg.src = img_model.img
        model_name.innerHTML = img_model.name
        model_cost.innerHTML = img_model.cost
        console.log(img_model)
    }
  const [Models, setModels] = useState();
  return (
    <div className="h-auto">
      <header className="grid grid-cols-1 sm:grid-cols-2 p-10">
        <div className=" container  items-center">
          <a
            href="#"
            className=" text-xl font-bold pl-4"
          >
            NetAvto
          </a>
        </div>
        <div className="flex">
        {Model.map((models) => (
          <div
            className=" flex items-center"
            key={models.id}  
          >
            <li id={models.id} onClick={checkCar} className="list-none">
              <a
              id={models.id}
                href="#"
                className="rounded-xl font-medium tracking-wider transition duration-500 flex justify-center items-center hover:bg-[#7396ad] hover:bg-opacity-40 text-[14px] py-[4px] px-[8px] h-[32px]"
              >
                <span id={models.id}  className="m-[8px]">{models.name}</span>
              </a>
            </li>
          </div>
        ))}
        </div>
      </header>
      <div>
        <div className="text-center">
          <h1 id="model_name" className="font-medium tracking-wider leading-[1.15] text-[#393c41] text-[42px] py-[4px]">
            ModelS
          </h1>
          <div className="flex justify-center gap-1">
          <h1 id="model_cost" className="font-medium ">
          122000
          </h1>
          <div>рублей</div>
          </div>
          
        </div>
        <div className="w-full h-100  flex items-center justify-center">
            <img id="images_car" className="h-1/2 w-1/2" src="./img/bmw.png"></img>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-20 p-10">
        <a
          href="#"
          className="rounded-2xl text-center text-white tracking-wider font-medium uppercase flex justify-center items-center bg-opacity-80 bg-[#181a1f] text-[12px] w-[256px] h-[40px]"
        >
          Custom Order
        </a>
        <a
          href="#"
          className="rounded-2xl text-center tracking-wider font-medium uppercase flex justify-center items-center bg-slate-600 bg-opacity-[65%] text-[12px] text-[#393c41] w-[256px] h-[40px]"
        >
          Existing Inventory
        </a>
      </div>
    </div>
  );
}
