"use client";
import React, { useState } from 'react';
import { ChevronRight, Download, Upload, ArrowLeftRight, Landmark } from 'lucide-react';
import Loss from '@/components/icons/Loss';
import Gain from '@/components/icons/Gain';
import Header_Home from './Header';
import Link from 'next/link';

const CryptoDashboard = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [activeTab, setActiveTab] = useState('Gainers');
  const [selectedView, setSelectedView] = useState('Coins');
  // Mock data for crypto coins

  const gainersData = [
    { name: 'Bitcoin', price: '$45,298', change: '+5.20%', icon: '₿', isPositive: true },
    { name: 'Ethereum', price: '$3,298', change: '+3.80%', icon: 'Ξ', isPositive: true },
    { name: 'Solana', price: '$98.50', change: '+7.15%', icon: '◎', isPositive: true },
    { name: 'Cardano', price: '$0.85', change: '+4.30%', icon: '₳', isPositive: true },
    { name: 'Polkadot', price: '$12.45', change: '+2.90%', icon: '●', isPositive: true },
  ];

  const losersData = [
    { name: 'Luke', price: '$0.02298', change: '-3.00%', icon: '⚪', isPositive: false },
    { name: 'Dogecoin', price: '$0.15', change: '-2.50%', icon: 'Ð', isPositive: false },
    { name: 'Shiba Inu', price: '$0.000018', change: '-4.20%', icon: '🐕', isPositive: false },
    { name: 'Litecoin', price: '$85.30', change: '-1.80%', icon: 'Ł', isPositive: false },
    { name: 'Chainlink', price: '$18.75', change: '-3.60%', icon: '🔗', isPositive: false },
  ];

  const watchlistData = [
    { name: 'Bitcoin', price: '$45,298', change: '+5.20%', icon: '₿', isPositive: true },
    { name: 'Luke', price: '$0.02298', change: '-3.00%', icon: '⚪', isPositive: false },
    { name: 'Ethereum', price: '$3,298', change: '+3.80%', icon: 'Ξ', isPositive: true },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'Gainers':
        return gainersData;
      case 'Losers':
        return losersData;
      case 'Watchlist':
        return watchlistData;
      default:
        return gainersData;
    }
  };
  return (
    <div className="min-h-screen bg-[#242329] text-white ">
        <Header_Home/>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Investment Ready / Portfolio Value Card */}
            <div className="bg-[linear-gradient(101.13deg,#242329_0%,#3B3740_106.79%,#58525E_122.25%)] rounded-xl p-6  overflow-hidden border-1 border-[#BBBBBB1A]">
        
              <div className="relative z-10">
                {!isVerified ? (
                  <>
                    <div className="text-3xl font-bold mb-2">20%</div>
                    <div className="text-gray-400 mb-4">Get Investment Ready</div>
                    <Link href="/newuser">
  <button 
    onClick={() => setIsVerified(true)}
    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors group"
  >
    <span>Verify Phone</span>
    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>
                  </>
                ) : (
                  <>
                    <div className="text-gray-400 text-sm font-medium mb-2">PORTFOLIO VALUE</div>
                    <div className="flex items-baseline gap-3 mb-6">
                      <div className="text-3xl font-bold">$0.000</div>
                      <div className="text-green-400 text-sm">+$0.000 24h</div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Invested value</div>
                        <div className="font-semibold">$0.000</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Current Returns</div>
                        <div className="font-semibold">
                          <span>$0.000</span>
                          <span className="text-green-400 text-sm ml-2">+0%</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Realised Returns</div>
                        <div className="font-semibold">$0.000</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Explore Products Card */}
            <div className="bg-transparent rounded-xl p-6 border-1 border-[#BBBBBB1A]">
              <h2 className="text-xl font-semibold mb-6">Explore our products</h2>
              
              <div className=" rounded-lg ">
                <div className="flex items-center mb-2">
                  <h3 className="font-semibold">Coins</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">Evaluate and add individual crypto</p>
                <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors group">
                  <span>Explore Coins</span>
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            
            {/* Wallet Section */}
            <div className="bg-[linear-gradient(180deg,#242329_0%,#58525E_247.86%)] rounded-xl p-4 border-1 border-[#BBBBBB1A]">
              {!isVerified ? (
                <>
<div className="space-y-3 border border-[#BBBBBB4D] rounded-lg py-4 mb-6">
  <div className="flex justify-between items-center px-4">
    <span className="text-gray-400">USDT Wallet</span>
    <span className="font-semibold">$0.000</span>
  </div>

  {/* Divider Line */}
  <div className="w-full h-px bg-[#BBBBBB4D]" />

  <div className="flex justify-between items-center px-4">
    <span className="text-gray-400">Futures Wallet</span>
    <span className="font-semibold">$0.000</span>
  </div>
</div>

                  
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1  hover:bg-gray-600 transition-colors py-2 px-4 rounded-lg text-sm font-medium border-1 border-[#FFFFFF4D]">
                      Add Funds
                    </button>
                    <button className="flex-1  hover:bg-gray-600 transition-colors py-2 px-4 rounded-lg text-sm font-medium border-1 border-[#FFFFFF4D]">
                      Deposit USDT
                    </button>
                  </div>
                </>
              ) : (
                <>
<div className="space-y-3 border border-[#BBBBBB4D] rounded-lg py-4 mb-6">
  <div className="flex justify-between items-center px-4">
    <span className="text-gray-400">USDT Wallet</span>
    <span className="font-semibold">$0.000</span>
  </div>

  {/* Divider Line */}
  <div className="w-full h-px bg-[#BBBBBB4D]" />

  <div className="flex justify-between items-center px-4">
    <span className="text-gray-400">Futures Wallet</span>
    <span className="font-semibold">$0.000</span>
  </div>
</div>
                  
                  <div className="grid grid-cols-5 gap-3">
                    <div className="flex flex-col items-center">
                      <button className="w-12 h-12  hover:bg-gray-600 transition-colors rounded-full border-1 border-[#BBBBBB] flex items-center justify-center mb-2">
                        <Download className="w-5 h-5" />
                      </button>
                      <span className="text-xs text-white text-center leading-tight">Add funds with INR</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="w-12 h-12  hover:bg-gray-600 transition-colors rounded-full border-1 border-[#BBBBBB] flex items-center justify-center mb-2">
                        <Landmark className="w-5 h-5" />
                      </button>
                      <span className="text-xs text-white text-center leading-tight">Withdraw to Bank</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="w-12 h-12  hover:bg-gray-600 transition-colors rounded-full border-1 border-[#BBBBBB] flex items-center justify-center mb-2">
                        <Download className="w-5 h-5" />
                      </button>
                      <span className="text-xs text-white text-center leading-tight">Deposit USDT</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="w-12 h-12  hover:bg-gray-600 transition-colors rounded-full border-1 border-[#BBBBBB] flex items-center justify-center mb-2">
                        <Upload className="w-5 h-5" />
                      </button>
                      <span className="text-xs text-white text-center leading-tight">Send USDT</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="w-12 h-12  hover:bg-gray-600 transition-colors rounded-full border-1 border-[#BBBBBB] flex items-center justify-center mb-2">
                        <ArrowLeftRight className="w-5 h-5" />
                      </button>
                      <span className="text-xs text-white text-center leading-tight">Wallet Transfer</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className='w-[75%]'>
                <h3 className="font-semibold mb-4">Discover</h3>
                
                {/* Toggle Buttons */}
                <div className="flex gap-2 rounded-lg p-1 mb-4">
                  <button 
                    onClick={() => setSelectedView('Coins')}
                    className={`flex gap-2 rounded-full p-3 text-sm font-medium items-center justify-center transition-colors ${
                      selectedView === 'Coins' 
                        ? 'bg-white text-[#0A1118]' 
                        : 'text-gray-400 hover:text-white border border-gray-600'
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.58182 0 0 3.58182 0 8C0 12.4182 3.58182 16 8 16C12.4182 16 16 12.4182 16 8C16 3.58182 12.4182 0 8 0ZM8 14.5454C4.3908 14.5454 1.45455 11.6092 1.45455 8C1.45455 4.3908 4.3908 1.45455 8 1.45455C11.6092 1.45455 14.5454 4.3908 14.5454 8C14.5454 11.6092 11.6092 14.5454 8 14.5454Z" fill={selectedView === 'Coins' ? '#0A1118' : '#9CA3AF'}/>
                      <path d="M8.00178 2.18164C4.79383 2.18164 2.18359 4.79188 2.18359 7.99983C2.18359 11.2078 4.79383 13.818 8.00178 13.818C11.2097 13.818 13.82 11.2078 13.82 7.99983C13.82 4.79188 11.2097 2.18164 8.00178 2.18164Z" fill={selectedView === 'Coins' ? '#0A1118' : '#9CA3AF'}/>
                    </svg>
                    Coins
                  </button>
                  <button 
                    onClick={() => setSelectedView('Coin Sets')}
                    className={`flex gap-2 p-3 text-sm font-medium items-center justify-center rounded-full transition-colors ${
                      selectedView === 'Coin Sets' 
                        ? 'bg-white text-[#0A1118]' 
                        : 'text-gray-400 hover:text-white border border-gray-600'
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29886 7.07857C4.45028 7.07857 1.43359 5.5241 1.43359 3.53929C1.43359 1.55447 4.45028 0 8.29886 0C12.1474 0 15.1625 1.555 15.1625 3.53929C15.1625 5.52357 12.148 7.07857 8.29886 7.07857ZM8.29886 1.06653C4.88223 1.06653 2.50013 2.36983 2.50013 3.53929C2.50013 4.70874 4.88063 6.01204 8.29726 6.01204C11.7139 6.01204 14.096 4.70927 14.096 3.53929C14.096 2.3693 11.715 1.06653 8.29886 1.06653Z" fill={selectedView === 'Coin Sets' ? '#0A1118' : 'white'}/>
                      <path d="M8.29993 9.18795C4.45188 9.18795 1.43679 7.63401 1.43359 5.6492V3.53906H2.50013V5.6476C2.50013 6.81758 4.88169 8.12195 8.29886 8.12195C11.6526 8.12195 14.0091 6.86611 14.0949 5.71265V3.53906H15.1615V5.6476C15.1652 7.63295 12.1522 9.18795 8.29993 9.18795Z" fill={selectedView === 'Coin Sets' ? '#0A1118' : 'white'}/>
                      <path d="M8.79653 13.8889C5.16605 13.8889 2.22349 12.4912 1.95312 10.636L3.00846 10.4818C3.17377 11.6113 5.53934 12.8202 8.79706 12.8202C12.2142 12.8202 14.5958 11.5164 14.5958 10.3459C14.5958 9.7518 14.0055 9.14334 12.9757 8.67567L13.4173 7.70459C14.8651 8.36211 15.6623 9.30065 15.6623 10.3459C15.6618 12.3339 12.6456 13.8889 8.79653 13.8889Z" fill={selectedView === 'Coin Sets' ? '#0A1118' : 'white'}/>
                      <path d="M8.79676 15.998C4.94711 15.998 1.93149 14.4425 1.93149 12.4571V10.5512H2.99802V12.4571C2.99802 13.6276 5.37745 14.9315 8.79676 14.9315C10.2564 14.9624 11.7055 14.6789 13.0458 14.1001C14.0313 13.6362 14.5955 13.0378 14.5955 12.4571V10.3486H15.662V12.4571C15.662 13.482 14.8952 14.4083 13.5012 15.0642C12.0185 15.7101 10.4138 16.0286 8.79676 15.998ZM11.8614 8.13072V7.59746L11.5447 7.7857L11.3228 7.8257C9.92864 8.47652 8.40293 8.79644 6.86473 8.76051C3.44756 8.76051 1.066 7.45668 1.066 6.28616C1.066 5.78969 1.48035 5.27669 2.23278 4.84154L1.69952 3.91846C0.603124 4.55198 0 5.39294 0 6.28616C0 8.27151 3.01562 9.82704 6.86527 9.82704C8.69959 9.88333 10.5165 9.45709 12.1345 8.59093L12.3899 8.43522V8.13552L11.8614 8.13072Z" fill={selectedView === 'Coin Sets' ? '#0A1118' : 'white'}/>
                      <path d="M6.86527 11.936C3.01562 11.936 0 10.3805 0 8.39516V6.28662H1.06653V8.39569C1.06653 9.56567 3.4481 10.87 6.86527 10.87C10.2824 10.87 12.6635 9.56621 12.6635 8.39569V7.55899H13.73V8.39516C13.7305 10.3805 10.7149 11.936 6.86527 11.936Z" fill={selectedView === 'Coin Sets' ? '#0A1118' : 'white'}/>
                    </svg>
                    Coin Sets
                  </button>
                </div>
              </div>
            {/* Discover Section */}
            <div className=" rounded-xl p-4">

              
              {/* Tabs */}
              {selectedView === 'Coins' && (
                <div className="flex text-sm mb-4 ">
                  <button 
                    onClick={() => setActiveTab('Gainers')}
                    className={`pb-2 px-1 border-b-2 font-medium transition-colors ${
                      activeTab === 'Gainers' 
                        ? 'border-white text-white' 
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    Gainers
                  </button>
                  <button 
                    onClick={() => setActiveTab('Losers')}
                    className={`pb-2 px-4 font-medium transition-colors ${
                      activeTab === 'Losers' 
                        ? 'border-white text-white border-b-2' 
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    Losers
                  </button>
                  <button 
                    onClick={() => setActiveTab('Watchlist')}
                    className={`pb-2 px-4 font-medium transition-colors ${
                      activeTab === 'Watchlist' 
                        ? 'border-white text-white border-b-2' 
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    Watchlist
                  </button>
                  <button className="ml-auto pb-2 text-gray-400 hover:text-white transition-colors flex items-center">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
              
              {selectedView === 'Coin Sets' && (
                <div className="flex text-sm mb-4 border-b border-gray-700">
                  <span className="pb-2 px-1 text-gray-400">Coin Sets</span>
                  <button className="ml-auto pb-2 text-gray-400 hover:text-white transition-colors flex items-center">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}

              {/* Content Area */}
              <div className="h-96 p-4 overflow-y-auto border border-[#BBBBBB] rounded-xl space-y-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
  {selectedView === 'Coins' ? (
    getCurrentData().map((coin, index) => (
      <div
        key={index}
        className="flex items-center justify-between py-2 hover:bg-gray-700/50 rounded-lg px-2 transition-colors"
      >
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-yellow-400 transition-colors mr-2">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.57143 0H1.42857C0.640869 0 0 0.640869 0 1.42857V6.50792C0 7.29562 0.640869 7.93649 1.42857 7.93649H4.64286V9.28571H2.99003C2.79279 9.28571 2.63288 9.44563 2.63288 9.64286C2.63288 9.84009 2.79279 10 2.99003 10H7.00997C7.20738 10 7.36712 9.84009 7.36712 9.64286C7.36712 9.44563 7.20738 9.28571 7.00997 9.28571H5.35714V7.93649H8.57143C9.35931 7.93649 10 7.29562 10 6.50792V1.42857C10 0.640869 9.35931 0 8.57143 0ZM9.28571 6.50792C9.28571 6.90186 8.96519 7.2222 8.57143 7.2222H1.42857C1.03463 7.2222 0.714286 6.90186 0.714286 6.50792V1.42857C0.714286 1.03463 1.03463 0.714286 1.42857 0.714286H8.57143C8.96519 0.714286 9.28571 1.03463 9.28571 1.42857V6.50792Z" fill="#BBBBBB"/>
<path d="M7.14286 5.38571H2.85714C2.65991 5.38571 2.5 5.54562 2.5 5.74285C2.5 5.94008 2.65991 6.09999 2.85714 6.09999H7.14286C7.34026 6.09999 7.5 5.94008 7.5 5.74285C7.5 5.54562 7.34026 5.38571 7.14286 5.38571ZM3.89858 4.73472C3.96641 4.81721 4.06756 4.86499 4.17428 4.86499C4.28101 4.86499 4.38215 4.81721 4.44999 4.73472L5.08248 3.96638L5.28809 4.21645C5.3547 4.29736 5.4534 4.34497 5.55803 4.34671C5.65848 4.33991 5.76311 4.30399 5.83217 4.22534L7.41106 2.42899C7.54116 2.28076 7.52686 2.05511 7.37863 1.92501C7.23075 1.79475 7.00474 1.80887 6.87465 1.95745L5.57303 3.43834L5.35819 3.17746C5.29053 3.09497 5.18921 3.04719 5.08248 3.04719C4.97576 3.04719 4.87462 3.09497 4.80678 3.17746L4.17428 3.9458L3.74041 3.41881C3.6152 3.26639 3.39007 3.24442 3.23783 3.36998C3.08541 3.49519 3.06362 3.72032 3.189 3.87256L3.89858 4.73472Z" fill="#BBBBBB"/>
</svg>

          </button>
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-xs">{coin.icon}</span>
          </div>
          <span className="font-medium">{coin.name}</span>
        </div>
        <div className="text-right flex gap-2">
          <div className="font-semibold">{coin.price}</div>
          <div className={`text-sm flex items-center ${activeTab==="Losers" ? 'text-[#FF0000]' : 'text-[#00FF00]'}`}>
            {activeTab==="Losers" ? <Loss/> :<Gain/>}
            {coin.change}
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center py-8 text-gray-400">
      <div className="text-lg mb-2">Coin Sets Coming Soon</div>
      <div className="text-sm">Curated portfolios of crypto assets</div>
    </div>
  )}
</div>

            </div>
          </div>
        </div>
      </div>

          </div>
  
  );
};

export default CryptoDashboard;