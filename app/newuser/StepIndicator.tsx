import React from 'react';
import { Step } from '../types/types';
import { Check } from 'lucide-react';
import classNames from 'classnames';

interface StepIndicatorProps {
  steps: Step[];
  currentIdentityStep?: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentIdentityStep }) => {
  // Define the identity verification sub-steps with their order
  const identitySubSteps = [
    { key: 'country', title: 'Country Selection', order: 1 },
    { key: 'pan', title: 'PAN Verification', order: 2 },
    { key: 'aadhar', title: 'Aadhar Verification', order: 3 },
    { key: 'liveness', title: 'Liveness Check', order: 4 },
    { key: 'additional', title: 'Additional Information', order: 5 },
  ];

  // Calculate dynamic height for sub-steps
  const calculateSubStepsHeight = () => {
    // Each sub-step card has:
    // - py-4 (padding top + bottom) = 32px
    // - space-y-4 (gap between items) = 16px per gap
    // - mt-6 (top margin) = 24px
    const subStepHeight = 64; // py-4 + text content height
    const gapHeight = 16; // space-y-4
    const topMargin = 24; // mt-6
    
    const totalHeight = (identitySubSteps.length * subStepHeight) + 
                       ((identitySubSteps.length - 1) * gapHeight) + 
                       topMargin;
    
    return totalHeight;
  };

  // Get current sub-step order for progress calculation
  const getCurrentSubStepOrder = () => {
    const currentSubStep = identitySubSteps.find(step => step.key === currentIdentityStep);
    return currentSubStep ? currentSubStep.order : 0;
  };

  // Check if a sub-step is completed
  const isSubStepCompleted = (subStepOrder: number) => {
    return getCurrentSubStepOrder() > subStepOrder;
  };

  // Check if a sub-step is currently active
  const isSubStepActive = (subStepKey: string) => {
    return currentIdentityStep === subStepKey;
  };

  // Calculate progress percentage for identity verification
  const getIdentityProgress = () => {
    const currentOrder = getCurrentSubStepOrder();
    return (currentOrder / identitySubSteps.length) * 100;
  };

  // Calculate the fill percentage for connecting lines
  const getLineFillPercentage = (stepIndex: number) => {
    const step = steps[stepIndex];
    
    if (step.isCompleted) {
      return 100;
    }
    
    if (step.isActive) {
      if (step.id === 2) {
        // For identity verification step, use sub-step progress
        return getIdentityProgress();
      }
      return 50; // 50% for active but not completed steps
    }
    
    return 0;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full h-full rounded-lg">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div
                  className={classNames(
                    'flex items-center justify-center w-10 h-10 rounded-full relative z-10 flex-shrink-0',
                    {
                      'bg-[#214638] text-[#00FF00]': step.isCompleted,
                      'bg-[#3E6CC7] text-white': step.isActive && !step.isCompleted,
                      'bg-gray-700 text-gray-400': !step.isActive && !step.isCompleted,
                    }
                  )}
                >
                  {step.isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                  
                  {/* Progress ring for identity verification step */}
                  {step.id === 2 && step.isActive && (
                    <div className="absolute inset-0">
                      <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                        <circle
                          cx="20"
                          cy="20"
                          r="18"
                          stroke="rgba(59, 130, 246, 0.3)"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="20"
                          cy="20"
                          r="18"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 18}`}
                          strokeDashoffset={`${2 * Math.PI * 18 * (1 - getIdentityProgress() / 100)}`}
                          className="transition-all duration-500 ease-in-out"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Progressive vertical line connecting steps */}
                {index < steps.length - 1 && (
                  <div 
                    className="relative w-1  transition-all duration-500 ease-in-out"
                    style={{
                      height: step.id === 2 && step.isActive 
                        ? `${calculateSubStepsHeight()}px` 
                        : '32px' // h-8 equivalent
                    }}
                  >
                    {/* Background line */}
                    <div className="absolute inset-0 w-1 bg-gray-700 rounded-full" />
                    
                    {/* Progressive fill line */}
                    <div
                      className={classNames(
                        'absolute top-0 left-0 w-1  rounded-full transition-all duration-700 ease-in-out',
                        {
                          'bg-[#214638]': step.isCompleted,
                          'bg-[#3E6CC7]': step.isActive,
                          'bg-gray-700': !step.isActive && !step.isCompleted,
                        }
                      )}
                      style={{
                        height: `${getLineFillPercentage(index)}%`,
                      }}
                    />
                  </div>
                )}
              </div>
              
              <div className="ml-4 flex-1">
                <div className="mt-1">
                  <span
                    className={classNames('text-lg font-semibold', {
                      'text-white': step.isActive || step.isCompleted,
                      'text-[#BBBBBB]': !step.isActive && !step.isCompleted,
                    })}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Identity Verification sub-steps with card-style design */}
                {step.id === 2 && step.isActive && (
                  <div className="space-y-4 mt-6  ml-4">
                    {identitySubSteps.map((subStep) => (
                      <div key={subStep.key} className="relative">
                        <div
                          className={classNames(
                            'w-full px-6 py-4 rounded-lg transition-all duration-300 ease-in-out',
                            {
                              'bg-[#4A5568] text-white': isSubStepActive(subStep.key),
                              'bg-[#2D5A3D] text-white': isSubStepCompleted(subStep.order),
                              'bg-[#2D3748] text-gray-400': !isSubStepActive(subStep.key) && !isSubStepCompleted(subStep.order),
                            }
                          )}
                        >
                          <span className="font-medium text-lg">
                            {subStep.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;