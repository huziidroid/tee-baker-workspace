import React from 'react';
import { TextInput } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';

import { useAppTheme } from '@/assets';

import AppTextFormInput from '../app-text-input/app-text-form-input';
import { AppTextFormInputProps } from '../app-text-input/app-text-input.type';

const PhoneInput = (props: Omit<AppTextFormInputProps, 'right' | 'render'> & { mask?: string }) => {
  const { mode = 'flat', mask = '+92 [000] [000] [0000]', ...rest } = props;
  const { colors } = useAppTheme();

  return (
    <AppTextFormInput
      autoCapitalize="none"
      mode={mode}
      label="Phone Number"
      placeholder="Phone number"
      keyboardType="email-address"
      right={
        <TextInput.Icon
          icon="phone"
          size={20}
          style={{ ...(mode === 'flat' && { right: -16 }) }}
          color={isFocused => (isFocused ? colors.primary : colors.onBackground)}
        />
      }
      render={renderProps => <TextInputMask {...renderProps} mask={mask} />}
      {...rest}
    />
  );
};

export default PhoneInput;
