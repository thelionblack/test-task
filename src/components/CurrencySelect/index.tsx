import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSelectedValue, selectAllCurrencyState } from '@/store/slices/currencySlices';

const ArrowDownIcon = lazy(() => import('@/components/ArrowDownIcon/ArrowDownIcon'));

enum EClassNames {
  select = 'select',
  main = `${EClassNames.select}-main`,
  open = 'open',
  selected = 'selected',
  options = `${EClassNames.select}__options`,
  option = `${EClassNames.options}-item`
}

const CurrencySelect = () => {
  const { selectedValue, currencyOptions } = useAppSelector(selectAllCurrencyState);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currencyOptions.length > 0) {
      dispatch(setSelectedValue(currencyOptions[0].id));
    }
  }, [currencyOptions]);

  const handleSelectChange = (value: string) => () => {
    dispatch(setSelectedValue(value));
    setIsOpen(false);
  };

  return (
    <div className={EClassNames.select}>
      <div
        className={`${EClassNames.main} ${isOpen ? EClassNames.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedValue || ''}
        <Suspense>
          <ArrowDownIcon />
        </Suspense>
      </div>
      {isOpen && (
        <ul className={EClassNames.options}>
          {currencyOptions.map((option) => (
            <li
              key={option.id}
              className={`${EClassNames.option} ${
                selectedValue === option.id ? EClassNames.selected : ''
              }`}
              onClick={handleSelectChange(option.id)}>
              {option.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencySelect;
