import { API_URLS, QueryResponse, useAppQuery } from 'react-utils';
import { IUser } from 'shared-utils';

import { ApiClient } from '../../config';

export const useVerifySession = () => {
  return useAppQuery<IUser>({
    queryKey: [API_URLS.verifySession],
    showLoading: true,
    queryFn: () => ApiClient.get<QueryResponse<IUser>>(API_URLS.verifySession),
  });
};
