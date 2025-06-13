"use client";
import React, { useState } from 'react';
import {  formatLargeNumber, formatPercentage } from '@/app/utils/formatters';
import { CryptoCategory } from '@/app/types/types';
import Gain from '@/components/icons/Gain';
import Loss from '@/components/icons/Loss';
import { useRouter } from 'next/navigation';


interface CryptoCategoriesTableProps {
  categories: CryptoCategory[];
}

type SortKey = 'numberOfCoins' | 'avgPriceChange' | 'volume24h' | 'marketCap';
type SortDirection = 'asc' | 'desc';

const CryptoCategoriesTable: React.FC<CryptoCategoriesTableProps> = ({ categories }) => {
    const category = Array.from({ length: 45 }, (_, i) => ({
        ...categories,
        name: `Category ${i + 1}`,
        numberOfCoins: 100 + i,
        avgPriceChange: parseFloat((Math.random() * 10 - 5).toFixed(2)),
        volume24h: 50000000 + i * 1000000,
        marketCap: 100000000 + i * 10000000,
      }));
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: 'marketCap',
    direction: 'desc',
  });
const router= useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortedCategories = [...category].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination - Fixed to use the correct array length
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedCategories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedCategories.length / itemsPerPage); // Fixed this line

  const handleSort = (key: SortKey) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const renderSortIndicator = (key: SortKey) => {
    const isActive = sortConfig.key === key;
    return (
      <svg 
        width="8" 
        height="12" 
        viewBox="0 0 8 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1 inline-block"
      >
        <path 
          d="M4.83468 10.735C4.43943 11.334 3.56057 11.334 3.16533 10.735L1.55912 8.30074C1.12043 7.63589 1.59725 6.75 2.3938 6.75L5.6062 6.75C6.40275 6.75 6.87957 7.63589 6.44088 8.30074L4.83468 10.735Z" 
          fill={isActive && sortConfig.direction === 'desc' ? '#10B981' : '#666666'}
        />
        <path 
          d="M3.16533 1.26499C3.56057 0.665978 4.43943 0.665978 4.83468 1.26499L6.44088 3.69926C6.87957 4.36411 6.40275 5.25 5.6062 5.25L2.3938 5.25C1.59725 5.25 1.12043 4.36411 1.55912 3.69926L3.16533 1.26499Z" 
          fill={isActive && sortConfig.direction === 'asc' ? '#10B981' : '#666666'}
        />
      </svg>
    );
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'layer 1s':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="16" height="16" rx="2" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5"/>
            <rect x="6" y="6" width="8" height="8" rx="1" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="1"/>
            <rect x="8" y="8" width="4" height="4" rx="0.5" fill="#3B82F6"/>
          </svg>
        );
      case 'defi':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.5"/>
            <path d="M6 10L9 13L14 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'meme coins':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.5"/>
            <circle cx="7" cy="8" r="1.5" fill="#F59E0B"/>
            <circle cx="13" cy="8" r="1.5" fill="#F59E0B"/>
            <path d="M6 13C6 13 8 15 10 15C12 15 14 13 14 13" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'gaming':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="16" height="8" rx="4" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5"/>
            <circle cx="6" cy="11" r="1" fill="#8B5CF6"/>
            <circle cx="14" cy="11" r="1" fill="#8B5CF6"/>
            <rect x="4" y="5" width="2" height="2" rx="0.5" fill="#8B5CF6"/>
            <rect x="14" y="5" width="2" height="2" rx="0.5" fill="#8B5CF6"/>
          </svg>
        );
      case 'ai tokens':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="16" height="16" rx="8" fill="#EC4899" fillOpacity="0.2" stroke="#EC4899" strokeWidth="1.5"/>
            <path d="M10 6V14M6 10H14" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="10" cy="10" r="2" fill="#EC4899" fillOpacity="0.5"/>
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" fill="#6B7280" fillOpacity="0.2" stroke="#6B7280" strokeWidth="1.5"/>
          </svg>
        );
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed min-w-[800px]">
        <thead>
          <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
         
            <th className="w-48 px-4 py-3">Category</th>
            <th 
              className="w-28 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
              onClick={() => handleSort('numberOfCoins')}
            >
              <div className="flex items-center justify-end">
                # of Coins
                {renderSortIndicator('numberOfCoins')}
              </div>
            </th>
            <th 
              className="w-28 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
              onClick={() => handleSort('avgPriceChange')}
            >
              <div className="flex items-center justify-end">
                Avg Change
                {renderSortIndicator('avgPriceChange')}
              </div>
            </th>
            <th 
              className="w-32 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
              onClick={() => handleSort('volume24h')}
            >
              <div className="flex items-center justify-end">
                24H Volume
                {renderSortIndicator('volume24h')}
              </div>
            </th>
            <th 
              className="w-32 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
              onClick={() => handleSort('marketCap')}
            >
              <div className="flex items-center justify-end">
                Market Cap
                {renderSortIndicator('marketCap')}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((category, index) => (
            <tr onClick={() => router.push(`/coins/category`)} key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">

              <td className="w-48 px-4 py-4">
                <div className="flex items-center">
                  <div className="mr-3 flex-shrink-0">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-white truncate">{category.name}</div>
                    <div className="text-xs text-gray-400">Category</div>
                  </div>
                </div>
              </td>
              <td className="w-28 px-4 py-4 text-white font-medium text-right">
                {category.numberOfCoins.toLocaleString()}
              </td>
              <td className={`w-28 px-4 py-4 text-right font-medium ${category.avgPriceChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
  <div className="flex items-center justify-end space-x-1">
    {category.avgPriceChange >= 0 ? <Gain /> : <Loss />}
    <span>{formatPercentage(Number(Math.abs(category.avgPriceChange)))}</span>
  </div>
</td>

              <td className="w-32 px-4 py-4 text-white text-right">
                {formatLargeNumber(category.volume24h)}
              </td>
              <td className="w-32 px-4 py-4 text-white text-right">
                {formatLargeNumber(category.marketCap)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ‹
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md transition-colors ${
                currentPage === index + 1
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-gray-700 hover:text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};



export default CryptoCategoriesTable;