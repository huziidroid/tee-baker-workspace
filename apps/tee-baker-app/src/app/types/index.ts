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
  | 'SimpleLineIcons';

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
