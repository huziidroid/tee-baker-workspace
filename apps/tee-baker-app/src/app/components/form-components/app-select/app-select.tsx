import React, { useMemo, useState } from 'react';
import { When } from 'react-if';
import { StyleSheet, View } from 'react-native';
import { HelperText } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import AppText from '@/components/common/app-text/app-text';

import { ChevronDownIcon, ChevronUpIcon } from '@/icons';

import { useAppSelectStyles } from './app-select.style';
import { IAppSelectProps } from './app-select.type';

const Icon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'down':
      return <ChevronDownIcon size={18} />;
    case 'up':
      return <ChevronUpIcon size={18} />;
  }
};
const AppSelect = <T,>(props: IAppSelectProps<T>) => {
  const {
    label,
    labelProps,
    placeholder,
    items,
    onValueChange,
    value,
    placeholderStyle,
    selectContainerStyle,
    selectStyle,
    width,
    error,
    disabled,
    required,
    helperText,
    helperTextProps,
  } = props;

  const [icon, setIcon] = useState('down');

  const styles = useAppSelectStyles({ disabled, focused: icon === 'up', error });

  const pickerPlaceHolder = placeholder
    ? {
        label: placeholder,
        value: null,
      }
    : {
        label: 'Select',
        value: null,
      };

  const selectStyleObject = useMemo(
    () => ({
      inputAndroid: StyleSheet.flatten([styles.select, selectStyle]),
      inputIOS: StyleSheet.flatten([styles.select, selectStyle]),
      placeholder: StyleSheet.flatten([styles.placeholder, placeholderStyle]),
      inputIOSContainer: StyleSheet.flatten([styles.selectContainer, selectContainerStyle]),
      inputIOSCinputAndroidContainerontainer: StyleSheet.flatten([styles.selectContainer, selectContainerStyle]),
    }),
    [placeholderStyle, selectContainerStyle, selectStyle, styles],
  );

  return (
    <View style={[styles.gapMd, { width }]}>
      <When condition={label}>
        <View style={[styles.row, { left: -3 }]}>
          <AppText {...labelProps} size={14} variant="medium" color="onBackground">
            {label}
          </AppText>

          <When condition={required}>
            <AppText variant="italic-regular" size={12} color="error">
              *
            </AppText>
          </When>
        </View>
      </When>

      <View>
        <RNPickerSelect
          style={selectStyleObject}
          placeholder={pickerPlaceHolder}
          items={items}
          onValueChange={onValueChange}
          value={value}
          onOpen={() => setIcon('up')}
          onClose={() => setIcon('down')}
          disabled={disabled}
          Icon={() => <Icon icon={icon} />}
        />

        <HelperText type={error ? 'error' : 'info'} visible={error && !!helperText} padding="none" {...helperTextProps} style={styles.helperText}>
          {helperText}
        </HelperText>
      </View>
    </View>
  );
};

export default AppSelect;
