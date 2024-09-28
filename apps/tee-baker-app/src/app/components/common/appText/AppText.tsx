import React, { PropsWithChildren } from 'react';
import { Else, If, Then } from 'react-if';
import { TouchableOpacity, View } from 'react-native';
import { customText } from 'react-native-paper';

import Spacer from '../Spacer';
import { useAppTextStyles } from './AppText.style';
import { AppTextProps, AppTextVariants } from './AppText.type';

const PaperText = customText<AppTextVariants>();

const AppText = (props: PropsWithChildren<AppTextProps>) => {
  const {
    onPress,
    children,
    leftAccessory,
    rightAccessory,
    color = 'onBackground',
    numberOfLines,
    size = 16,
    textAlign = 'auto',
    textDecorationLine = 'none',
    textProps,
    textTransform = 'none',
    variant = 'regular',
    isLoading = false,
  } = props;
  const isDisabled = !onPress;

  const styles = useAppTextStyles({ color, size, textAlign, textDecorationLine, textTransform });

  return (
    <If condition={isLoading}>
      <Then>{/* <TextSkeleton /> */}</Then>
      <Else>
        <If condition={isDisabled}>
          <Then>
            <View style={styles.row}>
              <Spacer right={2}>{leftAccessory}</Spacer>
              <PaperText {...textProps} variant={variant} style={[styles.appText, textProps?.style]} numberOfLines={numberOfLines}>
                {children}
              </PaperText>
              <Spacer left={2}>{rightAccessory}</Spacer>
            </View>
          </Then>

          <Else>
            <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.6}>
              <Spacer right={2}>{leftAccessory}</Spacer>
              <PaperText {...textProps} variant={variant} style={[styles.appText, textProps?.style]} numberOfLines={numberOfLines}>
                {children}
              </PaperText>
              <Spacer left={2}>{rightAccessory}</Spacer>
            </TouchableOpacity>
          </Else>
        </If>
      </Else>
    </If>
  );
};

export default AppText;
