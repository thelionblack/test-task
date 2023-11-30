import React, { useEffect } from 'react';
import '@/assets/styles/index.css';
import Logo from '@/components/Logo';
import { useGetCurrenciesQuery } from '@/api/currencyApi';
import { setCurrency } from '@/store/slices/currencySlices';
import { useAppDispatch } from '@/store/hooks';
import CurrencySelect from '@/components/CurrencySelect';

const App = () => {
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
        <div>
          <Logo />
          <CurrencySelect />
        </div>
      </div>
      <div className='block__element--bottom'>
        <p className='currency__title'></p>
      </div>
    </div>
  );
};

export default App;
