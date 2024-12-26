import { IconProps } from 'react-native-vector-icons/Icon';

export type IconType =
  | 'Feather'
  | 'FontAwesome'
  | 'Ionicons'
  | 'Foundation'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Entypo'
  | 'AntDesign'
  | 'Octicons'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'SimpleLineIcons'
  | 'EvilIcons';

export type VectorIconType = {
  iconType: IconType;
} & IconProps;

export type SVGIconType = {
  height?: string;
  width?: string;
};

export type BottomTabConfigType = {
  label: string;
  name: string;
  component: () => JSX.Element;
  icon: { type: IconType; name: string };
};

export type StandardPhotoType = { uri: string; type: string; name: string };
export type TeeStyleType = {
  label: string;
  styleImage: Omit<StandardPhotoType, 'type'>;
};
