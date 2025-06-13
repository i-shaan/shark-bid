import React from 'react';
import { formatLargeNumber } from '../../utils/formatters';
import { MarketStats as MarketStatsType } from '../../types/types';

interface MarketStatsProps {
  stats: MarketStatsType;
}

const MarketStats: React.FC<MarketStatsProps> = ({ stats }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg p-6 h-full border border-[#bbbbbb1a]"
      style={{
        background: 'linear-gradient(101.13deg, #242329 0%, #3B3740 106.79%, #58525E 122.25%)',
      }}
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
