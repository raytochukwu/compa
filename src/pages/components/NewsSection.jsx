import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const API_KEY = '559dcd7e75ae4ac8b608c46fbc3fed0e';
      try {
        const res = await axios.get(`https://newsapi.org/v2/everything`, {
          headers: {
            'Accept': 'application/json',
            'Connection': 'keep-alive',
          },
          params: {
            q: 'cryptocurrency',
            apiKey: API_KEY,
          },
        });
        setArticles(res.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to fetch articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomArticles = shuffleArray([...articles]).slice(0, 4);

  







  
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
      <div id="Newsletter" className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Latest news on currencies<br/> all around the world
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {randomArticles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                Published on {new Date(item.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
                </p>
                <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
                <a
                  href={item.url} target='blank'
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Read more...
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <button className=" px-4 py-4 font-medium w-[263px] border text-[16px] rounded-[12px] mt-8">
          View all
        </button> */}
      </div>
    </section>
  );
};

export default NewsSection;
