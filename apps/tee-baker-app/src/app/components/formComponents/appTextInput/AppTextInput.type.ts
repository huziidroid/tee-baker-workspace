import { TextInputProps } from 'react-native-paper';

export interface AppTextInputProps extends TextInputProps {
  flex?: number;
  width?: number;
  isRequired?: boolean;
}
