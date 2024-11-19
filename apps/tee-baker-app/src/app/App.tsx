import React, { useMemo } from 'react';
import { LogBox, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReactQueryProvider } from 'react-utils';

import { AppDarkTheme, AppLightTheme } from '@/assets';

import AppWrapper from './app-wrapper';

LogBox.ignoreLogs(['A props object containing a "key" prop is being spread into JSX']);

const App = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const paperTheme = useMemo(() => (isDark ? AppDarkTheme : AppLightTheme), [isDark]);

  return (
    <ReactQueryProvider>
      <SafeAreaProvider>
        <PaperProvider theme={paperTheme}>
          <AppWrapper />
        </PaperProvider>
      </SafeAreaProvider>
    </ReactQueryProvider>
  );
};

export default App;
