import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinbase.com/v2' }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<{ data: { name: string; id: string } }, string>({
      query: () => '/currencies'
    })
  })
});

export const { useGetCurrenciesQuery } = currencyApi;
