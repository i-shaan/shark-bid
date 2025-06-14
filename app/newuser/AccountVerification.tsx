"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { AccountFormData } from '../types/types';


interface AccountVerificationProps {
  onClose: () => void;
  onSubmit: (data: AccountFormData) => void;
  step: 'phone' | 'otp';
  phoneNumber?: string;
}

const AccountVerification: React.FC<AccountVerificationProps> = ({
  onSubmit,
  step,
  phoneNumber,
}) => {
  const { register, handleSubmit } = useForm<AccountFormData>();

  return (
    <div className="h-full px-8 w-[35rem]">
      <div className="flex justify-between items-center ">
        <h2 className="text-3xl font-semibold text-white">
          {step === 'phone' ? "What's your phone number?" : 'Enter OTP received on phone'}
        </h2>
        
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        {step === 'phone' ? (
          <div className='mb-[4rem]'>
            <p className="text-gray-400 mb-4 mt-4">Enter your number to continue</p>
            <div className="flex gap-2 mt-[3rem]">
              <div className="w-20 ">
                <input
                  type="text"
                  value="+91"
                  disabled
                  className="w-full px-3 py-2 border border-[#BBBBBB] text-white rounded-md"
                />
              </div>
              <input
                type="tel"
                {...register('phone')}
                placeholder="Enter phone"
                className="flex-1 px-3 py-2  text-white border border-[#BBBBBB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-400 mb-4 mt-2">
              We have sent a verification code to your phone number {phoneNumber}
            </p>
            <p className="text-white mb-4 mt-2">
              Enter OTP
            </p>
            <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
  <input
    key={i}
    type="text"
    maxLength={1}
    {...register(`otp.${i}` as const)}  // 👈 fix is here
    className="w-12 h-12 text-center border border-[#BBBBBB] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
))}

            </div>
            <p className="text-gray-400 mt-2">
              Resend code in <span className="text-white">00:25</span>
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-4 px-6 rounded-full transition-colors duration-200 text-lg "
        >
          {step === 'phone' ? 'Confirm' : 'Verify'}
        </button>
      </form>
    </div>
  );
};

export default AccountVerification;