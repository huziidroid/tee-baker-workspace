import { Control } from 'react-hook-form';
import { HelperTextProps, TextInputProps } from 'react-native-paper';

export interface AppTextInputProps extends TextInputProps {
  flex?: number;
  width?: number;
  isRequired?: boolean;

  helperText?: string;
  helperTextProps?: HelperTextProps;
}

export interface AppTextFormInputProps extends Omit<AppTextInputProps, 'value' | 'onChangeText' | 'helperText' | 'error'> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  handleOnChange?: (text: string) => void;
}
