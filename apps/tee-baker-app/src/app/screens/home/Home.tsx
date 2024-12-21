import React from 'react';
import { Text, View } from 'react-native';
import { useSessionHandler } from 'react-utils';

import { AppButton } from '@/components';

import { KeychainService } from '@/services';

const HomeScreen = () => {
  const { dispatch } = useSessionHandler();

  const resetSession = async () => {
    dispatch(null, false);
    await KeychainService.clearToken();
  };
  return (
    <View style={{ padding: 20 }}>
      <Text>HomeScreen</Text>
      <AppButton onPress={resetSession} title="Reset" />
    </View>
  );
};

export default HomeScreen;
