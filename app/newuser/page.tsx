"use client";
import React, { useState } from 'react';
import StepIndicator from './StepIndicator';
import AccountVerification from './AccountVerification';
import IdentityVerification from './IdentificationVerification';
import { AccountFormData, Step } from '../types/types';
import BankDetailsForm from './BankDetail';

const NewUser: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentIdentityStep, setCurrentIdentityStep] = useState('country');
  const [verificationStep, setVerificationStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');

  const steps: Step[] = [
    {
      id: 1,
      title: 'Account Verification',
      isCompleted: currentStep > 1,
      isActive: currentStep === 1,
    },
    {
      id: 2,
      title: 'Identity Verification',
      isCompleted: currentStep > 2,
      isActive: currentStep === 2,
    },
    {
      id: 3,
      title: 'Bank Account Addition',
      isCompleted: currentStep > 3,
      isActive: currentStep === 3,
    },
  ];

  const handleAccountSubmit = (data: AccountFormData) => {
    if (verificationStep === 'phone') {
      setPhoneNumber(data.phone);
      setVerificationStep('otp');
    } else {
      setCurrentStep(2);
    }
  };

  const handleIdentitySubmit = () => {
    switch (currentIdentityStep) {
      case 'country':
        setCurrentIdentityStep('pan');
        break;
      case 'pan':
        setCurrentIdentityStep('aadhar');
        break;
      case 'aadhar':
        setCurrentIdentityStep('liveness');
        break;
      case 'liveness':
        setCurrentIdentityStep('additional');
        break;
      case 'additional':
        setCurrentStep(3);
        break;
    }
  };

  const handleClose = () => {
    // Implement modal close if needed
  };

  const handleBack = () => {
    switch (currentIdentityStep) {
      case 'pan':
        setCurrentIdentityStep('country');
        break;
      case 'aadhar':
        setCurrentIdentityStep('pan');
        break;
      case 'liveness':
        setCurrentIdentityStep('aadhar');
        break;
      case 'additional':
        setCurrentIdentityStep('liveness');
        break;
      default:
        if (verificationStep === 'otp') {
          setVerificationStep('phone');
        }
        break;
    }
  };

  return (
    <div className="w-full h-screen flex">
<div className="h-full w-full rounded-lg shadow-xl flex">

        {/* Left Panel */}
        <div className="h-full w-1/3 bg-[#242329] flex flex-col items-center pt-[10rem]   ">

          <h1 className="text-2xl font-bold text-white mb-12">Get Investment Ready</h1>
          <div className='' >

        
          <StepIndicator steps={steps} currentIdentityStep={currentIdentityStep} />
          </div>
        </div>

        {/* Right Panel */}
        <div className="h-full w-2/3 bg-[#35333C] px-10 flex  pt-[10rem]" >
          {currentStep === 1 && (
            <AccountVerification
              onClose={handleClose}
              onSubmit={handleAccountSubmit}
              step={verificationStep}
              phoneNumber={phoneNumber}
            />
          )}
          {currentStep === 2 && (
            <IdentityVerification
              onClose={handleClose}
              onBack={handleBack}
              onSubmit={handleIdentitySubmit}
              currentStep={currentIdentityStep}
            />
          )}
          {currentStep === 3 && (
            <BankDetailsForm/>)
          }
        </div>
      </div>
    </div>
  );
};

export default NewUser;
