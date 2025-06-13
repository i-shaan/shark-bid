"use client";

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X } from 'lucide-react';

interface DepositUSDTProps {
  onClose: () => void;
}

export default function DepositUSDT({ onClose }: DepositUSDTProps) {
  const walletAddress =
    '0xb0eff739d1090a52ee2faffbf22eceac23b3cd23e1c94fe66dd9eabb8378d04c';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    // Optional: toast.success("Copied to clipboard");
  };

  return (
    <div className="h-full bg-transparent border-1 border-[#BBBBBB4D] rounded-md">
      {/* Header */}
      <div className="p-4  flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">DEPOSIT USDT</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-4 pb-6 space-y-6">
        <p className="text-sm text-gray-400">
          Use below details to receive USDT on Sharkbid
        </p>

        {/* Network Select */}
        <div className="space-y-1.5  w-full">
          <label className="text-sm font-medium text-white ">Network</label>
          <Select  defaultValue="aptos">
            <SelectTrigger className=" w-full bg-[#2B2A30] border border-[#444] text-white h-12 px-4 rounded-md">
              <div className="flex items-center gap-2">
                <div className="w-full h-5 bg-white rounded-full" />
                <SelectValue placeholder="Aptos" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-[#2B2A30] border border-[#444] text-white">
              <SelectItem value="aptos" className="text-white">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded-full" />
                  Aptos
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Wallet Address */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-white mb-2">Wallet Address</label>
          <div className="  rounded-md  flex items-start justify-between">
            <span className="text-sm text-white font-mono break-all">
              {walletAddress}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-yellow-500 hover:text-yellow-400 ml-2"
            >
              Copy
            </Button>
          </div>
        </div>

        {/* Note */}
        <div className="bg-[#FFE071]  border border-[#444] rounded-md p-4">
          <p className="text-sm text-[#bbbbbb]">
            Please ensure that you enter the correct Address and Network on your
            source wallet
          </p>
        </div>

        {/* Done Button */}
        <Button className="w-full bg-[#FFC801] hover:bg-[#e6c000] text-black font-semibold h-12 rounded-3xl">
          Done
        </Button>
      </div>
    </div>
  );
}
