"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';

const FinancialDashboard: React.FC = () => {
  // Returns Calculator State
  const [activeTab, setActiveTab] = useState<'one-time' | 'recurring'>('one-time');
  const [amount, setAmount] = useState<number>(100);
  const [selectedPeriod, setSelectedPeriod] = useState<'6M' | '1Y' | '2Y' | '3Y'>('1Y');
  const [sliderValue, setSliderValue] = useState<number>(100);
  
  // Currency Converter State
  const [ardrAmount, setArdrAmount] = useState<number>(1);
  const [usdAmount, setUsdAmount] = useState<number>(0.11852);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  
  const periods: Array<'6M' | '1Y' | '2Y' | '3Y'> = ['6M', '1Y', '2Y', '3Y'];
  const exchangeRate: number = 0.11852;
  
  // Initialize timestamp
  useEffect(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    const dateString = now.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    setLastUpdated(`${timeString} • ${dateString}`);
  }, []);
  
  // Returns Calculator Logic
  const calculateReturns = () => {
    const rates: Record<typeof selectedPeriod, number> = {
      '6M': 0.015,
      '1Y': 0.03,
      '2Y': 0.065,
      '3Y': 0.10
    };
    
    const rate = rates[selectedPeriod];
    const returns = amount * (1 + rate);
    const profit = returns - amount;
    const percentage = (profit / amount) * 100;
    
    return {
      total: returns.toFixed(2),
      percentage: percentage.toFixed(2)
    };
  };
  
  const returns = calculateReturns();
  
  // Sync slider with input
  useEffect(() => {
    setAmount(sliderValue);
  }, [sliderValue]);
  
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(1000, Number(e.target.value) || 0));
    setAmount(value);
    setSliderValue(value);
  };
  
  // Currency Converter Logic
  const handleArdrChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setArdrAmount(value);
    setUsdAmount(value * exchangeRate);
  };
  return (
<div className="bg-transparent text-white">
  <div className="max-w-7xl mx-auto space-y-8">
    
    {/* Returns Calculator */}
    <div>
      <h1 className="text-2xl font-bold mb-6">Returns Calculator</h1>
      <div className="bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl p-4 border border-gray-700">

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('one-time')}
              className={`py-2 px-6 text-sm font-medium transition-all ${
                activeTab === 'one-time'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ONE TIME
            </button>
            <button
              onClick={() => setActiveTab('recurring')}
              className={`py-2 px-6 text-sm font-medium transition-all ${
                activeTab === 'recurring'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              RECURRING
            </button>
          </div>
        </div>

        {/* Main Content - Controls + Divider + Results */}
        <div className="flex">
          {/* Controls */}
          <div className="flex-1 pr-8">
            {/* Investment Amount */}
            <div className="mb-8">
              <label className="block text-gray-400 text-sm font-medium mb-4">
                Investment Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent mb-6"
                min="0"
                max="1000"
              />

              {/* Slider */}
              <div className="relative">
                <div className="h-2 bg-gray-600 rounded-full relative">
                  <div 
                    className="h-2 bg-yellow-500 rounded-full absolute top-0 left-0"
                    style={{ width: `${(sliderValue / 1000) * 100}%` }}
                  />
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full shadow-lg cursor-pointer border-4 border-white"
                    style={{ left: `calc(${(sliderValue / 1000) * 100}% - 12px)` }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Investment Period */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-4">
                Investment Period
              </label>
              <div className="flex space-x-3">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                      selectedPeriod === period
                        ? 'bg-yellow-500 text-gray-900'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-[#8A8F94] mx-8"></div>

          {/* Returns */}
          <div className="w-[250px] h-[160px] flex flex-col justify-center items-center bg-[#58525E] border border-[#212121] rounded-[10px] text-center">

              <p className="text-[#BBBBBB] text-lg mb-2 ">Returns</p>
              <div className='flex gap-2'>
              <div className="text-2xl font-bold text-white mb-2">
                ${returns.total}
              </div>
              <div className="flex items-center justify-center  text-green-400">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.97251 1.48306C4.46961 0.765552 5.53039 0.765552 6.02749 1.48306L8.83693 5.53813C9.41128 6.36714 8.81796 7.5 7.80943 7.5L2.19056 7.5C1.18204 7.5 0.588719 6.36713 1.16307 5.53813L3.97251 1.48306Z" fill="#00FF00"/>
</svg>

                <span className="font-medium text-lg">{returns.percentage} %</span>
              </div>
              </div>
            </div>
         
        </div>
      </div>
    </div>

    {/* ARDR to USD Converter */}
    <div>
      <h1 className="text-2xl font-bold mb-6">ARDR to USD Converter</h1>
      <div className="bg-transparent rounded-2xl p-8 border border-gray-700">
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Quantity</h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Price</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 items-center">
          {/* ARDR Input */}
          <div className="relative w-full">
            <input
              type="number"
              value={ardrAmount}
              onChange={handleArdrChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-20 text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              step="0.01"
            />
            <div className="absolute inset-y-0 right-4 flex items-center space-x-2 pointer-events-none">
              <div className="w-6 h-6 bg-gray-400 rounded-full flex-shrink-0"></div>
              <span className="text-gray-300 font-medium">ARDR</span>
            </div>
          </div>

          {/* USD Output */}
          <div className="relative w-full">
            <div className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-20 text-white text-lg font-medium">
              $ {usdAmount.toFixed(5)}
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center space-x-2 pointer-events-none">
              <div className="w-6 h-6 bg-gray-400 rounded-full flex-shrink-0"></div>
              <span className="text-gray-300 font-medium">USD</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <p className="text-sm text-gray-400">
            Price as per {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default FinancialDashboard;