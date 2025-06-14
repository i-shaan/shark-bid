import React from "react";
import { CoinSelector } from "../components/CoinSelector";
import { CoinDetails } from "../components/Coindetails";
import { ChartSection } from "../components/ChartSection";
import { TablesSection } from "../components/TablesSection";
import { TradingPanel } from "../components/TradingPanel";
import Header_Home from "@/app/profile/home/Header";

const FuturesMarket = () => {
  return (
    <div className="bg-[#1a191d] flex flex-col w-full h-[1140px]">
      <div className="h-full bg-[#1a191d] w-full flex flex-col">
        {/* Top navigation - Fixed height */}
        <Header_Home/>

        {/* Main content layout - 11/14 left, 3/14 right - Flex grow to fill remaining space */}
        <div className="flex p-5 gap-2 flex-1 overflow-hidden">
          {/* Left side - 11/14 width */}
          <div className="w-11/14 flex flex-col gap-2 h-full">
            {/* Top level - Coin selector and details - Fixed height */}
            <div className="flex gap-2 flex-shrink-0 h-[5%] ">
              <CoinSelector />
              <CoinDetails />
            </div>

            {/* Middle level - Chart section - Fixed height */}
            <div className="flex-shrink-0 h-[47.5%]">
              <ChartSection />
            </div>

            {/* Bottom level - Tables - Flex grow to fill remaining space */}
            <div className="flex-1 min-h-0">
              <TablesSection />
            </div>
          </div>

          {/* Right side - Trading panel - 3/14 width - Full height */}
          <div className="w-3/14 h-full">
            <TradingPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturesMarket;