import React from 'react';
import { Controller } from 'react-hook-form';
import { isEmptyOrNil } from 'shared-utils';

import AppTextInput from './app-text-input';
import { AppTextFormInputProps } from './app-text-input.type';

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
