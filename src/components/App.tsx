import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useGetCurrenciesQuery } from '@/api/currencyApi';
import { selectAllCurrencyState, setCurrency } from '@/store/slices/currencySlices';
import Logo from '@/components/Logo';
import CurrencySelect from '@/components/CurrencySelect';
import KittenImage from '@/components/KittenImage';
import '@/assets/styles/index.css';

const App = () => {
  const { currencyOptions, selectedValue } = useAppSelector(selectAllCurrencyState);
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
    return <div className='api__error'>Error: api error {JSON.stringify(error)}</div>;
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
