import React from 'react';
import { formatLargeNumber } from '../../utils/formatters';

interface MarketOverviewProps {
  totalMarketCap: number;
  totalVolume24h: number;
}

const MarketOverview: React.FC<MarketOverviewProps> = ({ 
  totalMarketCap, 
  totalVolume24h 
}) => {
  return (
    <div className="container text-sm text-gray-300  my-10 mx-auto" >
      <p>
        The global crypto market cap is around {formatLargeNumber(totalMarketCap)} and the total trading volume over the last 24 hours is about {formatLargeNumber(totalVolume24h)}
      </p>
    </div>
  );
};

export default MarketOverview;