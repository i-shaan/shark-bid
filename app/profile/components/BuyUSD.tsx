import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function BuyUSDT() {
  const [amount, setAmount] = useState('');

  const isDisabled = !amount || parseInt(amount) < 500;

  return (
    <div className="bg-[#1C1B20] border border-[#333] rounded-lg p-6 w-full max-w-sm space-y-4">
      {/* Heading */}
      <h2 className="text-white text-sm font-semibold">BUY USDT</h2>

      {/* Amount Input */}
      <div className="space-y-1.5">
        <label htmlFor="amount" className="text-sm text-white">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="₹0"
          className="w-full h-12 px-4 bg-[#2B2A30] text-white placeholder-white text-sm rounded-md outline-none"
        />
        <p className="text-xs text-gray-400">Min ₹500</p>
      </div>

      {/* Button */}
      <button
        // disabled={isDisabled}
        className={`w-full h-12 rounded-3xl text-black bg-[#FFC801]`}
      >
        Buy USDT
      </button>
    </div>
  );
}
