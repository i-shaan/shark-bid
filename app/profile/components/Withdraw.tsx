import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function WithdrawToBank() {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const MIN_USDT = 5;
  const MAX_USDT = 25000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAmount(val);

    const numericVal = parseFloat(val);
    if (!val) {
      setError('');
    } else if (isNaN(numericVal)) {
      setError('Enter a valid number');
    } else if (numericVal < MIN_USDT) {
      setError(`Minimum amount is ${MIN_USDT} USDT`);
    } else if (numericVal > MAX_USDT) {
      setError(`Maximum amount is ${MAX_USDT} USDT`);
    } else {
      setError('');
    }
  };

  const isDisabled = !!error || !amount;

  return (
    <div className=" border border-[#333] rounded-lg p-6 w-full max-w-sm space-y-4">
      <div>
        <h2 className="text-white text-sm font-semibold">WITHDRAW TO BANK</h2>
        <p className="text-sm text-gray-400 mt-1">
          Available to sell: 0 USDT ($0.000)
        </p>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="withdrawAmount" className="text-sm text-white">
          Amount
        </label>
        <input
          id="withdrawAmount"
          type="number"
          value={amount}
          onChange={handleChange}
          placeholder="₹0"
          className="w-full h-12 px-4 bg-[#2B2A30] text-white placeholder-white text-sm rounded-md outline-none border border-[#444]"
        />
        <p className="text-xs text-gray-400">
          Min 5.00 USDT - Max 25,000 USDT
        </p>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>

      <button
        
        className={`w-full h-12 rounded-3xl text-black  bg-[#FFC801]`}
      >
        Buy USDT
      </button>
    </div>
  );
}
