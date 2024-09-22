import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

import { useAppTheme } from '@/assets';

export const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    flex1: { flex: 1 },
    row: { flexDirection: 'row', alignItems: 'center' },
  });

export const useGlobalStyles = () => {
  const { colors } = useAppTheme();

  const styles = useMemo(() => makeStyles(colors), [colors]);
  return styles;
};

export type GlobalStylesType = ReturnType<typeof useGlobalStyles>;
export { useStyles } from './useStyles';
