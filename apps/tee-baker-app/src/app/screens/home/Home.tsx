import { View, Text } from 'react-native';
import React from 'react';

import { AppButton, AppText } from '@/components';

const HomeScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>HomeScreen</Text>
      <AppButton title="Press me" mode="contained" />
      <AppText variant="italic-medium" size={19}>
        Helllosss
      </AppText>
    </View>
  );
};

export default HomeScreen;
