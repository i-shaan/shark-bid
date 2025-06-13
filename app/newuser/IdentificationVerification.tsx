import React from 'react';
import { useForm } from 'react-hook-form';
import { IdentityFormData} from '../types/types';
import { ChevronLeft } from 'lucide-react';

import AdditionalInformationForm from './Additional';
import Liveness from './Liveness';
import AadhaarVerification from './AadharVerification';

interface IdentityVerificationProps {
  onClose: () => void;
  onBack: () => void;
  onSubmit: (data: IdentityFormData) => void;
  currentStep: string;
}

const IdentityVerification: React.FC<IdentityVerificationProps> = ({
  onBack,
  onSubmit,
  currentStep,
}) => {
  const { register, handleSubmit } = useForm<IdentityFormData>();

  const stepTitleMap: Record<string, string> = {
    country: 'Select Country to start your identity verification',
    pan: 'PAN Verification',
    aadhar: 'Aadhar Verification',
    liveness: 'Liveness Check',
    additional: 'Additional Information',
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'country':
        return (
          <div className="w-[50%] space-y-6">
            <div>
              <p className="text-gray-400 mb-2">Usually takes around 2 minutes</p>
              <label className="block text-white mb-2">Country of residence</label>
              <select
                {...register('country')}
                className="w-full px-3 py-2 border border-[#bbbbbb] text-white rounded-md"
              >
                <option value="india">India</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-md">
              Verify
            </button>
          </div>
        );

      case 'pan':
        return (
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 mb-4">Next: Aadhaar verification</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Enter your name (as per PAN)</label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="Ex: RAJESHWAR P"
                    className="w-full px-3 py-2 border border-[#bbbbbb] text-white rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Date of Birth</label>
                  <input
                    type="date"
                    {...register('dateOfBirth')}
                    className="w-full px-3 py-2 border border-[#bbbbbb] text-white rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">PAN</label>
                  <input
                    type="text"
                    {...register('pan')}
                    placeholder="Ex: ABCDE1234F"
                    className="w-full px-3 py-2 border border-[#bbbbbb] text-white rounded-md"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('isAdult')}
                    className="w-4 h-4 text-blue-500"
                  />
                  <label className="ml-2 text-white">
                    I confirm that I am above 18 years old
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-md">
              Verify
            </button>
          </div>
        );

      case 'aadhar':
        return (
         <AadhaarVerification/>
        );

      case 'liveness':
        return (
          <Liveness/>
        );

      case 'additional':
        return (
          <AdditionalInformationForm/>
        );

      default:
        return <p className="text-white">Invalid step</p>;
    }
  };

  return (
    <div className="h-full px-8 w-full">
      <div className="flex justify-between mb-3">
        <div className="flex ">
          <button onClick={onBack} className="text-gray-400 hover:text-white mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-semibold text-white">{stepTitleMap[currentStep] || 'Identity Verification'}</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStepContent()}
      </form>
    </div>
  );
};

export default IdentityVerification;
