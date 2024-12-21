import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { PrivacyPolicyScreen } from '@/screens';

import AppHeader from './app-header/app-header';
import BottomTabs from './bottom-tabs/bottom-tabs';
import { SCREENS } from './constants';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: AppHeader }}>
      <Stack.Screen name={SCREENS.BOTTOM_TABS} component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name={SCREENS.PRIVACY_POLICY} component={PrivacyPolicyScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
