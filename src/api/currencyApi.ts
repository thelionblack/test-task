import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCurrencyResponse } from '@/types';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinbase.com/v2' }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<TCurrencyResponse, string>({
      query: () => '/currencies'
    })
  })
});

export const { useGetCurrenciesQuery } = currencyApi;
