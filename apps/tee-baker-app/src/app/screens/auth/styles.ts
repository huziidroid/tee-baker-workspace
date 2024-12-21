import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

import { useStyles } from '@/styles';

export const useAuthStyles = () => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      spacingMd: { marginTop: 20 },
      gapMd: { rowGap: 20 },
      gapLg: { rowGap: 30 },
      gapSm: { rowGap: 10 },
      loginOptions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
      signupStepper: { height: 12, width: 200, borderRadius: 8 },
      scrollContent: { paddingHorizontal: 16, paddingBottom: 30 },
      buttonContainer: { justifyContent: 'flex-end', marginBottom: 50, paddingHorizontal: 16, backgroundColor: colors.background },
      buttonGroup: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        columnGap: 12,
        marginBottom: 40,
        paddingHorizontal: 16,
        backgroundColor: colors.background,
      },
    }),
  );
};
