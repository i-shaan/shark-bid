import React, { useState } from 'react';
import { ChevronLeft, HelpCircle } from 'lucide-react';

export default function BankDetailsForm() {
  const [accountNumber, setAccountNumber] = useState('');
  const [reenterAccountNumber, setReenterAccountNumber] = useState('');
  const [bankIFSC, setBankIFSC] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleVerify = () => {
    if (accountNumber && reenterAccountNumber && bankIFSC && isChecked) {
      if (accountNumber === reenterAccountNumber) {
        alert('Bank details verified successfully!');
      } else {
        alert('Account numbers do not match. Please check and try again.');
      }
    } else {
      alert('Please fill in all fields and accept the terms.');
    }
  };

  return (
    <div className="h-full px-8 w-[35rem]">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <ChevronLeft className="w-6 h-6 text-gray-300" />
            <h1 className="text-2xl font-medium text-white">Bank Details</h1>
          </div>
          <HelpCircle className="w-6 h-6 text-gray-400" />
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-8">
          Usually takes around 2 minutes
        </p>

        {/* Form */}
        <div className="space-y-6">
          {/* Account Number */}
          <div>
            <label className="block text-white text-base font-medium mb-3">
              Account Number
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="XXXXXXXXXXXXXXXX"
              className="w-full border border-[#bbbbbb] rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
            />
          </div>

          {/* Re-enter Account Number */}
          <div>
            <label className="block text-white text-base font-medium mb-3">
              Re-enter Account Number
            </label>
            <input
              type="text"
              value={reenterAccountNumber}
              onChange={(e) => setReenterAccountNumber(e.target.value)}
              placeholder="XXXXXXXXXXXXXXXX"
              className="w-full border border-[#bbbbbb] rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
            />
          </div>

          {/* Bank IFSC */}
          <div>
            <label className="block text-white text-base font-medium mb-3">
              Bank IFSC
            </label>
            <input
              type="text"
              value={bankIFSC}
              onChange={(e) => setBankIFSC(e.target.value.toUpperCase())}
              placeholder="XXXXXXXXXXXXXXXX"
              className="w-full border border-[#bbbbbb]rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 mt-8">
            <input
              type="checkbox"
              id="acknowledge"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-5 h-5 mt-0.5 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-gray-500 checked:bg-gray-600 checked:border-gray-500"
            />
            <label htmlFor="acknowledge" className="text-gray-300 text-sm leading-relaxed">
              By checking this, I acknowledge that this account can be used for all my deposits and withdrawals
            </label>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-gray-400 hover:bg-gray-300 text-gray-800 font-medium py-4 px-6 rounded-full transition-colors duration-200 mt-8"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}