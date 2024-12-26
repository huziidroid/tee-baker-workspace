import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useAppTheme } from '@/assets';

import AppText from '@/components/common/app-text/app-text';

import { AddIcon } from '@/icons';

import { showToast, singlePictureSelect } from '@/utils';

import { DEFAULT_CARD_SIZE } from '../tee-style-list';
import { useTeeStyleListStyles } from '../tee-style-list.styles';
import { IUploadTeeStyleButton } from '../tee-style-list.types';

const UploadTeeStyleButton = (props: IUploadTeeStyleButton) => {
  const { label = 'Upload', onSelectImage, cardSize = DEFAULT_CARD_SIZE } = props;

  const styles = useTeeStyleListStyles(cardSize);
  const { colors } = useAppTheme();

  const handleImageSelect = () => {
    singlePictureSelect(
      pickerResponse => {
        const image = pickerResponse.assets[0];
        if (onSelectImage) onSelectImage({ uri: image.uri, type: image.type, name: 'photo' });
      },
      error => showToast(error, 'error'),
    );
  };

  return (
    <TouchableOpacity style={styles.uploadButton} activeOpacity={0.7} onPress={handleImageSelect}>
      <AddIcon size={32} color={colors.primary} />
      <AppText size={12} variant="medium" color="primary">
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default UploadTeeStyleButton;
