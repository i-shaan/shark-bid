import React from 'react';
import { TabType, Cryptocurrency, Category } from '@/app/types/types';
import CoinList from '../Coins/CoinList';
import { cryptoCategories } from '@/app/data/mockdata';
import CryptoCategoriesTable from '../Coins/CryptoCategory';
import SpotLight from '../Coins/SpotLight';
import NewCryptoListings from '../Coins/NewListings';
interface TabContentProps {
  activeTab: TabType;
  coins: Cryptocurrency[];
  categories: Category[];
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, coins}) => {
  switch (activeTab) {
    case 'coins':
      return <CoinList coins={coins} />;
    case 'categories':
     
        return <CryptoCategoriesTable categories={cryptoCategories} />
   
    case 'spotlight':
      return (
       <SpotLight/>
      );
    case 'newListings':
      return (
        <NewCryptoListings/>
      );
    default:
      return null;
  }
};

export default TabContent;