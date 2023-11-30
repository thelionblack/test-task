import React, { useEffect, lazy, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useGetCurrenciesQuery } from '@/api/currencyApi';
import { selectAllCurrencyState, setCurrency } from '@/store/slices/currencySlices';
import Logo from '@/components/Logo';
import CurrencySelect from '@/components/CurrencySelect';
import '@/assets/styles/index.css';

const KittenImage = lazy(() => import('@/components/KittenImage'));

enum EClassNames {
  block = 'block',
  blockElementTop = `${EClassNames.block}__top`,
  blockElementBottom = `${EClassNames.block}__bottom`,
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
    <section className={EClassNames.block}>
      <header className={EClassNames.blockElementTop}>
        <div className={EClassNames.header}>
          <Logo />
          <CurrencySelect />
        </div>
      </header>

      <footer className={EClassNames.blockElementBottom}>
        <p className={EClassNames.currencyTitle}>
          {currencyOptions.find((option) => option.id === selectedValue)?.name || ''}
        </p>
      </footer>

      <Suspense>
        <KittenImage />
      </Suspense>
    </section>
  );
};

export default App;
