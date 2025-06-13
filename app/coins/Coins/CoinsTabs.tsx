
import React from 'react';
import { TabType } from '@/app/types/types';

interface CoinTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const CoinTabs: React.FC<CoinTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      <button
        onClick={() => onTabChange('coins')}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          activeTab === 'coins'
            ? 'bg-[#BBBBBB] text-[#242329]'
            : ' hover:bg-gray-700 hover:text-white border border-[#bbbbbb4d]'
        } transition-colors`}
      >
        Coins
      </button>
      <button
        onClick={() => onTabChange('categories')}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          activeTab === 'categories'
            ? 'bg-[#BBBBBB] text-[#242329]'
            : ' hover:bg-gray-700 hover:text-white border border-[#bbbbbb4d]'
        } transition-colors`}
      >
        Crypto Categories
      </button>
      <button
        onClick={() => onTabChange('spotlight')}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          activeTab === 'spotlight'
            ? 'bg-[#BBBBBB] text-[#242329]'
            : ' hover:bg-gray-700 hover:text-white border border-[#bbbbbb4d]'
        } transition-colors`}
      >
        Spotlight
      </button>
      <button
        onClick={() => onTabChange('newListings')}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          activeTab === 'newListings'
            ? 'bg-[#BBBBBB] text-[#242329]'
            : ' hover:bg-gray-700 hover:text-white border border-[#bbbbbb4d]'
        } transition-colors`}
      >
        New Listings
      </button>
    </div>
  );
};

export default CoinTabs;