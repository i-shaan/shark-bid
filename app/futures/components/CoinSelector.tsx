"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CoinModal } from './SearchModal';
import { useRef } from 'react';
export const CoinSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState('ETH-PERP');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleCoinSelect = (coin: string) => {
    setSelectedCoin(coin);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-[270px] bg-[#242329] rounded-[15px] flex items-center px-3 py-2">
        <Button 
        ref={buttonRef}
          onClick={() => setIsModalOpen(true)} 
          variant="ghost" 
          className="p-2 h-auto hover:bg-[#2a2831] transition-colors duration-200"
        >
          <svg 
            width="21" 
            height="15" 
            viewBox="0 0 21 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 hover:scale-110"
          >
            <path 
              d="M20.1 6H0.9C0.0719999 6 0 6.6705 0 7.5C0 8.3295 0.0719999 9 0.9 9H20.1C20.928 9 21 8.3295 21 7.5C21 6.6705 20.928 6 20.1 6ZM20.1 12H0.9C0.0719999 12 0 12.6705 0 13.5C0 14.3295 0.0719999 15 0.9 15H20.1C20.928 15 21 14.3295 21 13.5C21 12.6705 20.928 12 20.1 12ZM0.9 3H20.1C20.928 3 21 2.3295 21 1.5C21 0.6705 20.928 0 20.1 0H0.9C0.0719999 0 0 0.6705 0 1.5C0 2.3295 0.0719999 3 0.9 3Z" 
              fill="#BBBBBB"
            />
          </svg>
        </Button>
        
        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center ml-3">
          <span className="text-white font-bold text-sm">₿</span>
        </div>
        
        <div className="ml-3 font-medium text-white text-base tracking-[0.48px]">
          {selectedCoin}
        </div>
      </div>

      <CoinModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onCoinSelect={handleCoinSelect}
        anchorRef={buttonRef}
      />
    </>
  );
};