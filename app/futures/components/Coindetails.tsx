import React from "react";
import Gain from "@/components/icons/Gain";
import Loss from "@/components/icons/Loss";

export const CoinDetails = () => {
  const tradingMetrics = [
    {
      id: "last-price",
      label: "Last Price",
      value: "$84,320.4",
    },
    {
      id: "24h-change",
      label: "24h Change",
      value: "+10.9%",
    },
    {
      id: "market-price",
      label: "Market Price",
      value: "$84,315.3",
    },
    {
      id: "spot-price",
      label: "Spot Price",
      value: "$84,348.8",
    },
    {
      id: "8h-funding",
      label: "8h Funding",
      value: "+0.0100%",
      labelStyle: "underline",
    },
    {
      id: "24h-volume",
      label: "24h Volume",
      value: "$24,316,135",
    },
    {
      id: "open-interest",
      label: "Open Interest",
      value: "$7,651,279",
    },
  ];

  return (
    <div className="flex-1 bg-[#242329] rounded-[15px] border-none flex items-center">
      <div className="p-4 w-full">
        <div className="flex flex-wrap gap-6 items-center">
          {tradingMetrics.map((metric) => {
            const isPercentage = metric.value.includes("%");
            const isPositive = metric.value.startsWith("+");
            const isNegative = metric.value.startsWith("-");

            const numericValue = metric.value.replace(/[+-]/, "");

            return (
              <div key={metric.id} className="flex flex-col items-center min-w-[90px]">
                <span
                  className={`text-[10px] font-medium text-[#bbbbbb] font-lexend ${metric.labelStyle || ""}`}
                >
                  {metric.label}
                </span>
                <span
                  className={`text-xs font-medium font-lexend flex items-center gap-1 ${
                    isPositive ? "text-emerald-400" : isNegative ? "text-red-400" : "text-white"
                  }`}
                >
                  {isPercentage && (isPositive ? <Gain /> : isNegative ? <Loss /> : null)}
                  {numericValue}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
