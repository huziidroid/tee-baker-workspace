import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';
import { URBANIST_FONTS } from '@/assets/theme';

import { useStyles } from '@/styles';

export const useAppDatePickerInputStyles = ({ isFlat }: { isFlat: boolean }) => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      inputStyle: { ...(isFlat && { height: 45 }), backgroundColor: colors.background },
      contentStyle: {
        ...(isFlat && { paddingLeft: 0, paddingRight: 0 }),
        fontSize: 14,
        fontFamily: URBANIST_FONTS.regular,
        marginRight: 0,
      },
      outlineStyle: { borderRadius: 6, borderWidth: 1 },
      iconStyle: { padding: 0, margin: 0, right: -17 },
    }),
  );
};
