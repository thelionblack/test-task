import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TCurrencyOptions } from '@/types';

type CurrencyState = {
  currencyOptions: TCurrencyOptions[];
  selectedValue: string;
};

const initialState: CurrencyState = {
  currencyOptions: [],
  selectedValue: ''
};

export const currencySlice = createSlice({
  name: 'currencySlice',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<TCurrencyOptions[]>) => {
      state.currencyOptions = action.payload;
    },
    setSelectedValue: (state, action: PayloadAction<string>) => {
      state.selectedValue = action.payload;
    }
  }
});

export const { setCurrency, setSelectedValue } = currencySlice.actions;
export default currencySlice.reducer;
