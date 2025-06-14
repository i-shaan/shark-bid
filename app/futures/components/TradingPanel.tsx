"use client";
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import {  ChevronDown, ChevronDownIcon,ArrowLeftRight, Minus, Plus, X } from 'lucide-react';


export const TradingPanel = () => {
  const [activeTab, setActiveTab] = useState('Market');
  const [takeProfitStopLoss, setTakeProfitStopLoss] = useState(false);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');

  const [orderType, setOrderType] = useState<'qty' | 'amount'>('qty');

  const [coinSymbol, setCoinSymbol] = useState('BTC');


  const tabs = ['Market', 'Limit'];




  const [showPreferenceModal, setShowPreferenceModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);

  const [fromWallet, setFromWallet] = useState('Futures Wallet');
  const [toWallet, setToWallet] = useState('USDT Wallet');
  const [fromBalance, setFromBalance] = useState(0.0);
  const [toBalance, setToBalance] = useState(0.0);
  const [transferAmount, setTransferAmount] = useState('');
  const [transferError, setTransferError] = useState('');

  const handleSwap = () => {
    setFromWallet(toWallet);
    setToWallet(fromWallet);
    setFromBalance(toBalance);
    setToBalance(fromBalance);
    setTransferError('');
    setTransferAmount('');
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0) {
      setTransferError('Please enter a valid amount.');
    } else if (amount > fromBalance) {
      setTransferError('Insufficient balance in source wallet.');
    } else {
      setTransferError('');
      alert(`Transferring ${amount} from ${fromWallet} to ${toWallet}`);
      setShowTransferModal(false);
    }
  };

  const handleConfirmPreference = () => {
    setCoinSymbol(orderType === 'qty' ? 'BTC' : 'USDT'); // Example logic
    setShowPreferenceModal(false);
  };

  const [showLeverageModal, setShowLeverageModal] = useState(false);
  
  const [leverage, setLeverage] = useState(66.42);

  const marks = [1, 25, 50, 75, 100];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeverage(parseFloat(e.target.value));
  };

  const updateLeverage = (delta: number) => {
    setLeverage((prev) => {
      const updated = Math.min(100, Math.max(1, parseFloat((prev + delta).toFixed(2))));
      return updated;
    });
  };
  return (
    <div className="w-full h-full bg-[#242329] rounded-[15px] border-none p-4 flex flex-col ">
      {/* Leverage Selector */}
 {/* Leverage Selector Trigger */}
 <div className="flex justify-between items-center mb-6">
        <span className="text-white text-xs font-normal font-lexend">Isolated Leverage</span>
        <div
          className="w-[76px] h-[37px] bg-[#1a191d] rounded-[5px] border border-[#212121] flex items-center px-2 cursor-pointer"
          onClick={() => setShowLeverageModal(true)}
        >
          <span className="text-white text-xs font-lexend">{leverage}x</span>
          <ChevronDownIcon className="w-5 h-5 ml-auto text-white" />
        </div>
      </div>

      {/* Leverage Modal */}
      {showLeverageModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-[#242329] w-[360px] p-6 rounded-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-sm font-semibold">ADJUST LEVERAGE</h2>
              <X className="text-white cursor-pointer" onClick={() => setShowLeverageModal(false)} />
            </div>

            {/* Pair + Price */}
            <div className="flex items-center gap-2 mb-4">
              <img src="/coin.png" alt="BTC" className="w-4 h-4" />
              <span className="text-white text-sm">BTC·USDT</span>
              <span className="text-green-400 text-sm font-semibold ml-auto">$106,603.4</span>
            </div>

            {/* Leverage Control */}
            <div className="flex items-center justify-between w-full mb-6 gap-2">
  {/* Minus Button */}
  <button
    onClick={() => updateLeverage(-0.01)}
    className="w-6 h-6 flex items-center justify-center rounded-full hover:border-white hover:text-white border border-[#FFC801] text-[#FFC801]"
  >
    <Minus className="w-4 h-4" />
  </button>

  {/* Leverage Display */}
  <div className="border border-[#333] rounded-lg w-4/5 py-2 flex items-center justify-center">
    <span className="text-white text-xl font-semibold">{leverage.toFixed(2)}x</span>
  </div>

  {/* Plus Button */}
  <button
    onClick={() => updateLeverage(0.01)}
    className="w-6 h-6 flex items-center justify-center rounded-full hover:border-white hover:text-white border border-[#FFC801] text-[#FFC801]"
  >
    <Plus className="w-4 h-4" />
  </button>
</div>


            {/* Slider with marks */}
            <div className="relative w-full my-2 ">


  {/* Slider itself */}
  <input
  type="range"
  min={1}
  max={100}
  step={0.01}
  value={leverage}
  onChange={handleSliderChange}
  className="w-full h-1 rounded-full appearance-none accent-amber-400"
  style={{
    background: `linear-gradient(to right, #FFC801 0%, #FFC801 ${(leverage - 1) / 0.99}%, #333 ${(leverage - 1) / 0.99}%, #333 100%)`,
  }}
/>


  {/* Labels (below the slider) */}
  <div className="absolute top-full left-0 w-full flex justify-between mt-1 ">
    {marks.map((mark) => (
      <span key={mark} className="text-[10px] text-white">
        {mark}x
      </span>
    ))}
  </div>
</div>



            {/* Continue Button */}
            <button
  className="w-full bg-[#FFC801] text-[#242329] rounded-xl py-2 mt-6 font-bold"
  onClick={() => setShowLeverageModal(false)}
>
  Continue
</button>

          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-semibold font-lexend cursor-pointer pb-1 ${
              tab === activeTab ? 'text-white border-b-2 border-white' : 'text-[#bbbbbb]'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Limit Price Input */}
      {activeTab === 'Limit' && (
        <div className="mb-4">
          <label className="text-[#bbbbbb] text-xs font-lexend mb-2 block">Order Price</label>
          <div className="relative">
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-9 bg-[#151f284c] text-white placeholder-[#777] rounded-[5px] border border-[#212121] px-3 text-xs font-lexend"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#bbbbbb] font-lexend">Last</span>
          </div>
        </div>
      )}

      {/* Order Quantity Input */}
      <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div
          className="flex items-center text-[#bbbbbb] text-xs font-lexend cursor-pointer"
          onClick={() => setShowPreferenceModal(true)}
        >
          {orderType === 'qty' ? 'Order Quantity' : 'Enter Amount'}
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
        <div
          className="flex items-center text-xs font-lexend cursor-pointer"
          onClick={() => setShowTransferModal(true)}
        >
          <span className="text-[#bbbbbb]">Bal:</span>
          <span className="text-white ml-1">0.000 USDT</span>
          <ArrowLeftRight className="w-3 h-3 text-white ml-1" />
        </div>
      </div>

      <div className="relative">
        <input
          type="number"
          placeholder={orderType === 'qty' ? 'Enter quantity' : 'Enter amount'}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full h-9 bg-[#151f284c] text-white placeholder-[#777] rounded-[5px] border border-[#212121] px-3 text-xs font-lexend"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#bbbbbb] font-lexend">
          {coinSymbol}
        </span>
      </div>

      {/* Order Preference Modal */}
      {showPreferenceModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex justify-center items-center">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl w-[340px]">
            <div className="flex justify-between items-center mb-4 text-white text-sm font-semibold">
              ORDER PLACEMENT PREFERENCE
              <button onClick={() => setShowPreferenceModal(false)}>✕</button>
            </div>

            <div
              className={`p-4 border rounded-lg mb-4 cursor-pointer ${
                orderType === 'qty' ? 'border-yellow-400' : 'border-[#333]'
              }`}
              onClick={() => setOrderType('qty')}
            >
              <div className="text-white font-semibold text-sm">Order by Qty</div>
              <div className="text-[#bbbbbb] text-xs">Enter order quantity that’s denominated in coin terms</div>
            </div>

            <div
              className={`p-4 border rounded-lg mb-4 cursor-pointer ${
                orderType === 'amount' ? 'border-yellow-400' : 'border-[#333]'
              }`}
              onClick={() => setOrderType('amount')}
            >
              <div className="text-white font-semibold text-sm">Order by Amount</div>
              <div className="text-[#bbbbbb] text-xs">Enter desired order value</div>
            </div>

            <button
              className="w-full bg-[#FFD600] text-black rounded-full py-2 font-bold"
              onClick={handleConfirmPreference}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Wallet Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl w-[340px] relative">
            <div className="flex justify-between items-center mb-4 text-white text-sm font-semibold">
              WALLET TRANSFER
              <button onClick={() => setShowTransferModal(false)}>✕</button>
            </div>

            <div className="border border-[#333] rounded-xl relative mb-4">
              <div className="flex justify-between p-3 border-b border-[#333]">
                <span className="text-[#888] text-sm">
                  From: <span className="text-white font-semibold">{fromWallet}</span>
                </span>
                <span className="text-white font-lexend text-sm">${fromBalance.toFixed(3)}</span>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                <div
                  className="bg-[#444] w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={handleSwap}
                >
                  <ArrowLeftRight className="w-3 h-3 text-white rotate-90" />
                </div>
              </div>

              <div className="flex justify-between p-3 pt-5">
                <span className="text-[#888] text-sm">
                  To: <span className="text-white font-semibold">{toWallet}</span>
                </span>
                <span className="text-white font-lexend text-sm">${toBalance.toFixed(3)}</span>
              </div>
            </div>

            <div className="mb-2">
              <label className="text-white text-sm font-semibold mb-1 block">Enter Amount to transfer</label>
              <input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="0.0"
                className="w-full h-10 bg-transparent border border-[#333] text-white rounded-lg px-3 text-sm placeholder-[#777]"
              />
            </div>

            {transferError && (
              <div className="text-red-500 text-xs font-lexend mb-2">{transferError}</div>
            )}

            <button
              className="w-full bg-[#FFD600] text-black rounded-full py-2 font-bold"
              onClick={handleTransfer}
            >
              Transfer Now
            </button>
          </div>
        </div>
      )}
    </div>

      {/* TP/SL Toggle */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Switch 
            checked={takeProfitStopLoss}
            onCheckedChange={setTakeProfitStopLoss}
            className="data-[state=checked]:bg-[#fbbf24]"
          />
          <span className="ml-2 text-[#bbbbbb] text-[10px] font-lexend">
            Take profit · Stop Loss
          </span>
        </div>

        {takeProfitStopLoss && (
          <div className="space-y-4 mt-4">
            <div>
              <label className="text-[#bbbbbb] text-xs font-lexend mb-2 block">Stop Loss</label>
              <input
                type="number"
                placeholder="Trigger Price"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
                className="w-full h-9 bg-[#151f284c] text-white placeholder-[#777] rounded-[5px] border border-[#212121] px-3 text-xs font-lexend"
              />
            </div>
            <div>
              <label className="text-[#bbbbbb] text-xs font-lexend mb-2 block">Take Profit</label>
              <input
                type="number"
                placeholder="Trigger Price"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
                className="w-full h-9 bg-[#151f284c] text-white placeholder-[#777] rounded-[5px] border border-[#212121] px-3 text-xs font-lexend"
              />
            </div>
          </div>
        )}
      </div>

      {/* Buy/Sell Buttons */}
      <div className="flex gap-4 mb-4 w-full justify-between">
  <button className="w-1/2 h-10 bg-emerald-400 text-[#242329] rounded-[25px] hover:bg-emerald-500 hover:shadow-md hover:scale-[1.02] transition-all duration-200 font-lexend">
    <span className="font-medium text-sm tracking-wide">Buy</span>
  </button>
  <button className="w-1/2 h-10 bg-red-400 text-white rounded-[25px] hover:bg-red-500 hover:shadow-md hover:scale-[1.02] transition-all duration-200 font-lexend">
    <span className="font-medium text-sm tracking-wide">Sell</span>
  </button>
</div>


      {/* Verification Message */}
      <div className="text-[10px] font-lexend text-[#bbbbbb] mb-4 leading-5">
        <span className="text-[#ff0000]">Account verification is pending. </span>
        <span>Please complete it to start trading. </span>
        <span className="text-white underline cursor-pointer">Verify now</span>
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-2 gap-y-2 text-xs font-lexend">
        <div className="text-[#bbbbbb] font-light">Margin</div>
        <div className="text-[#bbbbbb] font-light text-right">Quantity</div>
        <div className="text-white font-medium">-</div>
        <div className="text-white font-medium text-right">-</div>

        <div className="text-[#bbbbbb] font-light">Est. Entry Price</div>
        <div className="text-[#bbbbbb] font-light text-right">Min. Quantity</div>
        <div className="text-white font-normal">$78,850 Usdt</div>
        <div className="text-white font-normal text-right">0.00100</div>
      </div>
    </div>
  );
};
