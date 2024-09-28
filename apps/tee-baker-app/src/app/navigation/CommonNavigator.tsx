import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AppNavigator from './AppNavigator';
import { SCREENS } from './constants';

const Stack = createNativeStackNavigator();

const CommonNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.APP_STACK} component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default CommonNavigator;
