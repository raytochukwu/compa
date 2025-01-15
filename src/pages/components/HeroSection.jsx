import React from "react";

const HeroSection = () => {
  return (
    <section className=" text-center py-[27px] px-4">
      <h1 className="text-[56px] mb-4 w-[863px] mx-auto">
        Find the Best <span className="font-bold">Exchange <br/> Rates</span> Instantly with Compa
      </h1>
      <p className="text-gray-600 text-[16px]  w-[863px] mx-auto mb-[97px]">
      Are you ready to get the best exchange rates effortlessly? Join our waitlist and be among the first to experience Compa, the ultimate platform for comparing fiat currency exchange rates. By signing up, you'll gain early access to exclusive features and the opportunity to secure the best deals before anyone else.
      </p>
      <div className=" mb-[125px]  w-[1280px] py-[72px] h-[305px] border border-[#767676] rounded-[24px] mx-auto gap-4">
        <h1 className="font-bold mb-[32px]">Find Best Rate</h1>
        <div className="flex justify-center  items-end gap-[42px]">
        <div className="flex flex-col w-[380px]">
  <label htmlFor="From" className="mb-1 text-gray-700 text-left  font-medium">
   From
  </label>
  <input
    id="amount"
    type="text"
    placeholder="Enter amount"
    className="border h-[56px] border-gray-300 p-3 rounded-lg"
  />
</div>
<div className="flex  flex-col w-[380px]">
<label htmlFor="To" className="mb-1 text-gray-700 text-left font-medium">
   To
  </label>
        <select className="border h-[56px] border-gray-300 p-3 rounded-lg">
          <option>USD - United States Dollar</option>
          <option>EUR - Euro</option>
        </select>
        </div>
        <button className="bg-[#81F8F8] h-[56px]  px-6 py-3 rounded-lg">
          Find Best Rate
        </button>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
