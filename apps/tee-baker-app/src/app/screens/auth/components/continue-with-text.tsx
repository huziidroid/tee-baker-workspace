import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';

import { AppText, Spacer } from '@/components';

import { useAuthStyles } from '../styles';

const ContinueWithText = () => {
  const styles = useAuthStyles();

  return (
    <View style={styles.row}>
      <Divider style={styles.flex1} />
      <Spacer horizontal={20}>
        <AppText size={14} variant="thin">
          or continue with
        </AppText>
      </Spacer>
      <Divider style={styles.flex1} />
    </View>
  );
};

export default ContinueWithText;
