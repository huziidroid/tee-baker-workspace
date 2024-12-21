import { NavigationContainer, Theme } from '@react-navigation/native';
import React from 'react';
import { useSessionHandler } from 'react-utils';
import { isEmptyOrNil } from 'shared-utils';

import { NavigationService } from '@/services';

import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

interface AppNavigationContainerProps {
  theme?: Theme;
}

const AppNavigationContainer = (props: AppNavigationContainerProps) => {
  const { theme } = props;
  const { session, isNewUser } = useSessionHandler();
  const isAuthenticated = !isEmptyOrNil(session) && !isNewUser;

  return (
    <NavigationContainer ref={NavigationService.navigationRef} theme={theme}>
      {!isAuthenticated && <AuthNavigator />}
      {isAuthenticated && <AppNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
