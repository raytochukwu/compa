import React from "react";

const CurrencyPair = () => {
  return (
    <section className=" py-20 px-6">
      <h2 className="text-center text-5xl font-semibold mb-6">Currency Pair</h2>
      <p className="  mb-[48px] mx-auto font-normal text-base text-center text-[#696969] leading-5 w-[863px]">Monitor your desired currency pairs with ease on Compa. Whether you’re trading USD/EUR or any other pair, we help you find the best exchange rates quickly and efficiently. Stay informed and make the most of your currency exchanges.</p>
      <div className="flex py-6 px-[24px] mx-auto h-[104px] w-[1284px] rounded-3xl border border-black justify-between  mb-4">
        <button className="bg-[#81F8F8] px-4 py-[10px]font-bold  text-[14px] rounded-lg">Africa Countries </button>
        <button className="bg-white  px-4 py-[10px] font-bold text-[14px] rounded-lg">Asia Countries</button>
        <button className="bg-white px-4 py-[10px] font-bold  text-[14px] rounded-lg">Australia Countries</button>
        <button className="bg-white px-4 py-[10px] font-bold  text-[14px] rounded-lg">Europe Countries</button>
        <button className="bg-white px-4 py-[10px] font-bold  text-[14px] rounded-lg">Europe Countries</button>
        <button className="bg-white px-4 py-[10px] font-bold  text-[14px] rounded-lg">South America Countries</button>
        <button className="bg-white px-4 py-[10px] font-bold  text-[14px] rounded-lg">North America Countries</button>
        {/* Add other regions */}
      </div>
     <div className=" w-full">
      <div className=" mx-auto flex w-[1284px] h-[72px] bg-[#1A3232] rounded-t-[24px] py-[12px] px-[24px] justify-between ">
        <div className="text-white w-[106px] text-center text-[16px] py-[12px] font-semibold ">S/N</div>
        <div className="text-white w-[150px] text-center text-[16px] py-[12px] font-semibold  ">Country</div>
        <div className="text-white w-[150px] text-center text-[16px] py-[12px] font-semibold  ">Currency pair</div>
        <div className="text-white w-[150px] text-center text-[16px] py-[12px] font-semibold  ">Continent </div>
        <div className="text-white w-[150px] text-center text-[16px] py-[12px] font-semibold  ">Platform </div>
      </div>
      <div className=" mx-auto  w-[1284px]  border  rounded-b-[24px]   py-[24px] mb-[48px]  ">
        <div className="w-full flex justify-between  border-b py-[12px] px-[24px]">
        <div className=" w-[106px] text-center text-[16px] py-[12px] font-semibold ">1</div>
        <div className=" w-[150px] text-center text-[16px] py-[12px] font-semibold  ">Nigeria</div>
        <div className=" w-[150px] text-center text-[16px] py-[12px] font-semibold  ">25 </div>
        <div className=" w-[150px] text-center text-[16px] py-[12px] font-semibold  ">5 </div>
        <div className=" w-[150px] text-center text-[16px] py-[12px] font-semibold  ">10 </div>

        </div>

      </div>
<div className="w-full flex justify-center">
        <button className="bg-[#81F8F8] px-4 py-4 font-medium w-[263px]  text-[16px] rounded-[12px]">Load More </button>
        </div>
      </div>
    
    </section>
  );
};

export default CurrencyPair;
