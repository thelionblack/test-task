import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCurrencyResponse } from '@/types';
import { BaseQueryError, BaseQueryResult } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinbase.com/v2' }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<any, string>({
      query: () => '/currencies'
    })
  })
});

export const { useGetCurrenciesQuery } = currencyApi;
