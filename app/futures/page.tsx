import Link from "next/link";

import Header from "../coins/Header/Header"

export default function CryptoFuturesLanding() {
  return (
    <div className="min-h-screen bg-[#242329] text-white relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background rectangles (darker and lighter) */}
      <div className="absolute right-10 top-2/5 transform -translate-y-1/2 z-0">
        {/* Back (darker) card */}
        <div className="w-[280px] h-[480px] rounded-2xl bg-[#131D26]" />
        {/* Front (lighter) card */}
        <div className="absolute top-25 right-40 w-[240px] h-[420px] rounded-2xl bg-[#1F2831] shadow-xl" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Trade Crypto Futures<br />
            on BTC, ETH and<br />
            250+ Pairs<br />
            with 100x Leverage
          </h1>

          <p className="text-gray-300 text-lg mb-12 max-w-md">
            Built for retail traders, perpetual contract and on the most popular ALTs
          </p>

          <nav className="flex flex-wrap gap-4 mb-16">
            <Link href="/futures/btc" >
            <button className="bg-[#FFC801] hover:bg-yellow-600 text-[#121A2D] font-semibold px-8 py-3 rounded-full transition-colors">
            Start Trading now
            </button>
        
            </Link>
            <button className="border border-gray-500 hover:border-gray-400 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              iOS app
            </button>
            <button className="border border-gray-500 hover:border-gray-400 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Android app
            </button>
          </nav>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">$2.9B+</div>
            <div className="text-gray-400 text-lg">30D Volume</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
            <div className="text-gray-400 text-lg">Futures Markets</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">24k+</div>
            <div className="text-gray-400 text-lg">Traders</div>
          </div>
        </div>
      </div>
    </div>
  );
}
