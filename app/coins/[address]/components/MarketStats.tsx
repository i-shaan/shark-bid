export default function MarketStats() {
  const marketData = [
    { label: 'Market Cap', value: '$129,254,247.63' },
    { label: 'Fully Diluted Market Cap', value: '$129,254,247.63' },
    { label: '24hr Volume', value: '$129,254,247.63', change: '+3.00 %' },
    { label: 'Circulating Supply', value: '998,466,231.26 Ardor' },
    { label: 'Total Supply', value: '$129,254,247.63' }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Ardor Market Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {marketData.map((stat, index) => (
          <div key={index} className="flex justify-between items-center py-4 border-b border-white">
            <span className="text-gray-400">{stat.label}</span>
            <div className="text-right">
              <div className="font-semibold">{stat.value}</div>
              {stat.change && (
                <span className="text-green-400 text-sm">{stat.change}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}