import React from 'react';
import { View } from 'react-native';

import { AppText, Spacer } from '@/components';

interface IGreetingText {
  description: string;
  icon?: React.ReactNode | string;
  label?: string;
}

const GreetingText = (props: IGreetingText) => {
  const { description, icon = '👋', label = 'Welcome back' } = props;

  return (
    <View>
      <AppText size={25} variant="medium">
        {label} {icon}
      </AppText>

      <Spacer top={20}>
        <AppText size={14}>{description}</AppText>
      </Spacer>
    </View>
  );
};

export default GreetingText;
