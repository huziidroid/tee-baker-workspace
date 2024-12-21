import React from 'react';
import { ProgressBar } from 'react-native-paper';

import { useAuthStyles } from '../styles';

interface ISignupStepperProps {
  totalSteps?: number;
  currentStep?: number;
}

const SignupStepper = (props: ISignupStepperProps) => {
  const { currentStep, totalSteps = 2 } = props;

  const styles = useAuthStyles();

  return <ProgressBar progress={currentStep / totalSteps} style={styles.signupStepper} />;
};

export default SignupStepper;
