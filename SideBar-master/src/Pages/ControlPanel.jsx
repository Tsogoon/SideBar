import React from "react";

const ControlPanel = () => {
  return (
    <div className="h-screen">
      <div className="h-36 border-b-2    border-blue-700 w-[100%] flex flex-row">
        <div className="basis-1/4 m-3 border-2 border-green-500 bg-white">
          <a href="#">
            <div className="flex justify-between items-center h-full">
              <div className="ml-4">
                <span className="text-3xl text-green-500">26980</span>
                <p>Нийт Борлуулалт</p>
              </div>
              <div className="text-3xl w-[35%] m-1 bg-green-500 h-24 flex justify-center items-center text-white">
                <i class="bi bi-cart3"></i>
              </div>
            </div>
          </a>
        </div>
        <div className="basis-1/4 m-3 border-2 border-blue-500 bg-white">
          <a href="#">
            <div className="flex justify-between items-center h-full">
              <div className="ml-4">
                <span className="text-3xl text-blue-500">1258</span>
                <p>Нийт Харилцагч</p>
              </div>
              <div className="text-3xl w-[35%] m-1 bg-blue-500 h-24 flex justify-center items-center text-white">
                <i class="bi bi-people-fill"></i>
              </div>
            </div>
          </a>
        </div>
        <div className="basis-1/4 border-2 border-red-500 m-3 bg-white">
          <a href="#">
            <div className="flex justify-between items-center h-full">
              <div className="ml-4">
                <span className="text-3xl text-red-500">144</span>
                <p>Нийт Бүтээгдэхүүн</p>
              </div>
              <div className="text-3xl w-[35%] m-1 bg-red-500 h-24 flex justify-center items-center text-white">
                <i class="bi bi-collection"></i>
              </div>
            </div>
          </a>
        </div>
        <div className="basis-1/4 m-3 border-2 border-orange-500 bg-white">
          <a href="#">
            <div className="flex justify-between items-center h-full">
              <div className="ml-4">
                <span className="text-3xl text-orange-500">1</span>
                <p>Нийт Багц Бүтээгдэхүүн</p>
              </div>
              <div className="text-3xl w-[35%] m-1 bg-orange-500 h-24 flex justify-center items-center text-white">
                <i class="bi bi-postcard-heart"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
      <p className="block text-center mt-3">
        <span className="font-semibold">Ehlel Corporation POS</span> - Системд
        тавтай морилно уу!
      </p>
      <div className="w-full h-60 bg-slate-500 ">
        <div className="flex flex-row">
          <a href="" className="flex-1 h-10 bg-slate-100 m-5 flex items-center">
            <i className="bi bi-cart-plus inline mx-11"></i>|
            <p className="inline ml-11"> Шинэ борлуулалт хийх</p>
          </a>
          <a href="" className="flex-1 h-10 bg-slate-100 m-5 flex items-center">
            <i className="bi bi-cart-plus inline mx-11"></i>|
            <p className="inline ml-11"> Шинэ борлуулалт хийх</p>
          </a>
        </div>
        <div className="flex flex-row">
          <a href="" className="flex-1 h-10 bg-slate-100 m-5 flex items-center">
            <i className="bi bi-cart-plus inline mx-11"></i>|
            <p className="inline ml-11"> Шинэ борлуулалт хийх</p>
          </a>
          <a href="" className="flex-1 h-10 bg-slate-100 m-5 flex items-center">
            <i className="bi bi-cart-plus inline mx-11"></i>|
            <p className="inline ml-11"> Шинэ борлуулалт хийх</p>
          </a>
        </div>
        <div className="flex flex-row">
          <a href="" className="flex-1 h-10 bg-slate-100 m-5 flex items-center">
            <i className="bi bi-cart-plus inline mx-11"></i>|
            <p className="inline ml-11"> Шинэ борлуулалт хийх</p>
          </a>
          <a href="" className="flex-1 h-10 bg-slate-100 m-5 flex items-center">
            <i className="bi bi-cart-plus inline mx-11"></i>|
            <p className="inline ml-11"> Шинэ борлуулалт хийх</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
