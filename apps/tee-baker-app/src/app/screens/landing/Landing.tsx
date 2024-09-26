import { View } from 'react-native';
import React from 'react';
import { APP_NAME } from '@env';

import { useLandingStyles } from './Landing.style';
import { AppIcon } from '@/icons';
import { AppButton, AppText, LoginOptionButton, ScreenWrapper, Spacer } from '@/components';
import { LOGIN_OPTIONS } from './Landing.utils';

const LandingScreen = () => {
  const styles = useLandingStyles();

  const onPressLoginWithPassword = () => {
    //
  };

  const onPressSignup = () => {
    //
  };

  return (
    <ScreenWrapper safeAreaInsets={{ top: true, bottom: true }}>
      <View style={styles.content}>
        <AppIcon />
        <Spacer top={40} bottom={20}>
          <AppText size={30} variant="medium">
            {APP_NAME}
          </AppText>
        </Spacer>

        <AppText size={14}>Welcome! Let's dive in into account!</AppText>

        {/* Login Options */}
        <Spacer top={40} style={styles.loginOptionContainer}>
          {LOGIN_OPTIONS.map((x, index) => {
            return <LoginOptionButton key={x.label + index.toString()} label={x.label} icon={x.icon} />;
          })}
        </Spacer>
      </View>

      <Spacer horizontal={20} flex={0.25}>
        <AppButton title="Sign in with password" mode="contained" onPress={onPressLoginWithPassword} />

        {/* Don't have an account section */}
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
      </Spacer>
    </ScreenWrapper>
  );
};

export default LandingScreen;
