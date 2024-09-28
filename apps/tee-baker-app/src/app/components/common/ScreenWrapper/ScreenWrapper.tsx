import React, { PropsWithChildren, useMemo } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View, ViewProps } from 'react-native';
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

import { useScreenWrapperStyles } from './ScreenWrapper.style';

interface IScreenWrapperProps {
  type?: 'scroll' | 'none' | 'keyboard';
  viewProps?: ViewProps;
  scrollViewProps?: ScrollViewProps;
  keyboardAwareScrollViewProps?: KeyboardAwareScrollViewProps;
  backgroundColor?: ReactNativePaper.ThemeColorsKeys;
  safeAreaInsets?: { left?: boolean; right?: boolean; top?: boolean; bottom?: boolean };
}

const ScreenWrapper = (props: PropsWithChildren<IScreenWrapperProps>) => {
  const {
    backgroundColor = 'background',
    keyboardAwareScrollViewProps,
    scrollViewProps,
    type = 'none',
    viewProps,
    children,
    safeAreaInsets = { top: false, bottom: false, left: false, right: false },
  } = props;

  const styles = useScreenWrapperStyles({ color: backgroundColor });

  const safeAreaStyles = useMemo(
    () =>
      StyleSheet.flatten([
        ...(safeAreaInsets.left ? [styles.left] : []),
        ...(safeAreaInsets.right ? [styles.right] : []),
        ...(safeAreaInsets.top ? [styles.top] : []),
        ...(safeAreaInsets.bottom ? [styles.bottom] : []),
      ]),
    [safeAreaInsets, styles],
  );

  if (type === 'none')
    return (
      <View style={[styles.view, styles.horizontalSpacing, safeAreaStyles]} {...viewProps}>
        {children}
      </View>
    );

  if (type === 'scroll')
    return (
      <ScrollView style={[styles.scroll, safeAreaStyles]} contentContainerStyle={styles.horizontalSpacing} {...scrollViewProps}>
        {children}
      </ScrollView>
    );

  if (type === 'keyboard')
    return (
      <KeyboardAwareScrollView
        style={[styles.scroll, safeAreaStyles]}
        contentContainerStyle={styles.horizontalSpacing}
        {...keyboardAwareScrollViewProps}>
        {children}
      </KeyboardAwareScrollView>
    );
};

export default ScreenWrapper;
