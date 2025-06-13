"use client"
import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Gain from '@/components/icons/Gain';
import Loss from '@/components/icons/Loss';

import { useRouter } from 'next/navigation';
interface CryptoDataItem {
    id: number;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    volume24h: number;
    marketCap: number;
  }
  
  type SortKey = keyof CryptoDataItem | null;
  
  interface SortConfig {
    key: SortKey;
    direction: 'asc' | 'desc';
  }
  
const NewCryptoListings = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });
  const itemsPerPage = 10;
const router = useRouter();
  // Sample data for new crypto listings
  const cryptoData = [
    { id: 1, name: 'ZetaChain', symbol: 'ZETA', price: 0.65, change24h: 15.3, volume24h: 125000000, marketCap: 195000000 },
    { id: 2, name: 'Starknet', symbol: 'STRK', price: 2.45, change24h: -8.2, volume24h: 89000000, marketCap: 1200000000 },
    { id: 3, name: 'Jupiter', symbol: 'JUP', price: 0.89, change24h: 22.7, volume24h: 156000000, marketCap: 890000000 },
    { id: 4, name: 'Pyth Network', symbol: 'PYTH', price: 0.42, change24h: 5.8, volume24h: 78000000, marketCap: 420000000 },
    { id: 5, name: 'Wormhole', symbol: 'W', price: 0.28, change24h: -12.5, volume24h: 34000000, marketCap: 280000000 },
    { id: 6, name: 'Parcl', symbol: 'PRCL', price: 0.15, change24h: 8.9, volume24h: 12000000, marketCap: 75000000 },
    { id: 7, name: 'Ethena', symbol: 'ENA', price: 0.95, change24h: -3.4, volume24h: 67000000, marketCap: 475000000 },
    { id: 8, name: 'Drift Protocol', symbol: 'DRIFT', price: 1.23, change24h: 18.6, volume24h: 23000000, marketCap: 123000000 },
    { id: 9, name: 'Tensor', symbol: 'TNSR', price: 0.67, change24h: -6.7, volume24h: 19000000, marketCap: 134000000 },
    { id: 10, name: 'Helium Mobile', symbol: 'MOBILE', price: 0.0012, change24h: 45.2, volume24h: 8900000, marketCap: 12000000 },
    { id: 11, name: 'Ondo Finance', symbol: 'ONDO', price: 0.78, change24h: 11.3, volume24h: 45000000, marketCap: 780000000 },
    { id: 12, name: 'Saga', symbol: 'SAGA', price: 2.15, change24h: -15.8, volume24h: 28000000, marketCap: 215000000 },
    { id: 13, name: 'Sleepless AI', symbol: 'AI', price: 0.89, change24h: 7.4, volume24h: 15000000, marketCap: 89000000 },
    { id: 14, name: 'Portal', symbol: 'PORTAL', price: 0.45, change24h: -2.1, volume24h: 9800000, marketCap: 225000000 },
    { id: 15, name: 'Manta Network', symbol: 'MANTA', price: 1.05, change24h: 9.8, volume24h: 52000000, marketCap: 315000000 }
  ];

  const formatPrice = (price:number) => {
    if (price < 0.01) return `$${price.toFixed(6)}`;
    if (price < 1) return `$${price.toFixed(4)}`;
    return `$${price.toFixed(2)}`;
  };

  const formatPercentage = (value:number) => {

    return `${value.toFixed(1)}%`;
  };

  const formatLargeNumber = (num:number)  => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const handleSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  const renderSortIndicator = (key : SortKey) => {
    if (sortConfig.key !== key) {
      return <ChevronUp className="w-3 h-3 ml-1 opacity-50" />;
    }
    return sortConfig.direction === 'asc' ? 
      <ChevronUp className="w-3 h-3 ml-1" /> : 
      <ChevronDown className="w-3 h-3 ml-1" />;
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return cryptoData;

    return [...cryptoData].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];
      if (aValue === undefined || bValue === undefined) return 0;

      if (sortConfig.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  }, [sortConfig]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedData.slice(startIndex, startIndex + itemsPerPage);

  return (

 <div className="overflow-x-auto">
          <table className="w-full table-fixed min-w-[800px]">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
                <th className="w-16 px-4 py-3">#</th>
                <th className="w-48 px-4 py-3">Name</th>
                <th 
                  className="w-28 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
                  onClick={() => handleSort('price')}
                >
                  <div className="flex items-center justify-end">
                    Price
                    {renderSortIndicator('price')}
                  </div>
                </th>
                <th 
                  className="w-28 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
                  onClick={() => handleSort('change24h')}
                >
                  <div className="flex items-center justify-end">
                    24H
                    {renderSortIndicator('change24h')}
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
              {currentItems.map((crypto, index) => (
            <tr onClick={() => router.push(`/coins/${encodeURIComponent(crypto.symbol)}`)} key={crypto.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="w-16 px-4 py-4 text-gray-400 font-medium">
                    {startIndex + index + 1}
                  </td>
                  <td className="w-48 px-4 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs font-bold">
                          {crypto.symbol.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-white truncate">{crypto.name}</div>
                        <div className="text-xs text-gray-400">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="w-28 px-4 py-4 text-white font-medium text-right">
                    {formatPrice(crypto.price)}
                  </td>
                  <td className={`w-28 px-4 py-4 text-right font-medium ${crypto.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    <div className="flex items-center justify-end">
                      {crypto.change24h >= 0 ? 
                        <Gain/> : 
                        <Loss/> 
                      }
                      {formatPercentage(Math.abs(crypto.change24h))}
                    </div>
                  </td>
                  <td className="w-32 px-4 py-4 text-white text-right">
                    {formatLargeNumber(crypto.volume24h)}
                  </td>
                  <td className="w-32 px-4 py-4 text-white text-right">
                    {formatLargeNumber(crypto.marketCap)}
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

export default NewCryptoListings;