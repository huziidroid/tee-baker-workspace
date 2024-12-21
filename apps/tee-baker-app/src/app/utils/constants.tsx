import { Platform } from 'react-native';

import { AppleIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '@/components/svg-icons';

export const isIOS = Platform.OS === 'ios';

export const APP_LANGUAGE_KEY = '@APP_LANGUAGE';
export const APP_TOKEN_KEY = '@APP_TOKEN';
export const APP_LANGUAGES = {
  ENGLISH: 'en',
  FRENCH: 'fr',
};

export const LOGIN_OPTIONS = [
  {
    label: 'Continue with Google',
    icon: <GoogleIcon />,
  },
  {
    label: 'Continue with Facebook',
    icon: <FacebookIcon />,
  },
  {
    label: 'Continue with Apple',
    icon: <AppleIcon />,
  },
  {
    label: 'Continue with Twitter',
    icon: <TwitterIcon />,
  },
];
