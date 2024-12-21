import React from 'react';
import { Controller } from 'react-hook-form';
import { isEmptyOrNil } from 'shared-utils';

import AppSelect from './app-select';
import { IAppFormSelectProps } from './app-select.type';

const AppFormSelect = <T,>(props: IAppFormSelectProps<T>) => {
  const { name, control, handleOnChange, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <AppSelect
          value={value}
          error={!isEmptyOrNil(error?.message)}
          helperText={error?.message}
          onValueChange={val => {
            if (handleOnChange) handleOnChange(val);
            onChange(val);
          }}
          {...rest}
        />
      )}
    />
  );
};

export default AppFormSelect;
