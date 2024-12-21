import { useQueryClient } from '@tanstack/react-query';
import { API_URLS, useAppMutation, useSessionHandler } from 'react-utils';
import { IAccessTokenResponse, IRegisterUser } from 'shared-utils';

import { KeychainService } from '@/services';

import { APP_TOKEN_KEY } from '@/utils';

import { ApiClient } from '../../config';

export const useSignup = () => {
  const { dispatch } = useSessionHandler();
  const queryClient = useQueryClient();

  return useAppMutation<IAccessTokenResponse, IRegisterUser>({
    mutationKey: [API_URLS.signup],
    mutationFn: payload => ApiClient.post(API_URLS.signup, payload),
    onSuccess: async data => {
      const token = data.data.access_token;

      if (token) {
        await KeychainService.setToken(APP_TOKEN_KEY, token);
        dispatch(null, true); // marking user account to be true.
        queryClient.invalidateQueries({ queryKey: [API_URLS.verifySession] });
      }
    },
  });
};
