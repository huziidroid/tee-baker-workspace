import React from 'react';
import { Controller } from 'react-hook-form';

import { isEmptyOrNil } from '@/utils';

import AppTextInput from './AppTextInput';
import { AppTextFormInputProps } from './AppTextInput.type';

const AppTextFormInput = (props: AppTextFormInputProps) => {
  const { control, name, handleOnChange, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <AppTextInput
          value={value}
          error={!isEmptyOrNil(error?.message)}
          helperText={error?.message}
          onBlur={onBlur}
          onChangeText={text => {
            onChange(text);
            if (handleOnChange) handleOnChange(text);
          }}
          {...rest}
        />
      )}
    />
  );
};

export default AppTextFormInput;
