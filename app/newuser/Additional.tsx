import React, { useState } from 'react';
// import { ChevronLeft, HelpCircle } from 'lucide-react';

export default function AdditionalInformationForm() {
  const [selectedIncome, setSelectedIncome] = useState('');
  const [occupation, setOccupation] = useState('Salaried');
  const [isChecked, setIsChecked] = useState(false);

  const incomeRanges = [
    '< ₹5 lakhs',
    '₹5-10 lakhs',
    '₹10-25 lakhs',
    '₹25-50 lakhs',
    '₹50 lakhs to ₹1 crore',
    '> ₹1 crore'
  ];

  const handleVerify = () => {
    if (selectedIncome && occupation && isChecked) {
      alert('Information verified successfully!');
    } else {
      alert('Please fill in all fields and accept the terms.');
    }
  };

  return (
    <div className="  text-white ">
      <div className="">
        {/* Header */}
       

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-4 mt-2">
          Usually takes around 2 minutes
        </p>

        {/* Annual Income Section */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-medium mt-6 mb-2"> 
            What is your annual income?
          </h2>
          
          {/* Income Range Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {incomeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedIncome(range)}
                className={`px-4 py-3 rounded-full border transition-colors duration-200 text-sm font-medium ${
                  selectedIncome === range
                    ? 'bg-gray-600 border-gray-500 text-white'
                    : 'bg-transparent border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          
        </div>
        <div className='w-[50%]'>
        {/* Occupation Section */}
        <div className="mb-8">
          <label className="block text-white text-lg font-medium mb-4">
            Occupation
          </label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full border border-gray-600 rounded-lg px-4 py-4 text-white  focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
          />
        </div>

        {/* Checkbox */}
      


        <div className="flex items-start gap-3 mb-8 ">
          <input
            type="checkbox"
            id="acknowledge"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-5 h-5 mt-0.5 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-gray-500 checked:bg-gray-600 checked:border-gray-500"
          />
          <label htmlFor="acknowledge" className="text-gray-300 text-sm leading-relaxed">
            By checking this, I acknowledge that all the information I provided is true to the best of my knowledge and that I agree to the terms and conditions
          </label>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-gray-400 hover:bg-gray-300 text-gray-800 font-medium py-4 px-6 rounded-full transition-colors duration-200"
        >
          Verify
        </button>
      </div>
    </div>
    </div>
  );
}