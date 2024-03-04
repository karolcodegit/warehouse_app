import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Stepper from '../Stepper/Stepper';


const StepperModal = ({ isOpen, handleCloseModal, steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleCloseModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white p-8 border border-gray-300 transform overflow-hidden text-left align-middle shadow-xl transition-all opacity-100 scale-100">
            <Stepper steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <div className="mt-4 flex justify-end">
              {currentStep > 0 && (
                <button onClick={handleBack} className="px-4 py-2 bg-gray-300 text-black rounded mr-2">Back</button>
              )}

              {currentStep < steps.length - 1 ? (
                <button onClick={handleNext} className="px-4 py-2 bg-gray-300 text-black rounded mr-2">Next</button>
              ) : (
                <button onClick={handleCloseModal} className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
              )}
              <button onClick={handleCloseModal} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default StepperModal;