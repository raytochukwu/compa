import React from 'react'

const ExchangeRates = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
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
      <div className="w-full max-w-5xl flex justify-end mb-4 px-4">
        <button className="border border-gray-300 rounded-md px-4 py-2 text-sm bg-white">
          Filter
        </button>
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
