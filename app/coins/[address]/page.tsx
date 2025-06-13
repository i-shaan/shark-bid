'use client';

import { useState } from 'react';
import Header from '../Header/Header';
import Investing from './Investing';
import ReturnsCalculator from './ReturnsCalculator';
import PriceSection from './components/PriceSection';
import ChartSection from './components/ChartSection';
import PriceDescription from './components/PriceDescription';
import PriceHistory from './components/PriceHistory';
import PriceInformation from './components/PriceInformation';
import MarketStats from './components/MarketStats';
import InsightsSection from './components/InsightsSection';
import Cryptocurrencies from './components/Cryptocurrencies';
import Faq from './components/Faq';
import Breadcrumb from '../Header/Breadcrumb';

type Timeframe = '1s' | '1m' | '5m' | '15m' | '1h' | '4h' | '24h';

export default function Home() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>('1m'); // Ensure type matches Timeframe

  return (
    <div className="h-full bg-[#242329] text-white">
      <Header />
      
      <div className="container mx-auto pb-4 px-[140px] ">
        <Breadcrumb items={['Home', 'Coins', 'Ardor']} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Price and Chart */}
          <div className="lg:col-span-2 space-y-6">
            <PriceSection />
            <ChartSection 
              selectedTimeframe={selectedTimeframe}
              setSelectedTimeframe={setSelectedTimeframe}
            />
            <PriceDescription />
            <PriceHistory />
            <PriceInformation />
            <MarketStats />
            <InsightsSection />
            <ReturnsCalculator />
          </div>
          
          {/* Right Section - Investment Panel */}
          <div>
            <Investing />
          </div>
        </div>
        <Cryptocurrencies />
        <Faq />
      </div>
    </div>
  );
}