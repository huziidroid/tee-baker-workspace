import React from 'react';
import { Else, If, Then, When } from 'react-if';
import { View } from 'react-native';
import { HelperText, TextInput as PaperTextInput } from 'react-native-paper';

import AppText from '@/components/common/app-text/app-text';

import Spacer from '../../common/spacer';
import { useAppTextInputStyles } from './app-text-input.style';
import { AppTextInputProps } from './app-text-input.type';

const AppTextInput = (props: AppTextInputProps) => {
  const { flex, width, mode = 'flat', label, isRequired, error, helperText, helperTextProps, ...rest } = props;

  const isFlat = mode === 'flat';
  const styles = useAppTextInputStyles({ isFlat });

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
            <Spacer top={4}>
              <AppText variant="italic-regular" size={12} color="error">
                *
              </AppText>
            </Spacer>
          </When>
        </View>
      </When>
      <PaperTextInput
        style={styles.inputStyle}
        mode={mode}
        contentStyle={styles.contentStyle}
        outlineStyle={styles.outlineStyle}
        label={!isFlat ? label : ''}
        error={error}
        {...rest}
      />

      <HelperText type="error" visible={error || !!helperText} padding="none" {...helperTextProps}>
        {helperText}
      </HelperText>
    </View>
  );
};

export default AppTextInput;
