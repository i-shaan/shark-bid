'use client';


import Trending from './Trending';

export default function Cryptocurrencies() {


  const popularCryptos = [
    { name: 'Bitcoin', symbol: 'BTC', color: 'bg-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', color: 'bg-blue-500' },
    { name: 'Ripple', symbol: 'XRP', color: 'bg-blue-600' },
    { name: 'BNB', symbol: 'BNB', color: 'bg-yellow-500' },
    { name: 'Solana', symbol: 'SOL', color: 'bg-purple-500' },
    { name: 'USD Coin', symbol: 'USDC', color: 'bg-blue-400' },
    { name: 'TRON', symbol: 'TRX', color: 'bg-red-500' },
    { name: 'Dogecoin', symbol: 'DOGE', color: 'bg-yellow-600' },
    { name: 'Cardano', symbol: 'ADA', color: 'bg-blue-700' },
    { name: 'Wrapped Bitcoin', symbol: 'WBTC', color: 'bg-orange-600' },
    { name: 'ChainLink', symbol: 'LINK', color: 'bg-blue-500' },
    { name: 'Avalanche', symbol: 'AVAX', color: 'bg-red-600' },
    { name: 'Cardano', symbol: 'ADA', color: 'bg-blue-700' },
    { name: 'Wrapped Bitcoin', symbol: 'WBTC', color: 'bg-orange-600' },
    { name: 'ChainLink', symbol: 'LINK', color: 'bg-blue-500' },
    { name: 'Avalanche', symbol: 'AVAX', color: 'bg-red-600' },
  ];

  const recentlyAdded = [
    { name: 'Bitcoin', symbol: 'BTC', color: 'bg-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', color: 'bg-blue-500' },
    { name: 'Ripple', symbol: 'XRP', color: 'bg-blue-600' },
    { name: 'BNB', symbol: 'BNB', color: 'bg-yellow-500' },
    { name: 'Solana', symbol: 'SOL', color: 'bg-purple-500' },
    { name: 'USD Coin', symbol: 'USDC', color: 'bg-blue-400' },
    { name: 'TRON', symbol: 'TRX', color: 'bg-red-500' },
    { name: 'Dogecoin', symbol: 'DOGE', color: 'bg-yellow-600' },
  ];

  const CryptoButton = ({ crypto }: { crypto: { name: string; symbol: string; color: string } }) => (
    <div className="border-gradient bg-transparent">
      <button className="inner text-white w-full">
        <div className={`w-6 h-6 ${crypto.color} rounded-full flex items-center justify-center`}>
          <span className="text-white text-xs font-bold">
            {crypto.symbol.charAt(0)}
          </span>
        </div>
        <span className="ml-3 font-medium">{crypto.name}</span>
      </button>
    </div>
  );
  

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-8">

        {/* Popular Cryptocurrencies Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Popular Cryptocurrencies</h2>
            <p className="text-gray-400">Here are the top 20 cryptocurrencies by market cap</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularCryptos.map((crypto, index) => (
              <CryptoButton key={`popular-${index}`} crypto={crypto} />
            ))}
          </div>
        </div>

        {/* Recently Added Cryptocurrencies Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Recently Added Cryptocurrencies</h2>
            <p className="text-gray-400">Introducing the newly added cryptocurrencies on Mudrex</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentlyAdded.map((crypto, index) => (
              <CryptoButton key={`recent-${index}`} crypto={crypto} />
            ))}
          </div>
        </div>

        {/* Market Trends */}
                <Trending/>
      </div>
    </div>
  );
}