import { View, Text } from 'react-native';
import React from 'react';

import { AppButton, AppTextInput, Spacer, EmailTextInput } from '@/components';

const HomeScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>HomeScreen</Text>

      <Spacer top={50}>
        <EmailTextInput isRequired />
      </Spacer>
      <Spacer top={20}>
        <AppTextInput placeholder="Password" label="Password" isRequired />
      </Spacer>

      <Spacer top={40}>
        <AppButton title="Login" mode="contained" />
      </Spacer>
    </View>
  );
};

export default HomeScreen;
