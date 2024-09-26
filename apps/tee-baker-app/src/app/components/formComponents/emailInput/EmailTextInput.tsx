import React from 'react';
import { AppTextInputProps } from '../appTextInput/AppTextInput.type';
import AppTextInput from '../appTextInput/AppTextInput';

import { useAppTheme } from '@/assets';
import { TextInput } from 'react-native-paper';

const EmailTextInput = (props: Omit<AppTextInputProps, 'right' | 'keyboardType'>) => {
  const { mode = 'flat', ...rest } = props;
  const { colors } = useAppTheme();

  return (
    <AppTextInput
      {...rest}
      autoCapitalize="none"
      mode={mode}
      label="Email"
      placeholder="Email"
      keyboardType="email-address"
      right={
        <TextInput.Icon
          icon="email-outline"
          size={20}
          style={{ ...(mode === 'flat' && { right: -16 }) }}
          color={isFocused => (isFocused ? colors.primary : colors.onBackground)}
        />
      }
    />
  );
};

export default EmailTextInput;
