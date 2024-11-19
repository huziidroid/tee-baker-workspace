import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { LogBox, useColorScheme } from 'react-native';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReactQueryClient } from 'shared-utils';

import { AppDarkTheme, AppLightTheme } from '@/assets';

import AppNavigationContainer from './navigation';

// enables paper theme configuration with react-native navigation
const { DarkTheme, LightTheme } = adaptNavigationTheme({ reactNavigationDark: NavigationDarkTheme, reactNavigationLight: NavigationLightTheme });

LogBox.ignoreLogs(['A props object containing a "key" prop is being spread into JSX']);

const App = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const paperTheme = useMemo(() => (isDark ? AppDarkTheme : AppLightTheme), [isDark]);
  const navigationTheme = useMemo(() => (isDark ? DarkTheme : LightTheme), [isDark]);

  return (
    <QueryClientProvider client={ReactQueryClient}>
      <SafeAreaProvider>
        <PaperProvider theme={paperTheme}>
          <AppNavigationContainer theme={navigationTheme} />
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
