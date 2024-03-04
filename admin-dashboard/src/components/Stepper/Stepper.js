import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepperModal from "../StepperModal/StepperModal";

const Stepper = ({ steps }) => {
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
    <div>
    <div className="bg-white">
      <div className="p-6 max-w-7xl mx-auto">
        <nav aria-label="Progress">
          <ol role="list" className="flex">
            {steps.map((step, index) => (
              <li key={index} className="flex-1 px-3">
                <a
                  className={`pt-4 pl-0 pb-0 border-t-4 border-l-0 flex-col flex items-center justify-center text-center  bg-white ${
                    currentStep === index
                      ? " border-indigo-600 text-indigo-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <span className="font-medium text-sm">{`Step ${
                    index + 1
                  }`}</span>
                  <span className="font-medium text-sm">{step.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>

    <AnimatePresence mode="out-in">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
      >
        {steps[currentStep].component}
      </motion.div>
    </AnimatePresence>

  </div>
  );
};

export default Stepper;
