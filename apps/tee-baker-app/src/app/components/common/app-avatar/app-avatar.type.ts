import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

import { StandardPhotoType } from '@/types';

type ImageSourceType = ImageSourcePropType | ((props: { size: number }) => React.ReactNode);

export interface IAppAvatarProps {
  type: 'image' | 'icon' | 'text';
  image?: { source?: ImageSourceType; picker?: boolean; pickerXOffset?: number; pickerYOffset?: number; placeholder?: string | ImageSourceType };
  size?: number;
  icon?: { source?: IconSource };
  text?: { label?: string; labelStyle?: StyleProp<TextStyle>; labelColor?: string };
  style?: StyleProp<ViewStyle>;
  onImageSelect?: (image: StandardPhotoType) => void;
}
