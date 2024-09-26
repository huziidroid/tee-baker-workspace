import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';
import { useAppTheme } from '@/assets';
import { URBANIST_FONTS } from '@/assets/theme';

export const useAppTextInputStyles = ({ isFlat }: { isFlat: boolean }) => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      inputStyle: { ...(isFlat && { height: 45 }), backgroundColor: colors.background },
      contentStyle: {
        ...(isFlat && { paddingLeft: 0, paddingRight: 0 }),
        fontSize: 14,
        fontFamily: URBANIST_FONTS.regular,
      },
      outlineStyle: { borderRadius: 6, borderWidth: 1 },
    }),
  );
};
