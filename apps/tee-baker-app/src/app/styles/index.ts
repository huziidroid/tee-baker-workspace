import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

export const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    flex1: { flex: 1 },
    row: { flexDirection: 'row', alignItems: 'center' },
    alignCenter: { alignItems: 'center' },
    selfCenter: { alignSelf: 'center' },
    justifyBetween: { justifyContent: 'space-between' },
    borderRadiusSm: { borderRadius: 8 },
    borderRadiusMd: { borderRadius: 12 },
    borderRadiusLg: { borderRadius: 16 },
  });

export const useGlobalStyles = () => {
  const { colors } = useAppTheme();

  const styles = useMemo(() => makeStyles(colors), [colors]);
  return styles;
};

export type GlobalStylesType = ReturnType<typeof useGlobalStyles>;
export { useStyles } from './useStyles';
