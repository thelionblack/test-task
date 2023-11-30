import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useGetCurrenciesQuery } from '@/api/currencyApi';
import { selectAllCurrencyState, setCurrency } from '@/store/slices/currencySlices';
import Logo from '@/components/Logo';
import CurrencySelect from '@/components/CurrencySelect';
import KittenImage from '@/components/KittenImage';
import '@/assets/styles/index.css';

enum EClassNames {
  block = 'block',
  blockElementTop = `${EClassNames.block}__element--top`,
  blockElementBottom = `${EClassNames.block}__element--bottom`,
  header = 'header',
  apiError = 'api__error',
  currencyTitle = 'currency__title'
}

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
    return <div className={EClassNames.apiError}>Error: api error {JSON.stringify(error)}</div>;
  }

  return (
    <div className={EClassNames.block}>
      <div className={EClassNames.blockElementTop}>
        <div className={EClassNames.header}>
          <Logo />
          <CurrencySelect />
        </div>
      </div>

      <div className={EClassNames.blockElementBottom}>
        <p className={EClassNames.currencyTitle}>
          {currencyOptions.find((option) => option.id === selectedValue)?.name || ''}
        </p>
      </div>

      <KittenImage />
    </div>
  );
};

export default App;
