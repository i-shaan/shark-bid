export type Step = {
    id: number;
    title: string;
    isCompleted: boolean;
    isActive: boolean;
  };
  
  export type IdentityStep = {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  
  export type AccountFormData = {
    phone?: string;
    otp?: { [key: string]: string }; // 👈 accepts keys like "0", "1", ...
  };
  
  
  
  export type IdentityFormData = {
    country: string;
    name: string;
    dateOfBirth: string;
    pan: string;
    isAdult: boolean;
  };
  
  export type BankFormData = {
    accountNumber: string;
    ifsc: string;
  };
  export interface Cryptocurrency {
    id: number;
    rank: number;
    name: string;
    symbol: string;
    price: number;
    change1h: number;
    change24h: number;
    change7d: number;
    volume24h: number;
    marketCap: number;
    logoUrl: string;
  }
  
  export interface MarketStats {
    totalMarketCap: number;
    totalVolume24h: number;
    totalCryptos: number;
    btcDominance: number;
    ethDominance: number;
  }
  
  export interface GainerLoser {
    image: string;
    id: number;
    name: string;
    change24h: number;
    price: number;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  export interface CryptoCategory {
    id: number;
    name: string;
    numberOfCoins: number;
    avgPriceChange: number; 
    volume24h: number;
    marketCap: number;
  }
  
  export type TabType = 'coins' | 'categories' | 'spotlight' | 'newListings';