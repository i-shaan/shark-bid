import React from 'react';
import { formatLargeNumber } from '../../utils/formatters';
import { MarketStats as MarketStatsType } from '../../types/types';

interface MarketStatsProps {
  stats: MarketStatsType;
}

const MarketStats: React.FC<MarketStatsProps> = ({ stats }) => {
  return (
    <div
      className="bg-[linear-gradient(180deg,#242329_0%,#58525E_247.86%)] rounded-xl p-4 border-1 border-[#BBBBBB1A] h-full"
      
    >
      <h2 className="text-lg font-medium text-white mb-4">Market Stats</h2>

      <div className="space-y-4">
        {/* Market Cap */}
        <div className="flex items-start">
          <div className="h-10 w-10 rounded bg-gray-700 flex items-center justify-center mr-3">
            <span className="text-blue-400 text-xs">📊</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400">Market Cap</span>
            <p className="text-white font-medium">{formatLargeNumber(stats.totalMarketCap)}</p>
          </div>
        </div>

        {/* 24h Volume */}
        <div className="flex items-start">
          <div className="h-10 w-10 rounded bg-gray-700 flex items-center justify-center mr-3">
            <span className="text-green-400 text-xs">📈</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400">24h Trading Volume</span>
            <p className="text-white font-medium">{formatLargeNumber(stats.totalVolume24h)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
