/* eslint-disable no-empty */
import { Alert, Linking } from 'react-native';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

/**
 * Selects an Image and return to success function
 * @param {Function} success
 * @param {Function} reject
 */
export const singlePictureSelect = async (success: (image: ImagePickerResponse) => void, reject: (error: string) => void) => {
  await launchImageLibrary({
    mediaType: 'photo',
    quality: 0.8,
    selectionLimit: 1,
  })
    .then(image => {
      const error = image.errorMessage;
      if (error) {
        reject(error);
        return;
      }
      success(image);
    })
    .catch(error => {
      if (error.code === 'E_NO_LIBRARY_PERMISSION') {
        openSettings(
          'User did not grant library permission',
          "You haven't granted permission for Image Library. Please Grant Permission for Image Selection",
        );
      }
    });
};

/**
 * Show Alert to open settings
 * @param {string} title
 * @param {string} message
 */
export const openSettings = (title: string, message: string) => {
  try {
    Alert.alert(title, message, [{ text: 'Open Settings', onPress: Linking.openSettings }]);
  } catch (error) {}
};

export const showToast = (message: string, type: 'success' | 'error' | 'info') => {
  let title = '';
  switch (type) {
    case 'success':
      title = 'Success';
      break;
    case 'error':
      title = 'Error';
      break;
    case 'info':
      title = 'Info';
      break;
    default:
      title = 'Info';
      break;
  }
  if (message) {
    Toast.show({ text1: title, text2: message, type: type, position: 'top' });
  }
};
