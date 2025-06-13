import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function WalletTransfer() {
  const [fromWallet, setFromWallet] = useState('Trading Wallet');
  const [toWallet, setToWallet] = useState('Funding Wallet');
  const [fromBalance, setFromBalance] = useState(1200.567);
  const [toBalance, setToBalance] = useState(540.345);
  const [transferAmount, setTransferAmount] = useState('');
  const [transferError, setTransferError] = useState('');

  const handleSwap = () => {
    setFromWallet(toWallet);
    setToWallet(fromWallet);
    setFromBalance(toBalance);
    setToBalance(fromBalance);
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (!amount || amount <= 0) {
      setTransferError('Please enter a valid amount');
    } else if (amount > fromBalance) {
      setTransferError('Insufficient balance in source wallet');
    } else {
      setTransferError('');
      // Add transfer logic here
      alert(`Transferred $${amount} from ${fromWallet} to ${toWallet}`);
    }
  };

  return (
    <div className="bg-[#1C1B20] border border-[#333] rounded-lg p-6 w-full max-w-sm space-y-4">
      <div className="flex justify-between items-center mb-4 text-white text-sm font-semibold">
        WALLET TRANSFER
      </div>

      <div className="border border-[#333] rounded-xl relative mb-4">
        <div className="flex justify-between p-3 border-b border-[#333]">
          <span className="text-[#888] text-sm">
            From: <span className="text-white font-semibold">{fromWallet}</span>
          </span>
          <span className="text-white text-sm">${fromBalance.toFixed(3)}</span>
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
          <span className="text-white text-sm">${toBalance.toFixed(3)}</span>
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
  );
}
