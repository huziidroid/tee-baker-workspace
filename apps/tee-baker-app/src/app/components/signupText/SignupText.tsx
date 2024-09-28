import React from 'react';

import { SCREENS } from '@/navigation/constants';

import { NavigationService } from '@/services';

import { useStyles } from '@/styles';

import Spacer from '../common/Spacer';
import AppText from '../common/appText/AppText';

const SignupText = () => {
  const styles = useStyles();

  const onPressSignup = () => {
    NavigationService.navigate(SCREENS.SIGN_UP);
  };

  return (
    <Spacer top={40} style={styles.alignCenter}>
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
