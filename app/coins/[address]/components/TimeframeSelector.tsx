import React from 'react';

type Timeframe = '1s' | '1m' | '5m' | '15m' | '1h' | '4h' | '24h';

interface TimeframeSelectorProps {
  selectedTimeframe: Timeframe;
  setSelectedTimeframe: (timeframe: Timeframe) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  selectedTimeframe,
  setSelectedTimeframe,
}) => {
  const timeframes: Timeframe[] = ['1s', '1m', '5m', '15m', '1h', '4h', '24h'];

  return (
    <div className="flex items-center space-x-2">
      {timeframes.map((timeframe) => (
        <button
          key={timeframe}
          onClick={() => setSelectedTimeframe(timeframe)}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            selectedTimeframe === timeframe
              ? 'bg-yellow-500 text-black font-medium'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {timeframe}
        </button>
      ))}
    </div>
  );
};

export default TimeframeSelector;
