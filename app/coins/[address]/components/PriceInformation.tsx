import { TrendingUp } from 'lucide-react';


export default function PriceInformation() {
  const priceData = [
    { title: 'Price Change (1hr)', value: '3.00 %' },
    { title: 'Price Change (24hr)', value: '3.00 %' },
    { title: 'Price Change (7D)', value: '3.00 %' }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold my-6">Ardor Price Information</h2>
      <div className="grid grid-cols-3 gap-4">
        {priceData.map((item, index) => (
         <div key={index} className="gradient-border">
         <div className="inner flex flex-col items-center justify-center text-center h-full">
           <div className="text-gray-400 text-sm mb-2">{item.title}</div>
           <div className="text-green-400 flex items-center text-lg font-semibold">
             <TrendingUp className="w-4 h-4 mr-1" />
             {item.value}
           </div>
         </div>
       </div>
       
        
        ))}
      </div>
    </div>
  );
}