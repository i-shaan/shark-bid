"use client";
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Copy, TrendingDown } from 'lucide-react';

const Investing = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [currentView, setCurrentView] = useState<'default' | 'deposit' | 'depositConfirmation' | 'buyDip'>('default');
  const [targetPrice, setTargetPrice] = useState(1000);
  const [dipInvestmentAmount, setDipInvestmentAmount] = useState('');

  const renderDeposit = () => (
    <Card className="bg-[#3A393F] border border-[#BBBBBB1A] p-6">
      <div className="flex items-center ">
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('default')} className="text-white hover:bg-gray-600 mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h3 className="text-lg font-bold text-white">Deposit ARDR</h3>
      </div>

      <p className="text-[#bbbbbb] ">Use below details to receive ARDR on Sharkbid</p>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-[#bbbbbb] mb-2 block">Network</label>
          <div className="bg-[#FFFFFF1A] rounded-lg p-4">
            <span className="text-white text-xl font-bold">$0</span>
          </div>
        </div>

        <div>
          <label className="text-sm text-[#bbbbbb] mb-2 block">Wallet Address</label>
          <div className=" rounded-lg py-4 flex items-center justify-between">
            <span className="text-white text-lg break-all mr-4">
              1DC2QrTPvLfznkCPnyNqEcmZKZzE8YHiLM
            </span>
            <Button variant="ghost" size="sm" className="text-[#FFC801] hover:bg-gray-600 flex items-center gap-2">
              Copy <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="  rounded-lg p-4">
          <p className="text-[#FFC801] text-sm">
            Please ensure that you enter the correct Address and Network on your source wallet
          </p>
        </div>

        <Button
          className="w-full bg-[#FFC801] hover:bg-yellow-600 text-[#212121] font-semibold rounded-full h-12"
          onClick={() => setCurrentView('depositConfirmation')}
        >
          Continue
        </Button>
      </div>
    </Card>
  );

  const renderDepositConfirmation = () => (
    <div className="bg-[#3A393F] border border-[#BBBBBB1A] p-8 flex flex-col items-center text-center text-white pt-[8rem] rounded-xl">
      <h3 className="text-xl font-bold py-2">We will notify you when the deposit is received</h3>
      <p className="text-sm text-[#bbbbbb]">It typically takes 0-3 hrs to process</p>
      <Button
        className="mt-4 w-full bg-[#FFC801] hover:bg-yellow-600 text-[#212121] font-semibold rounded-full h-12 px-10"
        onClick={() => setCurrentView('default')}
      >
        Done
      </Button>
    </div>
  );

  const renderBuyDip = () => (
    <div className="bg-[#3A393F] border border-[#BBBBBB1A] p-6 rounded-xl">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('default')} className="text-white hover:bg-gray-600 mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h3 className="text-lg font-bold text-white">BUY THE DIP</h3>
      </div>

      <p className="text-white">Balance: 0 USDT ($0.000)</p>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <label className="text-sm text-[#bbbbbb] mb-2 block">When price reaches</label>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#bbbbbb]">$</span>
              <Input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="pl-8 bg-[#FFFFFF1A] text-white border-gray-600 appearance-none focus:outline-none h-full"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="text-right mb-2">
              <span className="text-sm text-[#bbbbbb]">Current Price: $0.1000</span>
            </div>
            <div className="bg-[#FFFFFF1A] rounded-lg p-3 text-center flex-1 flex items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="text-red-500 font-semibold">3.00 %</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm text-[#bbbbbb] mb-2 block">Buy ARDR worth</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#bbbbbb]">$</span>
            <Input
              type="text"
              value={dipInvestmentAmount}
              onChange={(e) => setDipInvestmentAmount(e.target.value)}
              placeholder="Enter investment amount"
              className="pl-8 bg-[#FFFFFF1A] text-white border-gray-600 appearance-none focus:outline-none"
            />
          </div>
        </div>

        <Button className="w-full bg-[#FFC801] rounded-full h-12 hover:bg-yellow-600 text-[#212121] font-semibold">
          Continue
        </Button>
      </div>
    </div>
  );

  const renderDefault = () => (
    <Card className="bg-[#3A393F] border border-[#BBBBBB1A] p-6">
      <h3 className="text-lg font-bold text-white mb-4">START INVESTING</h3>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-white mb-2 block">Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#bbbbbb]">$</span>
            <Input
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="pl-8 bg-[#FFFFFF4D] text-white appearance-none focus:outline-none"
            />
          </div>
          <p className="text-sm text-[#00FF00] mt-1">You can invest</p>
        </div>
        <Button className="w-full bg-[#FFC801] rounded-full h-12 hover:bg-yellow-600 text-[#212121] font-semibold">
          Buy
        </Button>

        <div className="text-center text-[#bbbbbb] text-sm">or</div>

        <div className="flex justify-between gap-3 text-xs text-gray-300 w-full">
          <div className="flex flex-col items-center flex-1 space-y-1">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full bg-gray-600 border-gray-600 hover:bg-gray-500"
              onClick={() => setCurrentView('deposit')}
            />
            <span>Deposit Coin</span>
          </div>
          <div className="flex flex-col items-center flex-1 space-y-1">
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-gray-600 border-gray-600" />
            <span>Send Coin</span>
          </div>
          <div className="flex flex-col items-center flex-1 space-y-1">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full bg-gray-600 border-gray-600 hover:bg-gray-500"
              onClick={() => setCurrentView('buyDip')}
            />
            <span>Buy the Dip</span>
          </div>
          <div className="flex flex-col items-center flex-1 space-y-1 text-center">
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-gray-600 border-gray-600" />
            <span>Stop Loss/</span>
            <span>Take Profit</span>
          </div>
        </div>
      </div>
    </Card>
  );

  const renderYourInvestments = () => (
    <Card className="bg-transparent border border-[#58525E] p-6 text-white mt-6">
      <h3 className="text-lg font-bold mb-4">YOUR INVESTMENTS IN THIS COIN</h3>
      <div className="space-y-4">
        <div className="flex gap-2">
          <span>Average Buy Price</span>
          <span className="font-semibold">$0</span>
        </div>
        <div className="flex flex-col mb-1">
          <span>Current Value</span>
          <div className="flex gap-2">
            <div className="text-xl font-bold">$0.000</div>
            <span className="text-sm">▲0.00 %</span>
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          <div>
            <span className="text-white text-sm">Invested Value</span>
            <p className="font-semibold">$0.000</p>
          </div>
          <div className="text-right">
            <span className="text-white text-sm">Total Returns</span>
            <p className="font-semibold">$0.000</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      {currentView === 'deposit' && renderDeposit()}
      {currentView === 'depositConfirmation' && renderDepositConfirmation()}
      {currentView === 'buyDip' && renderBuyDip()}
      {currentView === 'default' && renderDefault()}
      {renderYourInvestments()}
    </div>
  );
};

export default Investing;
