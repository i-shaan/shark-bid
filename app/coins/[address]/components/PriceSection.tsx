import { TrendingDown, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PriceSection() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Ardor</h1>
              <p className="text-gray-400 text-sm">ARDR</p>
            </div>
          </div>
        </div>
        <Button variant="outline" className="border-[#BBBBBB4D] bg-transparent text-gray-300">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57143 0H1.42857C0.640869 0 0 0.640869 0 1.42857V6.50792C0 7.29562 0.640869 7.93649 1.42857 7.93649H4.64286V9.28571H2.99003C2.79279 9.28571 2.63288 9.44563 2.63288 9.64286C2.63288 9.84009 2.79279 10 2.99003 10H7.00997C7.20738 10 7.36712 9.84009 7.36712 9.64286C7.36712 9.44563 7.20738 9.28571 7.00997 9.28571H5.35714V7.93649H8.57143C9.35931 7.93649 10 7.29562 10 6.50792V1.42857C10 0.640869 9.35931 0 8.57143 0ZM9.28571 6.50792C9.28571 6.90186 8.96519 7.2222 8.57143 7.2222H1.42857C1.03463 7.2222 0.714286 6.90186 0.714286 6.50792V1.42857C0.714286 1.03463 1.03463 0.714286 1.42857 0.714286H8.57143C8.96519 0.714286 9.28571 1.03463 9.28571 1.42857V6.50792Z" fill="#BBBBBB"/>
            <path d="M7.14286 5.38571H2.85714C2.65991 5.38571 2.5 5.54562 2.5 5.74285C2.5 5.94008 2.65991 6.09999 2.85714 6.09999H7.14286C7.34026 6.09999 7.5 5.94008 7.5 5.74285C7.5 5.54562 7.34026 5.38571 7.14286 5.38571ZM3.89858 4.73472C3.96641 4.81721 4.06756 4.86499 4.17428 4.86499C4.28101 4.86499 4.38215 4.81721 4.44999 4.73472L5.08248 3.96638L5.28809 4.21645C5.3547 4.29736 5.4534 4.34497 5.55803 4.34671C5.65848 4.33991 5.76311 4.30399 5.83217 4.22534L7.41106 2.42899C7.54116 2.28076 7.52686 2.05511 7.37863 1.92501C7.23075 1.79475 7.00474 1.80887 6.87465 1.95745L5.57303 3.43834L5.35819 3.17746C5.29053 3.09497 5.18921 3.04719 5.08248 3.04719C4.97576 3.04719 4.87462 3.09497 4.80678 3.17746L4.17428 3.9458L3.74041 3.41881C3.6152 3.26639 3.39007 3.24442 3.23783 3.36998C3.08541 3.49519 3.06362 3.72032 3.189 3.87256L3.89858 4.73472Z" fill="#BBBBBB"/>
          </svg>
          Watchlist
        </Button>
      </div>

      {/* Price Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold">$0.0004225</span>
              <span className="text-red-500 flex items-center">
                <TrendingDown className="w-4 h-4 mr-1" />
                3.00 %
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                LIVE
              </span>
              <span>08:13 PM | Apr 07, 2025</span>
            </div>
          </div>
          <div className="w-[15rem] space-y-2">
            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            {/* 24H Low/High section */}
            <div className="flex justify-between">
              <div>
                <span className="text-gray-400 text-sm">24H Low</span>
                <p className="font-semibold">$0.0002587</p>
              </div>
              <div className='text-right'>
                <span className="text-gray-400 text-sm">24H High</span>
                <p className="font-semibold">$0.0002587</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}