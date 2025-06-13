import React from 'react';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';

const Trending = () => {
  const coinData = {
    coin: "Ardor",
    symbol: "ARDR",
    price: "$0.02298",
    change: "3.00"
  };

  const CoinRow = ({ isGainer = true }) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-700  transition-colors cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div>
          <span className="text-white font-medium">{coinData.coin} </span>
          <span className="text-gray-400">{coinData.symbol}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <span className="text-white">{coinData.price}</span>
        <div className="flex items-center space-x-2">
          {isGainer ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={`font-medium ${isGainer ? 'text-green-500' : 'text-red-500'}`}>
            {isGainer ? '+' : '-'}{coinData.change}%
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );

  return (
    <div className=" text-white py-6 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Gainers */}
        <div className=" rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h2 className="text-xl font-semibold">Top Gainers</h2>
            </div>
          </div>
          
          <div className="divide-y divide-gray-700">
            <div className="flex items-center justify-between p-4 text-sm text-gray-400 bg-gray-750">
              <span>Coin</span>
              <div className="flex space-x-20">
                <span>Price</span>
                <span>24h Change</span>
              </div>
            </div>
            
            {[...Array(5)].map((_, index) => (
              <CoinRow key={`gainer-${index}`} isGainer={true} />
            ))}
          </div>
        </div>

        {/* Top Losers */}
        <div className=" rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-semibold">Top Losers</h2>
            </div>
          </div>
          
          <div className="divide-y divide-gray-700">
            <div className="flex items-center justify-between p-4 text-sm text-gray-400 bg-gray-750">
              <span>Coin</span>
              <div className="flex space-x-20">
                <span>Price</span>
                <span>24h Change</span>
              </div>
            </div>
            
            {[...Array(5)].map((_, index) => (
              <CoinRow key={`loser-${index}`} isGainer={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;