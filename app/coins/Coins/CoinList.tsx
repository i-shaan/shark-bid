"use client"
import React, { useState } from 'react';
import { Cryptocurrency } from '@/app/types/types';
import { formatCurrency, formatLargeNumber, formatPercentage } from '@/app/utils/formatters';
import Image from 'next/image';
import Gain from '@/components/icons/Gain';
import Loss from '@/components/icons/Loss';
import { useRouter } from 'next/navigation';

interface CoinListProps {
  coins: Cryptocurrency[];
}

type SortKey = 'rank' | 'price' | 'change1h' | 'change24h' | 'change7d' | 'volume24h' | 'marketCap';
type SortDirection = 'asc' | 'desc';

const CoinList: React.FC<CoinListProps> = ({ coins }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: 'rank',
    direction: 'asc',
  });
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  

  const sortedCoins = [...coins].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedCoins.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(coins.length / itemsPerPage);

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

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed min-w-[900px]">
        <thead>
          <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
            <th className="w-8 px-2 py-3"></th>
            <th className="w-12 px-2 py-3 text-center">#</th>
            <th className="w-48 px-4 py-3">Coin</th>
            <th 
              className="w-24 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
              onClick={() => handleSort('price')}
            >
              <div className="flex items-center justify-end">
                Price
                {renderSortIndicator('price')}
              </div>
            </th>
            <th 
              className="w-20 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
              onClick={() => handleSort('change1h')}
            >
              <div className="flex items-center justify-end">
                1H
                {renderSortIndicator('change1h')}
              </div>
            </th>
            <th 
              className="w-20 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
              onClick={() => handleSort('change24h')}
            >
              <div className="flex items-center justify-end">
                24H
                {renderSortIndicator('change24h')}
              </div>
            </th>
            <th 
              className="w-20 px-4 py-3 cursor-pointer hover:text-white transition-colors text-right"
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
          {currentItems.map((coin) => (
            <tr       onClick={() => router.push(`/coins/${encodeURIComponent(coin.symbol)}`)} key={coin.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
              <td className="w-8 px-2 py-4 text-center">
                <div className="flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.57143 0H1.42857C0.640869 0 0 0.640869 0 1.42857V6.50792C0 7.29562 0.640869 7.93649 1.42857 7.93649H4.64286V9.28571H2.99003C2.79279 9.28571 2.63288 9.44563 2.63288 9.64286C2.63288 9.84009 2.79279 10 2.99003 10H7.00997C7.20738 10 7.36712 9.84009 7.36712 9.64286C7.36712 9.44563 7.20738 9.28571 7.00997 9.28571H5.35714V7.93649H8.57143C9.35931 7.93649 10 7.29562 10 6.50792V1.42857C10 0.640869 9.35931 0 8.57143 0ZM9.28571 6.50792C9.28571 6.90186 8.96519 7.2222 8.57143 7.2222H1.42857C1.03463 7.2222 0.714286 6.90186 0.714286 6.50792V1.42857C0.714286 1.03463 1.03463 0.714286 1.42857 0.714286H8.57143C8.96519 0.714286 9.28571 1.03463 9.28571 1.42857V6.50792Z"
                      fill="#BBBBBB"
                    />
                    <path
                      d="M7.14286 5.38571H2.85714C2.65991 5.38571 2.5 5.54562 2.5 5.74285C2.5 5.94008 2.65991 6.09999 2.85714 6.09999H7.14286C7.34026 6.09999 7.5 5.94008 7.5 5.74285C7.5 5.54562 7.34026 5.38571 7.14286 5.38571ZM3.89858 4.73472C3.96641 4.81721 4.06756 4.86499 4.17428 4.86499C4.28101 4.86499 4.38215 4.81721 4.44999 4.73472L5.08248 3.96638L5.28809 4.21645C5.3547 4.29736 5.4534 4.34497 5.55803 4.34671C5.65848 4.33991 5.76311 4.30399 5.83217 4.22534L7.41106 2.42899C7.54116 2.28076 7.52686 2.05511 7.37863 1.92501C7.23075 1.79475 7.00474 1.80887 6.87465 1.95745L5.57303 3.43834L5.35819 3.17746C5.29053 3.09497 5.18921 3.04719 5.08248 3.04719C4.97576 3.04719 4.87462 3.09497 4.80678 3.17746L4.17428 3.9458L3.74041 3.41881C3.6152 3.26639 3.39007 3.24442 3.23783 3.36998C3.08541 3.49519 3.06362 3.72032 3.189 3.87256L3.89858 4.73472Z"
                      fill="#BBBBBB"
                    />
                  </svg>
                </div>
              </td>
              <td className="w-12 px-2 py-4 text-center">
                <span className="text-gray-400 text-sm">{coin.rank}</span>
              </td>
              <td className="w-48 px-4 py-4">
                <div className="flex items-center">
                  <Image
                    src="/download.png"
                    alt={`${coin.name} logo`}
                    className="h-6 w-6 rounded-full mr-3 flex-shrink-0"
                    width={24}
                    height={24}
       
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-white truncate">{coin.name}</div>
                    <div className="text-xs text-gray-400 truncate">{coin.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="w-24 px-4 py-4 text-white font-medium text-right">
                {formatCurrency(coin.price)}
              </td>
              <td className={`w-20 px-4 py-4 text-right font-medium ${coin.change1h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
  <div className="flex items-center justify-end space-x-1">
    {coin.change1h >= 0 ? <Gain /> : <Loss />}
    <span>{formatPercentage(Math.abs(coin.change1h))}</span>
  </div>
</td>

<td className={`w-20 px-4 py-4 text-right font-medium ${coin.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
  <div className="flex items-center justify-end space-x-1">
    {coin.change24h >= 0 ? <Gain /> : <Loss />}
    <span>{formatPercentage(Math.abs(coin.change24h))}</span>
  </div>
</td>

<td className={`w-20 px-4 py-4 text-right font-medium ${coin.change7d >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
  <div className="flex items-center justify-end space-x-1">
    {coin.change7d >= 0 ? <Gain /> : <Loss />}
    <span>{formatPercentage(Math.abs(coin.change7d))}</span>
  </div>
</td>

              <td className="w-32 px-4 py-4 text-white text-right">
                {formatLargeNumber(coin.volume24h)}
              </td>
              <td className="w-32 px-4 py-4 text-white text-right">
                {formatLargeNumber(coin.marketCap)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
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
    </div>
  );
};

export default CoinList;