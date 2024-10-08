import React from 'react';

import { SCREENS } from '@/navigation/constants';

import { NavigationService } from '@/services';

import { useStyles } from '@/styles';

import AppText from '../common/app-text/app-text';
import Spacer, { ISpacerProps } from '../common/spacer';

const SignupText = (props: ISpacerProps) => {
  const styles = useStyles();

  const onPressSignup = () => {
    NavigationService.navigate(SCREENS.SIGN_UP);
  };

  return (
    <Spacer top={40} style={styles.alignCenter} {...props}>
      <AppText size={14}>
        Don't have an account?{' '}
        <Spacer top={-2}>
          <AppText variant="medium" size={14} color="primary" onPress={onPressSignup}>
            Sign up
          </AppText>
        </Spacer>
      </AppText>
    </Spacer>
  );
};

export default SignupText;
