import { Control } from 'react-hook-form';
import { CheckboxAndroidProps } from 'react-native-paper';

import { AppTextProps } from '@/components/common/app-text/app-text.type';

export interface AppCheckboxProps extends Omit<CheckboxAndroidProps, 'status' | 'onPress'> {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange: (state: { checked: boolean; indeterminate?: boolean }) => void;
  appTextProps?: AppTextProps;
}

export interface AppCheckboxFormInputProps extends Omit<AppCheckboxProps, 'checked' | 'onChange'> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}
