import React from "react";

const BrandsSection = () => {
  const brands = [
    "/images/brand1.png",
    "/images/brand2.png",
    "/images/brand3.png",
    "/images/brand4.png",
    "/images/brand5.png",
    "/images/brand6.png",
    "/images/brand8.png",
    "/images/brand9.png",
    "/images/brand10.png",
    "/images/brand11.png",
    "/images/brand12.png",
    "/images/brand13.png",
    "/images/brand14.png",
    "/images/brand15.png",
    "/images/brand16.png",
    "/images/brand17.png",
    "/images/brand18.png",
    "/images/brand19.png",
  ];

  return (
    <section className="py-[12px] md:py-[120px]  ">
      <h2 className="text-center text-2xl font-semibold mb-6">Brands We Work <br/> With</h2>
      <p className="text-center text-[16px] leading-6 font-medium   "> We've carefully selected these top currency exchange providers based on their competitive <br/> rates, reliability, and customer satisfaction. </p>
      <div className="flex justify-center gap-[31px] max-w-[1088px] my-[48px] mx-auto flex-wrap">
        {brands.map((brand, index) => (
          <img key={index} src={brand} alt={`Brand ${index + 1}`} className="h-16 object-contain" />
        ))}
      </div>
      <div className=" max-w-[1280px] h-[224px] mx-auto py-2 md:py-[48px] px-[32px] border rounded-3xl">

      <p className="text-center text-[16px] leading-6 font-medium  mb-6  ">Join Compa and showcase your currency exchange services to a wider audience. By registering your business, you'll gain<br/> access to potential customers looking for the best exchange rates. </p>
      <div className="w-full flex justify-center">
        <button className="bg-[#81F8F8] px-4 py-4 font-medium w-[263px]  text-[16px] rounded-[12px]">Register Now </button>
        </div>
      
      </div>
    </section>
  );
};

export default BrandsSection;
