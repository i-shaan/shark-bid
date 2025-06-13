"use client";
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Smartphone, 
  Shield, 
  Lock,
  DollarSign,
  CheckCircle,
  Minus
} from 'lucide-react';
import Header from './LandingPage/Navbar';
import Link from 'next/link';

function App() {
  const [coinsCount, setCoinsCount] = useState(0);
  const [btcPrice, setBtcPrice] = useState(800);
  // Animated counter for coins
  useEffect(() => {
    const timer = setInterval(() => {
      setCoinsCount(prev => prev < 4001 ? prev + 50 : 4001);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Animated BTC price
  useEffect(() => {
    const timer = setInterval(() => {
      setBtcPrice(prev => prev < 950 ? prev + 5 : 950);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#242329] text-white">
            <Header/>
      {/* Hero Section */}
      <div className=" mx-auto px-6 py-16">
  
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your one stop platform for
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              crypto Insights
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>FIU Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span>Insured Funds</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" />
              <span>Encrypted data</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/profile/home" passHref>
  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-200 shadow-lg">
    Get Started
  </button>
</Link>

            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-200 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              iOS app
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-200 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Android app
            </button>
          </div>
        </div>

        {/* Dashboard Grid - Matching the exact layout from image */}
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto items-start">
          {/* Left Part - Main Dashboard */}
          <div className="col-span-12 md:col-span-9 h-full">
            <div className="grid grid-cols-12 gap-6 h-full">
              {/* Row 1 */}
              {/* Coins Available - spans 4 columns */}
              <div className="col-span-12 md:col-span-4 flex flex-col overflow-hidden h-full">
                {/* Image section - top 25% */}
                <div className="w-full ">
                  <img 
                    src="/cryptocoins.png" 
                    alt="Crypto coins"
                    className="w-full h-full object-cover "
                  />
                </div>
                
                {/* Content section - remaining 75% */}
                <div className="flex-1 p-8 flex flex-col justify-center bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl  border border-gray-700 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-300">
                    Coins available to invest in
                  </h3>
                  <div className="text-5xl font-bold text-yellow-400">
                    {coinsCount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* BTC Investment Chart - spans 8 columns */}
              <div className="col-span-12 md:col-span-8 bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl p-8 border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  One time vs recurring investment in BTC
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-400">${btcPrice}.5K</span>
                  <span className="text-green-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +12.3%
                  </span>
                </div>
                
                {/* Chart */}
                <div className="relative h-48 bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl border border-gray-700 p-8">
                  <svg className="w-full h-full" viewBox="0 0 400 160">
                    <defs>
                      <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#14B8A6" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    {/* Blue line (recurring) */}
                    <path
                      d="M 0 120 Q 100 110 200 80 T 400 30"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M 0 130 Q 100 120 200 90 T 400 40 L 400 160 L 0 160 Z"
                      fill="url(#chartGradient1)"
                    />
                    {/* Teal line (one-time) */}
                    <path
                      d="M 0 140 Q 100 135 200 110 T 400 80"
                      stroke="#14B8A6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 0 145 Q 100 140 200 115 T 400 85 L 400 160 L 0 160 Z"
                      fill="url(#chartGradient2)"
                    />
                  </svg>
                </div>
              </div>

              {/* Row 2 */}
              {/* Manage Risks - spans 4 columns */}
              <div className="col-span-12 md:col-span-4 bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl p-8 border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-300">
                  Manage Risks
                </h3>
                
                <div className="space-y-4">
                  <button className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-1 bg-green-500 rounded"></div>
                      <span>Take Profit</span>
                    </div>
                  </button>
                  <button className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-1 bg-red-500 rounded"></div>
                      <span>Stop Loss</span>
                    </div>
                  </button>
                  <button className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-1 bg-blue-500 rounded"></div>
                      <span>Buy the Dip</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Get Coin Insights - spans 4 columns */}
              <div className="col-span-12 md:col-span-4 bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl p-8 border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-300">
                  Get Coin Insights
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Technical</span>
                    </div>
                    <span className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-sm">Strong</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Minus className="w-5 h-5 text-gray-400" />
                      <span>On-chain</span>
                    </div>
                    <span className="bg-orange-900 text-orange-400 px-3 py-1 rounded-full text-sm">Neutral</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Minus className="w-5 h-5 text-gray-400" />
                      <span>Sentiment</span>
                    </div>
                    <span className="bg-red-900 text-red-400 px-3 py-1 rounded-full text-sm">Weak</span>
                  </div>
                </div>
              </div>

              {/* Get Coin Insights (Right) - spans 4 columns */}
              <div className="col-span-12 md:col-span-4 bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl p-8 border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-300">
                  Get Coin Insights
                </h3>
                
                <div className="text-center mb-6">
                  <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl">
                    <div className="text-2xl font-bold">2.15%</div>
                    <div className="text-sm">APR</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex -space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
                      ₿
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      Ξ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Part - Investment & Trading */}
          <div className="col-span-12 md:col-span-3 h-full">
            <div className="grid grid-cols-1 gap-6 h-full">
              {/* Portfolio Allocation */}
              <div className="bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl p-8 border border-gray-700 shadow-xl ">
                <h3 className="text-2xl font-semibold  text-gray-300">
                  Invest in Coin Set
                </h3>
                <p className=" mb-6">Crypto Blue Chip - 5</p>
                <div className='flex justify-between '>
                {/* Pie Chart */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#374151" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#EF4444" strokeWidth="8"
                            strokeDasharray="77 220" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#3B82F6" strokeWidth="8"
                            strokeDasharray="55 220" strokeDashoffset="-77" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#10B981" strokeWidth="8"
                            strokeDasharray="33 220" strokeDashoffset="-132" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#8B5CF6" strokeWidth="8"
                            strokeDasharray="34 220" strokeDashoffset="-165" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#F59E0B" strokeWidth="8"
                            strokeDasharray="21 220" strokeDashoffset="-199" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Bitcoin</span>
                    </div>
                    <span className="text-gray-400">35.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Ethereum</span>
                    </div>
                    <span className="text-gray-400">24.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Cardano</span>
                    </div>
                    <span className="text-gray-400">15.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Solana</span>
                    </div>
                    <span className="text-gray-400">15.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Avalanche</span>
                    </div>
                    <span className="text-gray-400">9.1%</span>
                  </div>
                </div>
                </div>
              </div>

              {/* Trading Futures */}
              <div className="bg-[linear-gradient(180deg,_#242329_0%,_#58525E_236.84%)] rounded-2xl p-8 border border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Trade in Coin Futures
                </h3>
                
                {/* Mock Candlestick Chart */}
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-end h-24 gap-1">
                    {[
                      { type: 'green', height: 'h-16' },
                      { type: 'red', height: 'h-12' },
                      { type: 'green', height: 'h-20' },
                      { type: 'green', height: 'h-14' },
                      { type: 'red', height: 'h-10' },
                      { type: 'green', height: 'h-18' },
                      { type: 'red', height: 'h-8' },
                      { type: 'green', height: 'h-22' }
                    ].map((candle, i) => (
                      <div key={i} className="flex flex-col items-center justify-end">
                        <div className={`w-3 ${candle.type === 'green' ? 'bg-green-500' : 'bg-red-500'} ${candle.height} rounded-sm`}></div>
                        <div className={`w-1 ${candle.type === 'green' ? 'bg-green-400' : 'bg-red-400'} h-2 rounded-sm`}></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">BTC/USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">10X Leverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Limit/Market</span>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className=" rounded-2xl p-6 ">
              
                  <img 
                    src="/cryptocoins.png" 
                    alt="Description of your image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                
             
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;