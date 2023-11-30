import { configureStore } from '@reduxjs/toolkit';
import { currencyApi } from '@/api/currencyApi';
import currencySlice from '@/store/slices/currencySlices';

export const store = configureStore({
  reducer: {
    currencySlice,
    [currencyApi.reducerPath]: currencyApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
