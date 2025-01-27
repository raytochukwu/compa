import React, { useState } from 'react'

const ExchangeRates = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
      {/* Heading Section */}
      <div className="w-full max-w-5xl bg-teal-900 text-white rounded-md p-6 text-center mb-6">
        <h1 className="text-2xl font-semibold">
          Result showing best exchange rates for USD to EUR
        </h1>
        <p className="mt-2">Amount: 1000 USD</p>
        <p className="mt-1 text-sm">1 USD = 0.85 EUR</p>
        <p className="text-xs mt-1">Updated 2 minutes ago</p>
      </div>

      {/* Filter Section */}
      {/* <div className="w-full max-w-5xl flex justify-end mb-4 px-4">
        <button className="border border-gray-300 rounded-md px-4 py-2 text-sm bg-white">
          Filter
        </button>
      </div> */}

      <div className="w-full max-w-5xl flex justify-end mb-4 px-4">
        <div className="relative inline-block text-left">
          {/* Dropdown Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            Filter
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-2">
                <label className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">No Fees</span>
                </label>
                <label className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">Fee</span>
                </label>
                <label className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">Fastest Transfer</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl px-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="border rounded-md p-4 shadow-sm bg-white flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">Provider Name</div>
                <div className="text-sm text-gray-600">1 USD = 0.85 EUR</div>
              </div>

              {/* Card Details */}
              <div className="text-sm space-y-2">
                <p>
                  Exchange rate: <span className="text-teal-600">0.909600</span>
                </p>
                <p>
                  Transaction time: <span>0-2 days</span>
                </p>
                <p>
                  Transaction fee:{' '}
                  <span className="text-teal-600">0.00 USD</span>
                </p>
                <p>
                  Amount received:{' '}
                  <span className="text-teal-600">909.60 EUR</span>{' '}
                  <span className="text-red-600">-2.53 EUR</span>
                </p>
              </div>
            </div>

            {/* Compare Button */}
            <button className="mt-4 w-full bg-teal-300 text-black font-semibold py-2 rounded-md">
              Compare now
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8">
        <button className="bg-teal-300 text-black px-6 py-2 rounded-md font-semibold">
          Load more
        </button>
      </div>
    </div>
  )
}

export default ExchangeRates
