import { APP_NAME } from '@env';
import React from 'react';
import { View } from 'react-native';

import { AppButton, AppText, LoginOptionButton, ScreenWrapper, SignupText, Spacer } from '@/components';

import { AppIcon } from '@/icons';

import { SCREENS } from '@/navigation/constants';

import { NavigationService } from '@/services';

import { LOGIN_OPTIONS } from '@/utils';

import { useLandingStyles } from './landing.style';

const LandingScreen = () => {
  const styles = useLandingStyles();

  const onPressLoginWithPassword = () => {
    NavigationService.navigate(SCREENS.SING_IN);
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
        <SignupText />
      </Spacer>
    </ScreenWrapper>
  );
};

export default LandingScreen;
