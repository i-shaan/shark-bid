'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SendUSDT() {
  const [amount, setAmount] = useState('20');
  const [selectedPercentage, setSelectedPercentage] = useState<string | null>(null);
  const [destinationAddress, setDestinationAddress] = useState('');
  const [isNetworkOpen, setIsNetworkOpen] = useState(false);

  const percentageOptions = ['25%', '50%', '75%', 'Max'];

  const handlePercentageClick = (percentage: string) => {
    setSelectedPercentage(percentage);
    // You can implement percentage calculation logic here
    if (percentage === 'Max') {
      setAmount('0'); // Set to max available balance
    }
  };

  return (
    <div className="bg-transparent rounded-lg flex items-center justify-center border-1 border-[#BBBBBB4D] py-6">
      <div className="w-full max-w-md  rounded-2xl  shadow-2xl">
        {/* Header */}
        <h1 className="text-white text-xl font-semibold mb-6">SEND USDT</h1>

        {/* USDT Amount */}
        <div className="mb-6">
          <label className="text-gray-400 text-sm mb-2 block">USDT Amount</label>
          <div className="relative mb-2">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full  border border-[#BBBBBB4D] rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-red-400"
              placeholder="Enter amount"
            />
          </div>
          <p className="text-gray-400 text-xs">Max: 0 USDT</p>
        </div>

        {/* Percentage Buttons */}
        <div className="flex gap-2 mb-6">
          {percentageOptions.map((percentage) => (
            <button
              key={percentage}
              onClick={() => handlePercentageClick(percentage)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors border-1 border-[#BBBBBB] ${
                selectedPercentage === percentage
                  ? 'bg-yellow-500 text-black'
                  : ' text-gray-300 hover:bg-gray-600'
              }`}
            >
              {percentage}
            </button>
          ))}
        </div>

        {/* Network Selection */}
        <div className="mb-6 ">
          <label className="text-gray-400 text-sm mb-2 block ">Network</label>
          <div className="relative">
            <button
              onClick={() => setIsNetworkOpen(!isNetworkOpen)}
              className="w-full  border border-gray-600 rounded-lg px-4 py-3 text-white flex items-center justify-between focus:outline-none focus:border-gray-500"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">₿</span>
                </div>
                <span>Bitcoin</span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  isNetworkOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            {isNetworkOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600  shadow-lg z-10">
                <div className="p-3 hover:bg-gray-600 cursor-pointer flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">₿</span>
                  </div>
                  <span className="text-white">Bitcoin</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Destination Address */}
        <div className="mb-6 ">
          <label className="text-gray-400 text-sm mb-2 block">Destination USDT Address</label>
          <input
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            className="w-full border border-[#BBBBBB4D] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500"
            placeholder="Enter address"
          />
        </div>

        {/* Fees Section */}
        <div className="mb-6 bg-[#BBBBBB4D] p-3 rounded-xl">
          <h3 className="text-white text-sm font-medium mb-3">FEES</h3>
          
          <div className="space-y-3 ">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-sm">Network Fee</p>
                <p className="text-[#BBBBBB] text-xs">Fee charged by Aptos</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">0 USDT</p>
                <p className="text-[#BBBBBB] text-xs">$0.000</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-sm">SharkBid Fee</p>
                <p className="text-[#BBBBBB] text-xs">Fee to carry out transaction</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">0.5USDT</p>
                <p className="text-[#BBBBBB] text-xs">$0.5000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Details */}
        <div className="mb-6">
          <h3 className="text-white text-base font-medium mb-3">Important Details</h3>
          <ul className="text-[#BBBBBB] text-xs space-y-1">
            <li>• Ensure that the withdrawal address is supported on Aptos</li>
            <li>• Some other important information</li>
          </ul>
        </div>

        {/* Done Button */}
        <button className="w-full bg-[#FFC801] hover:bg-yellow-400 text-black py-3 px-4 rounded-3xl transition-colors">
          Done
        </button>
      </div>
    </div>
  );
}