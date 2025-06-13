'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, LayoutDashboard } from 'lucide-react'; // Example icons

const Header: React.FC = () => {
  const pathname = usePathname();

  const isCoinActive = pathname.endsWith('/coins');
  const isFutureActive = pathname.endsWith('/future');

  const tickers = [
    { name: 'MANTRA', price: 6.137, change: -3.0 },
    { name: 'MANTRA', price: 6.137, change: -3.0 },
  ];

  return (
    <header className="text-white">
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
      <div className="container py-4 flex items-center justify-between mx-auto">
        {/* Left: Logo & Nav */}
        <div className="flex items-center space-x-8">
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

          {/* Divider */}
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

        {/* Right: Icons and Button */}
        <div className="flex items-center space-x-4">
          <button className="w-10 h-10 bg-[#0E0F11] rounded-xl flex items-center justify-center border border-[#2C2D31]">
            <LayoutDashboard className="text-white w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#0E0F11] rounded-xl flex items-center justify-center border border-[#2C2D31]">
            <Settings className="text-white w-5 h-5" />
          </button>
          <button className="bg-[#FFC801] hover:bg-yellow-500 text-black font-semibold rounded-xl px-6 py-2 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
