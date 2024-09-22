import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';

export const useButtonStyles = () =>
  useStyles(
    StyleSheet.create({
      contentStyles: {
        color: 'red',
      },
    }),
  );
