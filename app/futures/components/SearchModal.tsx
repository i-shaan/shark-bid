"use client";
import React, { useState, useEffect } from 'react';
import { X, Search, TrendingUp, TrendingDown } from 'lucide-react';
import Loss from '@/components/icons/Loss';
import Gain from '@/components/icons/Gain';

interface CoinData {
  symbol: string;
  price: string;
  change: string;
  volume: string;
  isPositive: boolean;
}

interface CoinModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCoinSelect: (coin: string) => void;
    anchorRef: React.RefObject<HTMLButtonElement | null>;
  }

export const CoinModal: React.FC<CoinModalProps> = ({
  isOpen,
  onClose,
  onCoinSelect,
  anchorRef,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const coinData: CoinData[] = [
    { symbol: 'BTC•USDT', price: '$84,371.8', change: '-0.01%', volume: '117.6k', isPositive: false },
    { symbol: 'YFI•USDT', price: '$84,371.8', change: '+0.01%', volume: '117.6k', isPositive: true },
    { symbol: 'ETH•USDT', price: '$3,245.7', change: '+2.34%', volume: '89.2k', isPositive: true },
    { symbol: 'SOL•USDT', price: '$245.8', change: '-1.23%', volume: '156.3k', isPositive: false },
    { symbol: 'ADA•USDT', price: '$1.234', change: '+5.67%', volume: '234.1k', isPositive: true },
    { symbol: 'DOT•USDT', price: '$8.456', change: '-2.89%', volume: '67.8k', isPositive: false },
    { symbol: 'LINK•USDT', price: '$23.45', change: '+1.45%', volume: '123.4k', isPositive: true },
    { symbol: 'UNI•USDT', price: '$12.34', change: '-0.78%', volume: '98.7k', isPositive: false },
  ];

  const filteredCoins = coinData.filter(coin =>
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (anchorRef.current && isOpen) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return (
    <>
      {/* Blurred background */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* Modal positioned below button */}
      <div
        className="absolute z-50"
        style={{ top: position.top, left: position.left }}
      >
        <div className="bg-[#242329] rounded-2xl w-[600px] max-h-[80vh] overflow-hidden shadow-2xl border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-white">Select Trading Pair</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Search */}
          <div className="p-6 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-800">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-400">
              <div>Symbols</div>
              <div className="text-right">Price</div>
              <div className="text-right">24h %</div>
              <div className="text-right">Vol.</div>
            </div>
          </div>

          {/* Coin List */}
          <div className="max-h-[400px] overflow-y-auto">
            {filteredCoins.map((coin, index) => (
              <div
                key={index}
                onClick={() => onCoinSelect(coin.symbol.replace('•', '-'))}
                className="px-6 py-4 hover:bg-[#2a2a2a] cursor-pointer transition-colors duration-200 border-b border-gray-800/50 last:border-b-0"
              >
                <div className="grid grid-cols-4 gap-4 items-center">
                  {/* Symbol */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {coin.symbol.split('•')[0].charAt(0)}
                      </span>
                    </div>
                    <span className="text-white font-medium">{coin.symbol}</span>
                  </div>

                  {/* Price */}
                  <div className="text-right text-white font-medium">
                    {coin.price}
                  </div>

{/* 24h Change */}
<div
  className={`text-right font-medium flex items-center justify-end space-x-1 ${
    coin.isPositive ? 'text-emerald-400' : 'text-red-400'
  }`}
>
  {coin.isPositive ? (
   <Gain/>
  ) : (
    <Loss/>
  )}
  <span>{coin.change.replace(/[+-]/, '')}</span>
</div>


                  {/* Volume */}
                  <div className="text-right text-gray-400 font-medium">
                    {coin.volume}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCoins.length === 0 && (
            <div className="p-8 text-center text-gray-400">
              No trading pairs found matching {searchTerm}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
