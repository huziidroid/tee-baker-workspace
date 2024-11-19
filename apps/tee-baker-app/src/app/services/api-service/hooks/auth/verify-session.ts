import { API_URLS, IUser, useAppQuery } from 'shared-utils';

import { ApiClient } from '../../config';

export const useVerifySession = () => {
  return useAppQuery<IUser>({
    queryKey: [API_URLS.verifySession],
    showLoading: true,
    queryFn: () => ApiClient.get(API_URLS.verifySession),
  });
};
