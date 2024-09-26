import { StyleSheet } from 'react-native';

import { useStyles } from '@/styles';
import { useAppTheme } from '@/assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useScreenWrapperStyles = ({ color }: { color: ReactNativePaper.ThemeColorsKeys }) => {
  const { colors } = useAppTheme();
  const { bottom, left, right, top } = useSafeAreaInsets();

  const backgroundColor = colors[color] as string;

  return useStyles(
    StyleSheet.create({
      view: { flex: 1, backgroundColor },
      scroll: { backgroundColor },
      left: { paddingLeft: left },
      right: { paddingRight: right },
      top: { paddingTop: top },
      bottom: { paddingBottom: bottom },
    }),
  );
};
