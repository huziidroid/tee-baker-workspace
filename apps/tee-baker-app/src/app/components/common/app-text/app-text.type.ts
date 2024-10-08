import { TextProps } from 'react-native';

export type AppTextVariants = 'thin' | 'regular' | 'medium' | 'bold' | 'italic-thin' | 'italic-regular' | 'italic-medium' | 'italic-bold';
export interface AppTextProps {
  onPress?: () => void;
  leftAccessory?: React.ReactElement;
  rightAccessory?: React.ReactElement;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  textDecorationLine?: 'underline' | 'none' | 'line-through';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  variant?: AppTextVariants;
  color?: ReactNativePaper.ThemeColorsKeys;
  size?: number;
  textProps?: TextProps;
  numberOfLines?: number;
  isLoading?: boolean;
}
