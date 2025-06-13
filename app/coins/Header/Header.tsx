'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const isCoinActive = pathname.endsWith('/coins');
  const isFutureActive = pathname.endsWith('/future');

  const tickers = [
    { name: 'MANTRA', price: 6.137, change: -3.0 },
    { name: 'MANTRA', price: 6.137, change: -3.0 },
  ];

  return (
    <header className=" text-white">
      {/* Ticker Bar */}
      <div className="w-full overflow-hidden bg-gray-950 py-2 text-xs">
        <div className="animate-marquee flex whitespace-nowrap">
          {tickers.map((ticker, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="font-medium mr-1">{ticker.name}</span>
              <span>${ticker.price.toFixed(3)}</span>
              <span className="ml-1 text-red-500">▼ {ticker.change.toFixed(2)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4 flex items-center space-x-8 mx-auto">
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            
          }}
          className="flex items-center text-lg"
        >
          <span style={{ color: '#FFFFFF' }}>Shark</span>
          <span style={{ color: '#32FE31' }}>bid</span>
        </div>

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-white/30"></div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link
            href="/coins"
            className={`text-base font-semibold ${
              isCoinActive ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
            } transition-colors`}
          >
            Coins
          </Link>
          <Link
            href="/futures"
            className={`text-base font-semibold ${
              isFutureActive ? 'text-white' : 'text-gray-400 hover:text-white'
            } transition-colors`}
          >
            Futures
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
