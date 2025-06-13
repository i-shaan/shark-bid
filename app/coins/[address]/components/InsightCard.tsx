import React from 'react';
import { Card } from '@/components/ui/card';

interface Insight {
  title: string;
  status: string;
  available: boolean;
}

interface InsightCardProps {
  insight: Insight;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  return (
    <Card className="bg-gradient-dark border border-white/10 p-6 rounded-xl">
      <div className="flex items-start justify-between">
        {/* Left side: icon */}
        <div className="w-12 h-12 bg-gray-700 rounded-lg" />

        {/* Middle content: title and status */}
        <div className="flex-1 ml-4">
          <h3 className="font-semibold text-white">{insight.title}</h3>
          <span
            className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
              insight.available
                ? 'bg-green-500 text-black'
                : 'bg-red-500 text-white'
            }`}
          >
            {insight.status}
          </span>
        </div>

        {/* Arrow */}
        <div className="text-gray-400 text-xl mt-1">›</div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-4">
        Examining crypto&apos;s intrinsic value, adoption and underlying technology.
      </p>
    </Card>
  );
};

export default InsightCard;
