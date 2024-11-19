import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { useAppLoaderStyles } from './app-loader.style';

interface IAppLoaderProps {
  isLoading: boolean;
}

const AppLoader = ({ isLoading = false }: IAppLoaderProps) => {
  const styles = useAppLoaderStyles();

  if (!isLoading) return;
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size="large" hidesWhenStopped />
    </View>
  );
};

export default AppLoader;
