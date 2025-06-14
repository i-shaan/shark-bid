"use client";
import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useParams } from 'next/navigation';

import Breadcrumb from '@/app/coins/Header/Breadcrumb';
import Header_Home from '@/app/profile/home/Header';
import { useRouter } from 'next/navigation';
import Gain from '@/components/icons/Gain';
import Loss from '@/components/icons/Loss';
interface CoinData {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  volume24h: number;
  marketCap: number;
  icon: string;
}

interface SortConfig {
  key: keyof CoinData | null;
  direction: 'asc' | 'desc';
}

const CryptoSpotlights: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'desc' });
const router= useRouter();
  const itemsPerPage = 12;

  const { type } = useParams() as { type: string };

  const gainersData = [
    { id: 1, name: 'Stratis', symbol: 'STRAX', price: 0.85, change1h: 2.4, change24h: 51.72, change7d: 89.3, volume24h: 103177.93, marketCap: 551655.05, icon: '🔷' },
    { id: 2, name: 'Helium', symbol: 'HNT', price: 6.42, change1h: 1.8, change24h: 34.56, change7d: 67.2, volume24h: 89234.12, marketCap: 1243567.89, icon: '🎈' },
    { id: 3, name: 'Fantom', symbol: 'FTM', price: 0.47, change1h: 3.2, change24h: 28.94, change7d: 45.7, volume24h: 156789.45, marketCap: 987654.32, icon: '👻' },
    { id: 4, name: 'Chainlink', symbol: 'LINK', price: 14.73, change1h: 1.5, change24h: 22.18, change7d: 38.9, volume24h: 234567.89, marketCap: 8765432.10, icon: '🔗' },
    { id: 5, name: 'Polygon', symbol: 'MATIC', price: 0.92, change1h: 2.1, change24h: 19.85, change7d: 34.2, volume24h: 345678.90, marketCap: 4567890.12, icon: '🔺' },
    { id: 6, name: 'Avalanche', symbol: 'AVAX', price: 36.45, change1h: 1.2, change24h: 18.76, change7d: 29.8, volume24h: 456789.01, marketCap: 12345678.90, icon: '🏔️' },
    { id: 7, name: 'Cosmos', symbol: 'ATOM', price: 9.87, change1h: 0.9, change24h: 16.43, change7d: 25.6, volume24h: 567890.12, marketCap: 3456789.01, icon: '⚛️' },
    { id: 8, name: 'Algorand', symbol: 'ALGO', price: 0.31, change1h: 1.4, change24h: 15.29, change7d: 22.4, volume24h: 678901.23, marketCap: 2345678.90, icon: '🟢' },
    { id: 9, name: 'Near Protocol', symbol: 'NEAR', price: 2.15, change1h: 0.8, change24h: 14.67, change7d: 19.8, volume24h: 789012.34, marketCap: 5678901.23, icon: '🌐' },
    { id: 10, name: 'Cardano', symbol: 'ADA', price: 0.48, change1h: 1.1, change24h: 13.52, change7d: 18.9, volume24h: 890123.45, marketCap: 15678901.23, icon: '💎' },
    { id: 11, name: 'Solana', symbol: 'SOL', price: 98.76, change1h: 0.7, change24h: 12.84, change7d: 16.7, volume24h: 901234.56, marketCap: 43210987.65, icon: '☀️' },
    { id: 12, name: 'Polkadot', symbol: 'DOT', price: 5.43, change1h: 0.6, change24h: 11.39, change7d: 14.2, volume24h: 123456.78, marketCap: 6789012.34, icon: '🔴' },
    { id: 13, name: 'Uniswap', symbol: 'UNI', price: 6.89, change1h: 0.5, change24h: 10.76, change7d: 12.8, volume24h: 234567.89, marketCap: 4123456.78, icon: '🦄' },
    { id: 14, name: 'Arbitrum', symbol: 'ARB', price: 1.23, change1h: 0.4, change24h: 9.45, change7d: 11.3, volume24h: 345678.90, marketCap: 2987654.32, icon: '🔷' },
    { id: 15, name: 'Optimism', symbol: 'OP', price: 2.67, change1h: 0.3, change24h: 8.92, change7d: 10.1, volume24h: 456789.01, marketCap: 1876543.21, icon: '🔴' }
  ];

  // Sample data for losers (negative changes)
  const losersData = [
    { id: 1, name: 'Terra Classic', symbol: 'LUNC', price: 0.00012, change1h: -3.4, change24h: -28.45, change7d: -45.6, volume24h: 78901.23, marketCap: 123456.78, icon: '🌍' },
    { id: 2, name: 'ApeCoin', symbol: 'APE', price: 1.23, change1h: -2.8, change24h: -24.67, change7d: -38.9, volume24h: 89012.34, marketCap: 456789.01, icon: '🐵' },
    { id: 3, name: 'Shiba Inu', symbol: 'SHIB', price: 0.000009, change1h: -2.1, change24h: -22.89, change7d: -35.2, volume24h: 90123.45, marketCap: 5432109.87, icon: '🐶' },
    { id: 4, name: 'Dogecoin', symbol: 'DOGE', price: 0.076, change1h: -1.9, change24h: -19.34, change7d: -31.8, volume24h: 123456.78, marketCap: 10987654.32, icon: '🐕' },
    { id: 5, name: 'Litecoin', symbol: 'LTC', price: 92.45, change1h: -1.6, change24h: -17.56, change7d: -28.4, volume24h: 234567.89, marketCap: 6789012.34, icon: '🥈' },
    { id: 6, name: 'Bitcoin Cash', symbol: 'BCH', price: 234.67, change1h: -1.4, change24h: -16.78, change7d: -25.9, volume24h: 345678.90, marketCap: 4567890.12, icon: '💰' },
    { id: 7, name: 'Ethereum Classic', symbol: 'ETC', price: 18.92, change1h: -1.2, change24h: -15.43, change7d: -23.7, volume24h: 456789.01, marketCap: 2345678.90, icon: '⚡' },
    { id: 8, name: 'Monero', symbol: 'XMR', price: 143.56, change1h: -1.1, change24h: -14.29, change7d: -21.5, volume24h: 567890.12, marketCap: 2987654.32, icon: '🔒' },
    { id: 9, name: 'Dash', symbol: 'DASH', price: 45.78, change1h: -0.9, change24h: -13.67, change7d: -19.8, volume24h: 678901.23, marketCap: 1456789.01, icon: '💨' },
    { id: 10, name: 'Zcash', symbol: 'ZEC', price: 38.92, change1h: -0.8, change24h: -12.84, change7d: -18.2, volume24h: 789012.34, marketCap: 1234567.89, icon: '🛡️' },
    { id: 11, name: 'Stellar', symbol: 'XLM', price: 0.11, change1h: -0.7, change24h: -11.95, change7d: -16.7, volume24h: 890123.45, marketCap: 2876543.21, icon: '⭐' },
    { id: 12, name: 'Tron', symbol: 'TRX', price: 0.067, change1h: -0.6, change24h: -10.73, change7d: -15.4, volume24h: 901234.56, marketCap: 6012345.67, icon: '⚡' },
    { id: 13, name: 'VeChain', symbol: 'VET', price: 0.019, change1h: -0.5, change24h: -9.68, change7d: -14.1, volume24h: 123457.89, marketCap: 1398765.43, icon: '✅' },
    { id: 14, name: 'IOTA', symbol: 'MIOTA', price: 0.18, change1h: -0.4, change24h: -8.92, change7d: -12.8, volume24h: 234568.90, marketCap: 567890.12, icon: '🔗' },
    { id: 15, name: 'Neo', symbol: 'NEO', price: 12.34, change1h: -0.3, change24h: -7.85, change7d: -11.5, volume24h: 345679.01, marketCap: 876543.21, icon: '🟢' }
  ];

  const currentData = type === 'gainers' ? gainersData : losersData;

  const formatPrice = (price: number): string => {
    if (price < 0.001) return `$${price.toFixed(8)}`;
    if (price < 0.01) return `$${price.toFixed(6)}`;
    if (price < 1) return `$${price.toFixed(4)}`;
    return `$${price.toFixed(2)}`;
  };

  const formatPercentage = (value: number): string => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
  };

  const formatLargeNumber = (num: number): string => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const handleSort = (key: keyof CoinData): void => {
    let direction: 'asc' | 'desc' = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const renderSortIndicator = (key: keyof CoinData) => {
    if (sortConfig.key !== key) {
      return <ChevronDown className="w-3 h-3 ml-1 opacity-50" />;
    }
    return sortConfig.direction === 'desc' ? (
      <ChevronDown className="w-3 h-3 ml-1" />
    ) : (
      <ChevronUp className="w-3 h-3 ml-1" />
    );
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return currentData;

    return [...currentData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof CoinData];
      const bValue = b[sortConfig.key as keyof CoinData];

      if (sortConfig.direction === 'desc') {
        return bValue > aValue ? 1 : -1;
      }
      return aValue > bValue ? 1 : -1;
    });
  }, [sortConfig, currentData]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedData.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 when switching tabs


  return (
    <div className="bg-[#242329] min-h-screen ">
       <Header_Home/>
        <main className="pb-[5rem] px-[140px] ">
        <Breadcrumb items={['Home', 'Spotlight', typeof type === 'string' ? type : 'unknown']} />
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Top Cryptocurrency {type === 'gainers' ? 'Gainers' : 'Losers'} Today
          </h1>
          <p className="text-gray-400 max-w-4xl">
            {type === 'gainers' 
              ? 'Here is the list of cryptocurrencies, sorted by market cap, featuring key players like Bitcoin and Ethereum, among a wide array of other cryptocurrencies. This list provides a clear view of each crypto\'s market value and ranking, perfect for anyone delving into the crypto market.'
              : 'Discover the biggest cryptocurrency losers today, sorted by their price decline over the past 24 hours. Monitor market downturns and identify potential opportunities in the volatile crypto market.'
            }
          </p>
        </div>



        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-fixed min-w-[900px]">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
                <th className="w-16 px-4 py-3">#</th>
                <th className="w-48 px-4 py-3">Coin</th>
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
                  className="w-24 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
                  onClick={() => handleSort('change1h')}
                >
                  <div className="flex items-center justify-end">
                    1H
                    {renderSortIndicator('change1h')}
                  </div>
                </th>
                <th 
                  className="w-24 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
                  onClick={() => handleSort('change24h')}
                >
                  <div className="flex items-center justify-end">
                    24H
                    {renderSortIndicator('change24h')}
                  </div>
                </th>
                <th 
                  className="w-24 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
                  onClick={() => handleSort('change7d')}
                >
                  <div className="flex items-center justify-end">
                    7D
                    {renderSortIndicator('change7d')}
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
                <tr       onClick={() => router.push(`/coins/${encodeURIComponent(crypto.symbol)}`)} key={crypto.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="w-16 px-4 py-4 text-gray-400 font-medium">
                    {startIndex + index + 1}
                  </td>
                  <td className="w-48 px-4 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-lg">{crypto.icon}</span>
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
                  <td className={`w-24 px-4 py-4 text-right font-medium ${crypto.change1h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
  <div className="flex items-center justify-end gap-1">
    {crypto.change1h >= 0 ? <Gain /> : <Loss />}
    {Math.abs(crypto.change1h).toFixed(2)}%
  </div>
</td>

<td className={`w-24 px-4 py-4 text-right font-medium ${crypto.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
  <div className="flex items-center justify-end gap-1">
    {crypto.change24h >= 0 ? <Gain /> : <Loss />}
    {Math.abs(crypto.change24h).toFixed(2)}%
  </div>
</td>

<td className={`w-24 px-4 py-4 text-right font-medium ${crypto.change7d >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
  <div className="flex items-center justify-end gap-1">
    {crypto.change7d >= 0 ? <Gain /> : <Loss />}
    {Math.abs(crypto.change7d).toFixed(2)}%
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

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                What are {type === 'gainers' ? 'top crypto movers' : 'crypto losers'}?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {type === 'gainers' 
                  ? 'A "top mover" refers to a crypto coin that has the most amount of movement in its price or trading volume within a specific time period, indicating notable market activity or interest from traders towards the topgainers coin.'
                  : 'Crypto losers are cryptocurrencies that have experienced the largest price declines over a specific time period, typically 24 hours. These represent coins facing selling pressure or negative market sentiment.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Who are the top crypto {type === 'gainers' ? 'gainers' : 'losers'} today?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {type === 'gainers'
                  ? 'Today\'s top crypto gainer is Stratis, with an impressive percentage gain of 51.72% over the 24h period, highlighting significant investor interest and market momentum.'
                  : 'Today\'s biggest crypto losers include Terra Classic and ApeCoin, experiencing significant declines due to various market factors including regulatory concerns and reduced investor confidence.'
                }
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CryptoSpotlights;