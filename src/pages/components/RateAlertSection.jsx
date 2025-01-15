import React from "react";

const RateAlertSection = () => {
  return (
    <section className="bg-[#fffaf0] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Rate Alert</h2>
          <p className="text-gray-600">
            Never miss a great exchange rate again! Set up custom rate alerts
            with Compa, and we’ll notify you when your desired currency hits the
            target rate. Stay ahead of the market and make your exchange at the
            perfect moment.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Set Rate Alert</h3>
          <form className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Platform Input */}
            <select
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Platform</option>
              <option value="web">Web</option>
              <option value="mobile">Mobile</option>
            </select>
            {/* Frequency Input */}
            <select
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Frequency</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8ffcff] text-black py-3 rounded-md font-semibold hover:bg-[#72e6e6] transition"
            >
              Register now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RateAlertSection;
