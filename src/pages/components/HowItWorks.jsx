import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-12 px-6 w-full">
        <div className=" text-center mx-auto max-w-[365px] mb-[24px]">
      <p className="text-center text-2xl font-semibold text-[#56A5A5]">How to</p>
      <h1 className=" font-semibold text-2xl md:text-5xl leading-[72px]">Find Best Rate</h1>

        </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-[48px] gap-6">
        <div className="text-center max-w-[410px] h-[400px] rounded-3xl py-6 px-6 border ">
          <div className=" border font-semibold text-[32px] rounded-full w-[60px] my-[48px] h-[60px] flex items-center justify-center mx-auto">
            1
          </div>
          <h3 className="font-semibold mb-[24px]">Input Amount</h3>
          <p className="text-[16px] text-center leading-6 font-medium"> Choose the currency you want to exchange from (e.g., USD) and the currency you want to exchange to (e.g., EUR) from the dropdown menus.</p>
        </div>
        <div className="text-center bg-[#E6FEFE] max-w-[410px] h-[400px] rounded-3xl py-6 px-6 border">

          <div className="bg-[#81F8F8] font-semibold text-[32px] rounded-full w-[60px] h-[60px] flex items-center justify-center mx-auto my-[48px]">
            2
          </div>
          <h3 className="font-semibold mb-[24px]">Compare Providers</h3>
          <p className="text-[16px] text-center leading-6 font-medium"> A comparison table shows the top exchange rates, any associated fees, and the final amount you'll receive in EUR.</p>
        </div>
        <div className="text-center max-w-[410px] h-[400px] rounded-3xl py-6 px-6 border">

          <div className=" border font-semibold text-[32px] rounded-full w-[60px] h-[60px] flex items-center justify-center mx-auto my-[48px]">
            3
          </div>
          <h3 className="font-semibold mb-[24px]">Enter Your Details</h3>
          <p className="text-[16px] text-center leading-6 font-medium">We’ll direct you to the provider’s website to finalize the exchange.Review the exchange rate, fees, and the total amount in EUR </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className=" px-4 py-4 font-medium w-[263px] border text-[16px] rounded-[12px]">Convert now </button>
        </div>
    </section>
  );
};

export default HowItWorks;
