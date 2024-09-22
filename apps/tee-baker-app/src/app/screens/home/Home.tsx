import { View, Text } from 'react-native';
import React from 'react';

import { AppButton } from '@/components';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <AppButton title="Press me" mode="contained" />
    </View>
  );
};

export default HomeScreen;
