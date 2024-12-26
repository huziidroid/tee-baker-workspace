import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

import { useStyles } from '@/styles';

export const useHomeStyles = () => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      promptInput: { backgroundColor: colors.inverseOnSurface },
      promptInputOutline: { borderWidth: 0 },
      section: { rowGap: 24 },
      horizontalGap: { paddingHorizontal: 16 },
      subSection: { rowGap: 16 },
    }),
  );
};
