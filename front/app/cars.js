"use client";

import React, { useEffect, useState, useRef } from "react";
import Model from "./const";

export default function Cars() {
    let model_name = document.getElementById("model_name")
    let model_cost = document.getElementById("model_cost")
    let text_car = document.getElementById("text_car")
    let imgg = document.getElementById("images_car")
    let mod = useRef(1)

    let CAR = useRef("ModelS")
    let COST = useRef("122000")
    let FORMAT = useRef("Спорт")
    let COLOR = useRef("Желтый")



    function addCart(){
        let cols = document.getElementById("create_col")
        cols.insertAdjacentHTML('beforebegin',`
        <tr id="" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${CAR.current}
        </th>
        <td class="px-6 py-4">
            ${COLOR.current}
        </td>
        <td class="px-6 py-4">
        ${FORMAT.current}
        </td>
        <td class="px-6 py-4">
            ${COST.current}
        </td>
    </tr>
        `)

    }
    function checkCar(e){

        mod.current = e.target.id
        let img_model = Model.find(function (item) {
            return item.id === mod.current;

          });
        imgg.src = img_model.img
        model_name.innerHTML = img_model.name
        CAR.current = img_model.name
        COST.current = img_model.cost
        FORMAT.current = img_model.format
        COLOR.current = img_model.color
        model_cost.innerHTML = img_model.cost
        text_car.innerHTML = img_model.about
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
        <div className="w-70 h-100  flex items-center justify-center">
            <img id="images_car" className="h-1/2 w-1/2" src="./img/bmw.png"></img>
        </div>
        <div id="text_car">
        Ауди – это немецкий автомобильный бренд, который предлагает роскошные и элегантные автомобили, которые сочетают в себе высую технологичность, безопасность, комфорт и производительность.
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-20 p-10">
        <a
        onClick={addCart}
          href="#"
          className="rounded-2xl text-center text-white tracking-wider font-medium uppercase flex justify-center items-center bg-opacity-80 bg-[#181a1f] text-[12px] w-[256px] h-[40px]"
        >
          Добавить в корзину
        </a>

      </div>
      <div>
      <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Машина
                </th>
                <th scope="col" class="px-6 py-3">
                    Цвет
                </th>
                <th scope="col" class="px-6 py-3">
                    Формат
                </th>
                <th scope="col" class="px-6 py-3">
                    Цена
                </th>
            </tr>
        </thead>
        <tbody id="create_col">



        </tbody>
    </table>
</div>
      </div>
      <div className="h-80"></div>
    </div>
  );
}
