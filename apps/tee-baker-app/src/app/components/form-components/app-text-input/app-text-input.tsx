import React from 'react';
import { Else, If, Then, When } from 'react-if';
import { View } from 'react-native';
import { HelperText, TextInput as PaperTextInput } from 'react-native-paper';

import AppText from '@/components/common/app-text/app-text';

import { useAppTextInputStyles } from './app-text-input.style';
import { AppTextInputProps } from './app-text-input.type';

const AppTextInput = (props: AppTextInputProps) => {
  const {
    flex,
    width,
    mode = 'flat',
    label,
    isRequired,
    error,
    helperText,
    helperTextProps,
    rows = 0,
    multiline,
    contentStyle,
    style,
    outlineStyle,
    ...rest
  } = props;

  const isFlat = mode === 'flat';
  const styles = useAppTextInputStyles({ isFlat, rows, multiline });

  return (
    <View style={{ flex, width }}>
      <When condition={isFlat}>
        <View style={[styles.row, { left: -3 }]}>
          <If condition={typeof label === 'string'}>
            <Then>
              <AppText variant="medium" size={14} color="onBackground">
                {label}
              </AppText>
            </Then>
            <Else>{label}</Else>
          </If>

          {/* Is Required */}
          <When condition={isRequired}>
            <AppText variant="italic-regular" size={12} color="error">
              *
            </AppText>
          </When>
        </View>
      </When>

      <PaperTextInput
        {...rest}
        style={[styles.inputStyle, style]}
        contentStyle={[styles.contentStyle, contentStyle]}
        outlineStyle={[styles.outlineStyle, outlineStyle]}
        label={!isFlat ? label : ''}
        mode={mode}
        error={error}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'auto'}
      />

      <HelperText type={error ? 'error' : 'info'} visible={error || !!helperText} padding="none" {...helperTextProps} style={styles.helperText}>
        {helperText}
      </HelperText>
    </View>
  );
};

export default AppTextInput;
