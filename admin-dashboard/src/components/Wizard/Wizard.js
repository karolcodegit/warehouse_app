import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import Button from '../Button/Button';

const Wizard = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const goNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const goBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const ActiveComponent = steps[activeStep].component;

  return (
    <div>
      <Stepper activeStep={ activeStep } 
        titleFontSize={16}
        lineHeight={3}
        titleTop={30} 
        steps={ steps.map((step, index) => ({title: step.title})) }/>
      <ActiveComponent goNext={goNext} goBack={goBack} />
      <div className='flex fixed bottom-20 right-4 gap-4'>
        <Button onClick={goBack} disabled={activeStep === 0}>Previous</Button>
        <Button onClick={goNext} disabled={activeStep === steps.length - 1}>Next</Button>
      </div>
    </div>
  );
};

export default Wizard;