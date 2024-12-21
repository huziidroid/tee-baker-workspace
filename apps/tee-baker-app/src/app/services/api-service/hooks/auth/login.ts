import { useQueryClient } from '@tanstack/react-query';
import { API_URLS, useAppMutation } from 'react-utils';
import { IAccessTokenResponse, ILoginUser } from 'shared-utils';

import { KeychainService } from '@/services';

import { APP_TOKEN_KEY } from '@/utils';

import { ApiClient } from '../../config';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useAppMutation<IAccessTokenResponse, ILoginUser>({
    mutationKey: [API_URLS.login],
    showLoading: true,
    mutationFn: payload => ApiClient.post(API_URLS.login, payload),
    onSuccess: async data => {
      const token = data.data.access_token;
      if (token) await KeychainService.setToken(APP_TOKEN_KEY, token);
      queryClient.invalidateQueries({ queryKey: [API_URLS.verifySession] });
    },
  });
};
