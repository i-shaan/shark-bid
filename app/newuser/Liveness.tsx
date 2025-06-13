import React from 'react';
import { Check, X, Lightbulb, Glasses, GraduationCap } from 'lucide-react';

export default function Liveness() {
  const handleVerify = () => {
    alert('Starting selfie verification...');
  };

  return (
    
      <div className="w-[50%]">
        {/* Selfie Tips Section */}
        <div className="text-center mb-12">
          <h2 className="text-gray-400 text-xl font-medium mb-8 ">We need to verify your selfie against your document picture.</h2>
          
          {/* Tips with checkmarks */}
          <div className="space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3">
            
              <span className="text-gray-400 text-lg">Selfie Tips</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-400 text-lg">Good lighting on your face</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-400 text-lg">Keep Webcam in front of you</span>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            {/* Bright Light */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <Lightbulb className="w-12 h-12 text-gray-500" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-gray-400 text-sm">Bright Light</span>
            </div>

            {/* No Glasses */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <Glasses className="w-12 h-12 text-gray-500" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-gray-400 text-sm">No Glasses</span>
            </div>

            {/* No Hat */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <GraduationCap className="w-12 h-12 text-gray-500" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-gray-400 text-sm">No Hat</span>
            </div>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-4 px-6 rounded-full transition-colors duration-200 text-lg"
          >
            Verify
          </button>
        </div>
      </div>
   
  );
}