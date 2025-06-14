"use client";

import { useState } from 'react';

import { Button } from '@/components/ui/button';

import {
  Download,
  Upload,
  ArrowUpDown,
  Send,
  ArrowLeftRight,
  Filter,
  ChevronDown,
  LucideIcon
} from 'lucide-react';

import Header_Home from '@/app/profile/home/Header';
import DepositUSDT from '../components/DepositUSD';
import SendUSDT from '../components/SendUSDT';
import BuyUSDT from '../components/BuyUSD';
import WithdrawToBank from '../components/Withdraw';
import WalletTransfer from '../components/Wallet';

interface WalletAction {
  id: string;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

interface Wallet {
  name: string;
  balance: string;
  currency: string;
  usdValue: string;
  actions: WalletAction[];
}

interface Tab {
  name: string;
  icon: LucideIcon | null;
}

export default function WalletDashboard() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
//   const [withdrawAmount, setWithdrawAmount] = useState<string>('');
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);

  const wallets: Wallet[] = [
    {
      name: 'USDT Wallet',
      balance: '0.000',
      currency: 'USDT',
      usdValue: '$0.000',
      actions: [
        {
          id: 'add-funds',
          icon: Download,
          label: 'Add funds\nwith INR',
          onClick: () => setSelectedAction('add-funds')
        },
        {
          id: 'withdraw',
          icon: Upload,
          label: 'Withdraw\nto Bank',
          onClick: () => setSelectedAction('withdraw')
        },
        {
          id: 'deposit',
          icon: ArrowUpDown,
          label: 'Deposit\nUSDT',
          onClick: () => setSelectedAction('deposit')
        },
        {
          id: 'send',
          icon: Send,
          label: 'Send\nUSDT',
          onClick: () => setSelectedAction('send')
        }
      ]
    },
    {
      name: 'Futures Wallet',
      balance: '0.000',
      currency: 'USDT',
      usdValue: '',
      actions: [
        {
          id: 'transfer',
          icon: ArrowLeftRight,
          label: 'Wallet\nTransfer',
          onClick: () => setSelectedAction('transfer')
        }
      ]
    }
  ];

  const [tabs, setTabs] = useState<Tab[]>([
    { name: 'All', icon: null },
    { name: 'USDT Wallet', icon: null },
    { name: 'Coins', icon: null },
    { name: 'Coinsets', icon: null },
    { name: 'More', icon: ChevronDown }
  ]);

  const moreOptions: string[] = ['Rewards', 'Vaults', 'Gifts', 'Bit15'];

  const handleMoreOptionClick = (option: string) => {
    const filtered = tabs.filter(
      tab => !moreOptions.includes(tab.name) && tab.name !== 'More'
    );
    const updatedTabs: Tab[] = [
      { name: option, icon: null },
      ...filtered,
      { name: 'More', icon: ChevronDown },
    ];
    setTabs(updatedTabs);
    setActiveTab(option);
    setIsMoreOpen(false);
  };

  const renderActionContent = () => {
    switch (selectedAction) {
      case 'withdraw':
        return <WithdrawToBank />;
      case 'add-funds':
        return <BuyUSDT />;
      case 'deposit':
        return <DepositUSDT onClose={() => setSelectedAction(null)} />;
      case 'send':
        return <SendUSDT  />;
      case 'transfer':
        return <WalletTransfer />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a191d] text-white">
       <Header_Home/>
       <div className='px-[177px] pt-[10px]'>
                    <div className="flex items-center justify-between py-4 ">
              <h1 className="text-2xl sm:text-3xl font-bold">Wallets</h1>
            </div>
      <div className="flex gap-6 ">
        {/* Left Panel - 60% */}
        <div className="w-3/5 overflow-y-auto">
          <div className=" space-y-8">
            {/* Header */}


            {/* Wallet Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {wallets.map((wallet, index) => (
    <div key={index} className="bg-[#39363E] rounded-xl overflow-hidden">
      <div className="p-6 flex flex-col h-full">
        <div className="space-y-6 flex-grow">
          {/* Wallet Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">{wallet.name}</h3>
          </div>

          {/* Balance Display */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold">{wallet.balance}</span>
              <span className="text-lg text-white">{wallet.currency}</span>
            </div>
            {wallet.usdValue && (
              <p className="text-white">{wallet.usdValue}</p>
            )}
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-t border-[#bbbbbb66] my-4" />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {wallet.actions.map((action, actionIndex) => (
            <div
              key={actionIndex}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={action.onClick}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200
                  ${
                    selectedAction === action.id
                      ? 'bg-[#BBBBBB4D] border-[#bbbbbb]'
                      : 'bg-transparent border-[#bbbbbb] hover:bg-[#BBBBBB4D]'
                  }`}
              >
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-white text-center leading-tight whitespace-pre-line">
                {action.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>


            {/* Transaction History */}
            <div className="space-y-6 pb-6">
              <h2 className="text-2xl font-bold">Transaction History</h2>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
  {tabs.map((tab) => {
    if (tab.name === 'More') {
      return (
        <div key="More" className="relative">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent border-1 border-[#BBBBBB4D] text-gray-300 hover:border-white"
            onClick={() => setIsMoreOpen(!isMoreOpen)}
          >
            More {tab.icon && <tab.icon className="w-4 h-4" />}
          </Button>
          {isMoreOpen && (
            <div className="absolute z-10 mt-1 w-36 bg-[#2f2b33] rounded-md shadow-lg">
              {moreOptions.map(option => (
                <div
                  key={option}
                  className="px-4 py-2 text-sm text-white hover:bg-[#45414b] cursor-pointer"
                  onClick={() => handleMoreOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Button
          key={tab.name}
          variant={activeTab === tab.name ? "default" : "outline"}
          className={`flex items-center gap-2 ${
            activeTab === tab.name 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-transparent border-gray-600 text-gray-300 hover:border-white'
          }`}
          onClick={() => {
            if (!moreOptions.includes(tab.name)) {
              const filtered = tabs.filter(t => !moreOptions.includes(t.name) && t.name !== 'More');
              const updated = [...filtered, { name: 'More', icon: ChevronDown }];
              setTabs(updated);
              setIsMoreOpen(false);
            }
            setActiveTab(tab.name);
          }}
        >
          {tab.icon && <tab.icon className="w-4 h-4" />}
          {tab.name}
        </Button>
      );
    }
  })}
</div>


              {/* Transaction History Content */}
              <div className="bg-transparent border-1 border-[#BBBBBB] rounded-xl h-[30rem]">
                <div className="p-8 sm:p-12">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
                      <Filter className="w-8 h-8 text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-300">No Transaction History</h3>
                    </div>
                    <button className="bg-[#FFC801] rounded-3xl  text-black font-medium px-8 py-2">
                      Start Investing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - 40% */}
        <div className="w-2/5 ">
        <div className="">
          {renderActionContent()}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}