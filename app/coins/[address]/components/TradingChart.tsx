export default function TradingChart() {
    return (
      <div className="bg-gray-900 p-6 h-96 relative">
        <div className="relative h-full">
          {/* Y-axis labels */}
          <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4 z-10">
            <span>0.12</span>
            <span>0.08</span>
            <span>0.06</span>
            <span className="bg-red-500 text-white px-1 rounded text-xs font-semibold">0.07</span>
            <span>0.04</span>
            <span>0.02</span>
            <span>0.04</span>
          </div>
  
          {/* Chart SVG */}
          <div className="absolute inset-0 pr-12">
            <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
              <defs>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Main price line - red declining trend */}
              <path
                d="M 20 80 L 80 60 L 120 70 L 160 65 L 200 75 L 240 70 L 280 80 L 320 85 L 360 90 L 400 120 L 440 140 L 480 160 L 520 180 L 560 200 L 600 220 L 640 210 L 680 200 L 720 190 L 760 185 L 780 180"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Fill area under the line */}
              <path
                d="M 20 80 L 80 60 L 120 70 L 160 65 L 200 75 L 240 70 L 280 80 L 320 85 L 360 90 L 400 120 L 440 140 L 480 160 L 520 180 L 560 200 L 600 220 L 640 210 L 680 200 L 720 190 L 760 185 L 780 180 L 780 280 L 20 280 Z"
                fill="url(#redGradient)"
              />
              
              {/* Green spike sections */}
              <path
                d="M 400 120 L 440 40 L 480 50 L 520 45 L 560 50"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
              />
              
              <path
                d="M 600 220 L 640 60 L 680 70 L 720 65"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
  
          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-12 flex justify-between text-xs text-gray-500 px-4">
            <span>1</span>
            <span>16M</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>21</span>
          </div>
        </div>
      </div>
    );
  }