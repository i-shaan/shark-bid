"use client";
import React, { useState } from 'react';
import { GainerLoser } from '../../types/types';
import { formatCurrency } from '../../utils/formatters';
import Image from 'next/image';
import Link from 'next/link';
interface GainersLosersProps {
  gainers: GainerLoser[];
  losers: GainerLoser[];
}

const GainersLosers: React.FC<GainersLosersProps> = ({ gainers, losers }) => {
  const [activeTab, setActiveTab] = useState<'gainers' | 'losers'>('gainers');

  return (
    <div
      className="rounded-lg p-6 h-full border border-[#bbbbbb1a]"
      style={{
        background: 'linear-gradient(101.13deg, #242329 0%, #3B3740 106.79%, #58525E 122.25%)',
      }}
    >
      <div className="flex mb-4">
        <button
          className={`pb-2 px-4 text-sm font-bold ${
            activeTab === 'gainers'
              ? 'text-white border-b-2 border-white'
              : 'text-[#bbbbbb] hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('gainers')}
        >
          Gainers
        </button>
        <button
          className={`pb-2 px-4 text-sm font-bold ${
            activeTab === 'losers'
              ? 'text-white border-b-2 border-white'
              : 'text-[#bbbbbb] hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('losers')}
        >
          Losers
        </button>
        <div className="ml-auto">
        <Link
  href={`/spotlight/${activeTab}`}
  className="text-xs text-[#bbbbbb] hover:text-[#bbbbbb] flex items-center cursor-pointer"
>
  View All ›
</Link>


        </div>
      </div>

      <div className="space-y-3">
        {(activeTab === 'gainers' ? gainers : losers).map((item) => {
          const isGainer = item.change24h >= 0;
          return (
            <div key={item.id} className="flex items-center justify-between py-1">
<div className="flex items-center gap-4">
  {/* Left Icon */}
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

  {/* Coin image */}
  <Image
    width={24}
    height={24}
    src="/coin.png"
    alt={item.name}
    className="w-6 h-6 rounded-full object-cover"
  />

  {/* Coin name */}
  <span className="text-sm text-white">{item.name}</span>
</div>

              <div className="text-right flex items-center gap-2">
                <div className="text-sm text-white">{formatCurrency(item.price)}</div>
                <div
                  className={`text-sm flex items-center font-medium ${
                    isGainer ? 'text-[#00FF00]' : 'text-[#FF0000]'
                  }`}
                >
                  {/* Custom SVG Arrow */}
                  {isGainer ? (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <path
                        d="M3.97251 1.48306C4.46961 0.765552 5.53039 0.765552 6.02749 1.48306L8.83693 5.53813C9.41128 6.36714 8.81796 7.5 7.80943 7.5L2.19056 7.5C1.18204 7.5 0.588719 6.36713 1.16307 5.53813L3.97251 1.48306Z"
                        fill="#00FF00"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 rotate-180"
                    >
                      <path
                        d="M3.97251 1.48306C4.46961 0.765552 5.53039 0.765552 6.02749 1.48306L8.83693 5.53813C9.41128 6.36714 8.81796 7.5 7.80943 7.5L2.19056 7.5C1.18204 7.5 0.588719 6.36713 1.16307 5.53813L3.97251 1.48306Z"
                        fill="#FF4D4D"
                      />
                    </svg>
                  )}
                  <span>{Math.abs(item.change24h).toFixed(2)}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GainersLosers;
