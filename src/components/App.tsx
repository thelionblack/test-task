import React, { useEffect } from 'react';
import '@/assets/styles/index.css';
import Logo from '@/components/Logo';
import { useGetCurrenciesQuery } from '@/api/currencyApi';
import { setCurrency } from '@/store/slices/currencySlices';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import CurrencySelect from '@/components/CurrencySelect';
import KittenImage from '@/components/KittenImage';

const App = () => {
  const { currencyOptions, selectedValue } = useAppSelector((state) => state.currencySlice);
  const dispatch = useAppDispatch();
  const { data: currencyDate, error, isLoading, isSuccess } = useGetCurrenciesQuery('');

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrency(currencyDate.data));
    }
  }, [isSuccess]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: api error</div>;
  }

  return (
    <div className='block'>
      <div className='block__element--top'>
        <div className='header'>
          <Logo />
          <CurrencySelect />
        </div>
      </div>

      <div className='block__element--bottom'>
        <p className='currency__title'>
          {currencyOptions.find((option) => option.id === selectedValue)?.name || ''}
        </p>
      </div>

      <KittenImage />
    </div>
  );
};

export default App;
