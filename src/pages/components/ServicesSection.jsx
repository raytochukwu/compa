import React from "react";

const ServicesSection = () => {
  const services = [
    {status:"", image:"/images/coin.png",title: "Currency Converter", description: "Make informed decisions with accurate exchange rates for your transactions." },
    {status:"",  image:"/images/alarm.png",title: "Rate Alert", description: "Set up rate alerts and get notified instantly when your desired currency exchange or cryptocurrency rate hits the target" },
    {status:"",  image:"/images/chart.png",title: "Currency Pair", description: "Track real-time rates for a wide range of currency pairs." },
    {status:"Coming Soon",  image:"/images/chart.png",title: "Crypto Converter", description: "Coming soon: Track and convert cryptocurrencies effortlessly." },
  ];

  return (
    <section className="py-[12px] md:py-[120px] px-6 ">
     <div className=" text-center mx-auto w-[365px] mb-[24px]">
      <p className="text-center text-2xl font-semibold text-[#56A5A5]">Our</p>
      <h1 className=" font-semibold text-5xl leading-[72px]">Services</h1>

        </div>
        <div className="flex items-center justify-center">

      <div className="grid grid-cols-1 max-w-[1277px] mx-auto lg:grid-cols-2 gap-[20px]">
        {services.map((service, index) => (
          <div key={index} className="border max-w-[626px] h-[280px]  py-[24px] rounded-lg text-center shadow-sm">
            <h3 className="font-semibold text-lg mb-[24px]">{service.status}</h3>
            <img src={service.image} alt="image" className="mx-auto mb-[24px]" />
            <h3 className="font-semibold text-lg  mb-[24px]">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
