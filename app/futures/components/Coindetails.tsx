import React from "react";


export const CoinDetails = ()=> {
  // Trading metrics data for easy mapping
  const tradingMetrics = [
    {
      id: "last-price",
      label: "Last Price",
      value: "84,320.4",
      valueColor: "text-[#ff329b]",
      fontWeight: "font-semibold",
    },
    {
      id: "24h-change",
      label: "24h Change",
      value: "+10.9%",
      valueColor: "text-[#14ffa2]",
    },
    {
      id: "market-price",
      label: "Market Price",
      value: "$84,315.3",
      valueColor: "text-white",
    },
    {
      id: "spot-price",
      label: "Spot Price",
      value: "$84,348.8",
      valueColor: "text-white",
    },
    {
      id: "8h-funding",
      label: "8h Funding",
      value: "0.0100%",
      valueColor: "text-[#14ffa2]",
      labelStyle: "underline",
    },
    {
      id: "24h-volume",
      label: "24h Volume",
      value: "$24,316,135",
      valueColor: "text-white",
    },
    {
      id: "open-interest",
      label: "Open Interest",
      value: "$7,651,279",
      valueColor: "text-white",
    },
  ];

  return (
<div className="flex-1 bg-[#242329] rounded-[15px] border-none flex items-center r">
  <div className="p-4">
    <div className="flex flex-wrap gap-6 justify-center items-center">
      {tradingMetrics.map((metric) => (
        <div key={metric.id} className="flex flex-col items-center">
          <span
            className={`text-[10px] font-medium text-[#bbbbbb] font-lexend ${metric.labelStyle || ""}`}
          >
            {metric.label}
          </span>
          <span
            className={`text-xs ${metric.fontWeight || "font-medium"} ${metric.valueColor} font-lexend`}
          >
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};