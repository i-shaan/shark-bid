export default function PriceHistory() {
    const historyData = [
      { period: 'Today', amount: '$0.04917' },
      { period: '7 Days', amount: '$0.04917' },
      { period: '30 Days', amount: '$0.04917' },
      { period: '1 Year', amount: '$0.04917' }
    ];
  
    return (
      <div className="mt-12 flex flex-col gap-2">
        <div>
          <h2 className="text-xl font-bold mb-6">Andor Price History</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Date Comparison</span>
              <span className="text-gray-400">Amount Change</span>
            </div>
            {historyData.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-[#FFFFFF]">
                <span>{item.period}</span>
                <span className="font-semibold">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }