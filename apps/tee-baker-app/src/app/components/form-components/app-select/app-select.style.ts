import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';
import { URBANIST_FONTS } from '@/assets/theme';

import { useStyles } from '@/styles';

export const useAppSelectStyles = ({ disabled, focused, error }: { disabled: boolean; focused: boolean; error: boolean }) => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      gapMd: { rowGap: 10 },
      select: { fontSize: 14, fontFamily: URBANIST_FONTS['regular'] },
      selectContainer: {
        borderBottomWidth: focused ? 2 : 0.2,
        borderBottomColor: error ? colors.error : focused ? colors.primary : colors.onSurfaceVariant,
        paddingBottom: 10,
        paddingHorizontal: 2,
      },
      placeholder: { fontSize: 14, color: disabled ? colors.onSurfaceDisabled : colors.onSurfaceVariant, fontFamily: URBANIST_FONTS['regular'] },
      helperText: { paddingVertical: 0, fontFamily: URBANIST_FONTS.regular },
    }),
  );
};
