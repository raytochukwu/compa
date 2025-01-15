import React from "react";

const NewsSection = () => {
  const newsItems = [
    {
      image: "/images/news1.png",
      date: "August 10, 2024",
      title: "USD Hits 6-Month High Against EUR: What It Means for Your Exchange",
      link: "#",
    },
    {
      image: "/images/news2.png",
      date: "August 10, 2024",
      title: "USD Hits 6-Month High Against EUR: What It Means for Your Exchange",
      link: "#",
    },
    {
      image: "/images/news3.png",
      date: "August 10, 2024",
      title: "USD Hits 6-Month High Against EUR: What It Means for Your Exchange",
      link: "#",
    },
    {
      image: "/images/news4.png",
      date: "August 10, 2024",
      title: "USD Hits 6-Month High Against EUR: What It Means for Your Exchange",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#fffaf0] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Latest news on currencies<br/> all around the world
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  Published on {item.date}
                </p>
                <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
                <a
                  href={item.link}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Read more...
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className=" px-4 py-4 font-medium w-[263px] border text-[16px] rounded-[12px] mt-8">
          View all
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
