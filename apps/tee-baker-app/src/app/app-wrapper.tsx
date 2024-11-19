import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { Snackbar, adaptNavigationTheme } from 'react-native-paper';
import { useErrorHandler, useLoadingHandler } from 'react-utils';
import { isEmptyOrNil } from 'shared-utils';

import { AppLoader } from './components';
import AppNavigationContainer from './navigation';
import { useVerifySession } from './services';

// enables paper theme configuration with react-native navigation
const { DarkTheme, LightTheme } = adaptNavigationTheme({ reactNavigationDark: NavigationDarkTheme, reactNavigationLight: NavigationLightTheme });

const AppWrapper = () => {
  useVerifySession();

  const { error, dispatch } = useErrorHandler();
  const { isLoading } = useLoadingHandler();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const navigationTheme = useMemo(() => (isDark ? DarkTheme : LightTheme), [isDark]);

  return (
    <React.Fragment>
      <AppNavigationContainer theme={navigationTheme} />
      <AppLoader isLoading={isLoading} />

      <Snackbar visible={!isEmptyOrNil(error)} onDismiss={() => dispatch(null)}>
        {error?.message}
      </Snackbar>
    </React.Fragment>
  );
};

export default AppWrapper;
