import React from 'react';
import { Image, ImageProps } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { APP_IMAGES, useAppTheme } from '@/assets';

import { VectorIconType } from '@/types';

type SpecificIconType = Omit<VectorIconType, 'name' | 'iconType'>;
type ImageIconProps = Omit<ImageProps, 'src' | 'source'>;

const VectorIcon = (props: VectorIconType) => {
  const { iconType, ...rest } = props;
  const {
    colors: { onBackground },
  } = useAppTheme();

  switch (iconType) {
    case 'AntDesign':
      return <AntDesign color={onBackground} {...rest} />;
    case 'Entypo':
      return <Entypo color={onBackground} {...rest} />;
    case 'Feather':
      return <Feather color={onBackground} {...rest} />;
    case 'FontAwesome':
      return <FontAwesome color={onBackground} {...rest} />;
    case 'FontAwesome5':
      return <FontAwesome5 color={onBackground} {...rest} />;
    case 'FontAwesome6':
      return <FontAwesome6 color={onBackground} {...rest} />;
    case 'Foundation':
      return <Foundation color={onBackground} {...rest} />;
    case 'Ionicons':
      return <Ionicons color={onBackground} {...rest} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons color={onBackground} {...rest} />;
    case 'MaterialIcons':
      return <MaterialIcons color={onBackground} {...rest} />;
    case 'Octicons':
      return <Octicons color={onBackground} {...rest} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons color={onBackground} {...rest} />;
    case 'EvilIcons':
      return <EvilIcons color={onBackground} {...rest} />;
  }
};

export default VectorIcon;

export const EmailIcon = (props: SpecificIconType) => <VectorIcon iconType="Feather" name="email" {...props} />;
export const EditIcon = (props: SpecificIconType) => <VectorIcon iconType="MaterialIcons" name="edit" {...props} />;
export const PersonIcon = (props: SpecificIconType) => <VectorIcon iconType="FontAwesome" name="user-circle" {...props} />;
export const ArrowRightIcon = (props: SpecificIconType) => <VectorIcon iconType="MaterialCommunityIcons" name="arrow-right" {...props} />;
export const SendIcon = (props: SpecificIconType) => <VectorIcon iconType="Feather" name="send" {...props} />;
export const AddIcon = (props: SpecificIconType) => <VectorIcon iconType="Ionicons" name="add-outline" {...props} />;

export const AppIcon = (props: Omit<ImageIconProps, 'src' | 'source'>) => (
  <Image source={APP_IMAGES.appLogo} style={{ height: 80, width: 80 }} {...props} />
);

export const ChevronDownIcon = (props: SpecificIconType) => <VectorIcon iconType="Entypo" name="chevron-down" {...props} />;
export const ChevronUpIcon = (props: SpecificIconType) => <VectorIcon iconType="Entypo" name="chevron-up" {...props} />;
