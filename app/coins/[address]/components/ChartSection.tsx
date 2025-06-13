import TimeframeSelector from './TimeframeSelector';
import TradingChart from './TradingChart';

type Timeframe = '1s' | '1m' | '5m' | '15m' | '1h' | '4h' | '24h';

interface ChartSectionProps {
  selectedTimeframe: Timeframe;
  setSelectedTimeframe: (timeframe: Timeframe) => void;
}

export default function ChartSection({ selectedTimeframe, setSelectedTimeframe }: ChartSectionProps) {
  return (
    <>
      {/* Timeframe Selection */}
      <div className="flex items-center justify-end">
        <TimeframeSelector 
          selectedTimeframe={selectedTimeframe}
          setSelectedTimeframe={setSelectedTimeframe}
        />
      </div>

      {/* Chart Area */}
      <TradingChart />
    </>
  );
}