import { Platform } from 'react-native';

import { AppleIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '@/components/svgIcons';

export const isIOS = Platform.OS === 'ios';

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
