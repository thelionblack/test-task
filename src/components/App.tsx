import React from 'react';
import '@/assets/styles/index.css';
import Logo from '@/components/Logo';
import { useGetCurrenciesQuery } from '@/api/currencyApi';

const App = () => {
  const { data, error, isLoading, isSuccess } = useGetCurrenciesQuery('');

  if (isSuccess) {
    console.log(data);
  }

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
        </div>
      </div>
      <div className='block__element--bottom'>
        <p className='currency__title'></p>
      </div>
    </div>
  );
};

export default App;
