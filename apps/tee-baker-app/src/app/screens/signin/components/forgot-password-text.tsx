import React from 'react';
import { View } from 'react-native';

import { AppText, SignupText } from '@/components';

import { useSiginStyles } from '../signin.style';

const ForgotPasswordText = () => {
  const styles = useSiginStyles();

  const onPressForgotPassword = () => {
    //
  };

  return (
    <View style={[styles.alignCenter, styles.contentSpacing]}>
      <AppText variant="medium" color="primary" onPress={onPressForgotPassword}>
        Forgot password?
      </AppText>
      <SignupText top={30} />
    </View>
  );
};

export default ForgotPasswordText;
