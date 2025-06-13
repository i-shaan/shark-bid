"use client";
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Breadcrumb from './Header/Breadcrumb';
import MarketStats from './MarketOverview/MarketStats';
import GainersLosers from './MarketOverview/GainersLosers';
import FearGreedIndex from './MarketOverview/FearGreed';
import CoinTabs from './Coins/CoinsTabs';
import TabContent from './Header/Tabs';
import MarketOverview from './MarketOverview/MarketOverview';
import CategoryTags from './Footer/ExploreCategory';
import { marketStats, cryptoData, gainers, losers, categories } from '../data/mockdata';
import { TabType } from '../types/types';

function Coins() {
  const [activeTab, setActiveTab] = useState<TabType>('coins');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const date = currentTime.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
  return (
    <div className="h-full bg-[#242329] text-white">
      <Header />

      {/* Padding only applied here and below */}
      <main className="pb-2 px-[140px] ">
        <Breadcrumb items={['Home', 'Coins']} />

        <h1 className="text-2xl font-bold mb-2">
          Top Cryptocurrencies Listed by Market Cap
        </h1>

        <div className="flex items-center text-sm font-medium text-white pt-2 pb-4 rounded-md">
      {/* LIVE */}
      <span className="text-red-600 font-bold mr-1">LIVE</span>
      <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-3"></span>

      {/* TIME */}
      <span className="mr-3">{time}</span>

      {/* Vertical Divider */}
      <div className="h-5 w-px bg-[#BBBBBB] opacity-60 mr-3" />

      {/* DATE */}
      <span className="text-gray-300">{date}</span>
    </div>

        <p className="text-[#BBBBBB] text-sm mb-4">
          Here is the list of cryptocurrencies sorted by market cap, featuring key players like Bitcoin and Ethereum, among a wide array of other cryptocurrencies...
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 h-[15rem]">
          <div className="md:col-span-1  ">
            <MarketStats stats={marketStats} />
          </div>
          <div className="md:col-span-1 ">
            <GainersLosers gainers={gainers} losers={losers} />
          </div>
          <div className="md:col-span-1">
            <FearGreedIndex />
          </div>
        </div>

        <MarketOverview 
          totalMarketCap={marketStats.totalMarketCap} 
          totalVolume24h={marketStats.totalVolume24h} 
        />

        <CoinTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="mt-6">
          {isLoading ? (
            <div className="min-h-[400px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <TabContent 
              activeTab={activeTab} 
              coins={cryptoData} 
              categories={categories} 
            />
          )}
        </div>

        <CategoryTags categories={categories} />
      </main>
    </div>
  );
}

export default Coins;
