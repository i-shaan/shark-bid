import React from 'react';
import { ChevronRight } from 'lucide-react';
import Gain from '@/components/icons/Gain';
import Loss from '@/components/icons/Loss';
import Link from "next/link";
const SpotLight = () => {
  // Sample data - you can replace this with real data
  const topGainers = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '+3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '+3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '+3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '+3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '+3.00', icon: '₿' },
  ];

  const topLosers = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '-3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '-3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '-3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '-3.00', icon: '₿' },
    { name: 'Bitcoin', symbol: 'BTC', price: '$0.02298', change: '-3.00', icon: '₿' },
  ];

  interface CryptoItem {
    name: string;
    symbol: string;
    price: string;
    change: string;
    icon: string;
  }

  const CryptoCard = ({ title, description, data, isGainer = true }: { title: string; description: string; data: CryptoItem[]; isGainer?: boolean }) => (
    <div className="rounded-xl p-6 border border-gray-[#bbbbbb]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mr-1">More</span>
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="grid grid-cols-3 text-xs text-gray-400 uppercase tracking-wide">
          <div>Name</div>
          <div className="text-center">Price</div>
          <div className="text-right">24h</div>
        </div>
        
       

{data.map((item, index) => {
  const isGainer = parseFloat(item.change) >= 0;

  return (
    <Link
      key={index}
      href={`/coins/${item.symbol}`}
      className="block"
    >
      <div className="grid grid-cols-3 items-center py-2 hover:bg-gray-700/30 rounded-lg transition-colors">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {item.icon}
          </div>
          <div>
            <div className="text-white font-medium text-sm">{item.name}</div>
          </div>
        </div>

        <div className="text-center">
          <span className="text-white font-medium text-sm">{item.price}</span>
        </div>

        <div className="text-right">
          <div
            className={`flex items-center justify-end space-x-1 ${
              isGainer ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {isGainer ? <Gain /> : <Loss />}
            <span className="font-medium text-sm">
              {Math.abs(parseFloat(item.change)).toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
})}

      </div>
    </div>
  );

  return (
    <div className="min-h-screen ">
      <div className="max-w-full ">
        {/* First Row - Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CryptoCard
            title="Top Gainers"
            description="Discover today's top crypto gainers and navigate market trends."
            data={topGainers}
            isGainer={true}
          />
          <CryptoCard
            title="Top Losers"
            description="Dive into today's crypto dips, capturing market shifts. Unravel top crypto losers today."
            data={topLosers}
            isGainer={false}
          />
        </div>

        {/* Second Row - Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CryptoCard
            title="Top Gainers"
            description="Discover today's top crypto gainers and navigate market trends."
            data={topGainers}
            isGainer={true}
          />
          <CryptoCard
            title="Top Losers"
            description="Dive into today's crypto dips, capturing market shifts. Unravel top crypto losers today."
            data={topLosers}
            isGainer={false}
          />
        </div>

        {/* Third Row - Single column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CryptoCard
            title="Top Gainers"
            description="Discover today's top crypto gainers and navigate market trends."
            data={topGainers}
            isGainer={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SpotLight;