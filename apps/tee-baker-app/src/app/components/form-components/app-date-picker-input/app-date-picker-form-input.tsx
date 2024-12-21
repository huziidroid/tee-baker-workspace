import React from 'react';
import { Controller } from 'react-hook-form';
import { isEmptyOrNil } from 'shared-utils';

import { AppDatePickerInput } from '@/components';

import { IAppDatePickerFormInputProps } from './app-date-picker-input.type';

const AppDatePickerFormInput = (props: IAppDatePickerFormInputProps) => {
  const { name, control, handleOnChange, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur, disabled }, fieldState: { error } }) => (
        <AppDatePickerInput
          {...rest}
          onBlur={onBlur}
          disabled={disabled}
          value={value}
          hasError={!isEmptyOrNil(error)}
          onChange={date => {
            onChange(date);
            if (handleOnChange) handleOnChange(date);
          }}
        />
      )}
    />
  );
};

export default AppDatePickerFormInput;
