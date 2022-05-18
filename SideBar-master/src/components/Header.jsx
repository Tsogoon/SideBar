import React from "react";
import DropDown from "./DropDown";

export default function Header() {
  return (
    <div className="flex  h-[5%] w-[100%]">
      <div className="flex items-center justify-end bg-[#373942] border-b-4 border-gray-600 shadow-md w-[100%]">
        <div className=" text-sm lg:text-2xl ml-20 ">
          {/* <form className=" " action="">
            <input
              className="w-28 rounded-md"
              type="search"
              placeholder=""
              required
            />
            <button
              type="submit"
              className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-0.4 px-1 rounded"
            >
              <i className="bi bi-search"></i>
            </button>
          </form> */}
        </div>
        <div className="mr-10">
          <DropDown />
        </div>
      </div>
    </div>
  );
}
