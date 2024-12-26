import { DimensionValue, ImageProps } from 'react-native';

import { StandardPhotoType, TeeStyleType } from '@/types';

export type TeeCardSizeType = { size: DimensionValue; heightOffset?: number };

export interface ITeeCardProps {
  image: Omit<StandardPhotoType, 'type'>;
  label?: string;
  imageProps?: Omit<ImageProps, 'source'>;
  cardSize?: TeeCardSizeType;
  onPress?: (teeStyle: Omit<StandardPhotoType, 'type'>) => void;
}

export interface ITeeStyleListProps {
  teeStyles: TeeStyleType[];
  cardSize?: TeeCardSizeType;
  createable?: boolean;
}

export interface IUploadTeeStyleButton {
  label?: string;
  onSelectImage?: (image: StandardPhotoType) => void;
  cardSize?: TeeCardSizeType;
}
