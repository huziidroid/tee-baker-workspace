import { StyleSheet } from 'react-native';

import { useAppTheme } from '@/assets';

import { useGlobalStyles, useStyles } from '@/styles';

import { TeeCardSizeType } from './tee-style-list.types';

export const useTeeStyleListStyles = ({ size = 130, heightOffset = 20 }: TeeCardSizeType) => {
  const { colors } = useAppTheme();
  const styles = useGlobalStyles();

  return useStyles(
    StyleSheet.create({
      listContent: { paddingHorizontal: 16 },
      listHeaderStyle: { marginRight: 12 },
      teeStyleImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceVariant,
        ...styles.borderRadiusSm,
      },
      teeCard: {
        width: size,
        height: Number(size) + heightOffset,
        rowGap: 8,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      uploadButton: {
        width: size,
        height: Number(size) - 7,
        rowGap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondaryContainer,
        ...styles.borderRadiusSm,
      },
    }),
  );
};
