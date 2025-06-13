import React from 'react';
import Image from 'next/image';

export default function AadhaarVerification() {
  const handleVerify = () => {
    alert('Starting Aadhaar verification with DigiLocker...');
  };

  return (

      <div className="w-[50%]">


        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-5">
          Verify your Aadhaar using Digilocker
        </p>

        {/* Central Content */}
        <div className="flex flex-col items-center justify-center flex-1 min-h-[400px] ">
          {/* DigiLocker Logo and Elements */}
          <div className="w-full h-full mb-6">
  <Image
    src="/aadhar.png"
    alt="DigiLocker Logo"
    width={400} // Change as needed
    height={400} // Change as needed
  />
</div>

        </div>
        {/* Verify Button */}
        <div className="mt-auto">
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