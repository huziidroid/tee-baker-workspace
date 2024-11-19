import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { PropsWithChildren } from 'react';

import { useErrorHandler } from '../handlers/error-handler';
import { QueryErrorResponse } from './react-query-base.type';

const ReactQueryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error: Error) => {
      if (axios.isAxiosError(error)) {
        const errorResponse = (error as AxiosError<QueryErrorResponse>).response?.data;
        useErrorHandler.setState(() => ({ error: errorResponse }));
      }
    },
  }),
  queryCache: new QueryCache({
    onError: (error: Error) => {
      if (axios.isAxiosError(error)) {
        const errorResponse = (error as AxiosError<QueryErrorResponse>)?.response?.data;
        useErrorHandler.setState(() => ({ error: errorResponse || { error: 'true', message: error?.message, statusCode: error?.status } }));
      }
    },
  }),
});

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={ReactQueryClient}>{children}</QueryClientProvider>;
};
