"use client";

import React, { useEffect, useState, useRef } from "react";
import Model from "./const";

export default function Cars() {
    let mod = useRef(1)

    let CAR = useRef("ModelS")
    let COST = useRef("122000")
    let FORMAT = useRef("Спорт")
    let COLOR = useRef("Желтый")
    let ID = useRef(1)




    const [YEAR, setYEAR] = useState("2013")
    const [PERSONS, setPERSONS] = useState("5")
    const [GAIN_LITERS, setGAIN_LITERS] = useState("350")
    const [GAIN_POWER, setGAIN_POWER] = useState("300")
    const [SCORE, setSCORE] = useState("6.1")
    const [MAX_SCORE, setMAX_SCORE] = useState("250")
    const [FUEL_LOOSING, setFUEL_LOOSING] = useState("5,5")

    const [AR, setAR] = useState([])
    let ar = []
    function addCart(){
      setAR(prevAR => [...prevAR, {id: ID.current, name: CAR.current, color: COLOR.current, format: FORMAT.current, cost: COST.current}]);

      console.log(AR)   
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


    useEffect(() => {

      let model_name = document.getElementById("model_name")
      let model_cost = document.getElementById("model_cost")
      let text_car = document.getElementById("text_car")
      let imgg = document.getElementById("images_car")
      let img_model = Model.find(function (item) {
        return item.id == "1";
      });
      imgg.src = img_model.img
      model_name.innerHTML = img_model.name
      CAR.current = img_model.name
      COST.current = img_model.cost
      FORMAT.current = img_model.format
      COLOR.current = img_model.color
      setYEAR(img_model.year)
      setPERSONS(img_model.persons)
      setGAIN_LITERS(img_model.gain_liters)
      setGAIN_POWER(img_model.gain_power)
      setSCORE(img_model.score)
      setMAX_SCORE(img_model.max_score)
      setFUEL_LOOSING(img_model.fuel_loosing)
      model_cost.innerHTML = img_model.cost
      text_car.innerHTML = img_model.about
    }, [])
    
    function arMap(){
      {ar.map(model => {
        <tr key={model.id} id="" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {model.id}
        </th>
        <td class="px-6 py-4">
        {model.cost}
        </td>
        <td class="px-6 py-4">
        {model.name}
        </td>
        <td class="px-6 py-4">
        {model.name}
        </td>
    </tr>
})}

    }
    function checkCar(e){
      let model_name = document.getElementById("model_name")
      let model_cost = document.getElementById("model_cost")
      let text_car = document.getElementById("text_car")
      let imgg = document.getElementById("images_car")

        mod.current = e.target.id
        let img_model = Model.find(function (item) {
            return item.id == mod.current;
          });
        imgg.src = img_model.img
        model_name.innerHTML = img_model.name
        CAR.current = img_model.name
        COST.current = img_model.cost
        FORMAT.current = img_model.format
        COLOR.current = img_model.color
        ID.current = img_model.id
        setYEAR(img_model.year)
        setPERSONS(img_model.persons)
        setGAIN_LITERS(img_model.gain_liters)
        setGAIN_POWER(img_model.gain_power)
        setSCORE(img_model.score)
        setMAX_SCORE(img_model.max_score)
        setFUEL_LOOSING(img_model.fuel_loosing)
        model_cost.innerHTML = img_model.cost
        text_car.innerHTML = img_model.about

    }
    function modalClose(){
      let modal = document.getElementById("defaultModal")
      modal.style.zIndex = "-10"
    }
    function modalOpen(){
      let modal = document.getElementById("defaultModal")
      modal.style.zIndex = "100"
    }
  const [Models, setModels] = useState();
  return (
    <div className="h-auto z-10 container mx-auto">
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
        <div className="text-xl font-bold p-2">Об автомобиле</div>
        <div className="flex gap-1 border-b-2 p-2">
          Год выпуска - <div className="font-bold">{YEAR}</div>
        </div>
        <div className=" flex gap-1 border-b-2 p-2">
        Количество мест - <div className="font-bold">{PERSONS}</div>
        </div>
        <div className=" flex gap-1 border-b-2 p-2">
        Объем багажника (литры) - <div className="font-bold">{GAIN_LITERS} </div>
        </div>
        <div className=" flex gap-1 border-b-2 p-2">
        Мощность двигателя (Л/С) - <div className="font-bold">{GAIN_POWER}</div>
        </div>
        <div className=" flex gap-1 border-b-2 p-2">
        Разгон до 100 км/ч - <div className="font-bold">{SCORE}</div>
        </div>
        <div className=" flex gap-1 border-b-2 p-2">
        Максимальная скорость - <div className="font-bold">{MAX_SCORE}</div>
        </div>
        <div className=" flex gap-1 border-b-2 p-2">
        Расход топлива на 100 км - <div className="font-bold">{FUEL_LOOSING}</div>
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
                Тип кузова:
                </th>
                <th scope="col" class="px-6 py-3">
                    Цена
                </th>
            </tr>
        </thead>
        <tbody id="create_col">

        </tbody>
    </table>
    <a
        onClick={ () => {
          modalOpen();
          arMap()
        }}
          href="#"
          className="text-center text-white tracking-wider font-medium uppercase flex justify-center items-center bg-opacity-80 bg-[#181a1f] text-[12px] w-[256px] h-[40px]"
        >
          купить
        </a>
</div>
      </div>
      <div id="defaultModal" tabindex="-1" aria-hidden="false" class=" container mx-auto  flex justify-center items-center fixed -z-50  w-full   md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">

        <div class=" bg-white rounded-lg shadow ">

            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 ">
                    Подтверждение о покупке
                </h3>
                <button onClick={modalClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>

            <div class="p-6 space-y-6">
              <div>Вы точно хотите купить товар?</div>
            <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Машина
                </th>
                <th scope="col" class="px-6 py-3">
                    Цвет
                </th>
                <th scope="col" class="px-6 py-3">
                Тип кузова:
                </th>
                <th scope="col" class="px-6 py-3">
                    Цена
                </th>
            </tr>
        </thead>
        
        <tbody id="create_col">
 

        {AR.map((models) => (
                  <tr id="" class="bg-white border-b ">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {models.name}
                  </th>
                  <td class="px-6 py-4">
                      {models.color}
                  </td>
                  <td class="px-6 py-4">
                  {models.format}
                  </td>
                  <td class="px-6 py-4">
                      {models.cost}
                  </td>
              </tr>
        ))}

        </tbody>
    </table>
            </div>
  
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={modalClose} data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Принять</button>
                <button onClick={modalClose} data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Отмена</button>
            </div>
        </div>
    </div>
</div>
      <div className="h-80"></div>
    </div>
  );
}
