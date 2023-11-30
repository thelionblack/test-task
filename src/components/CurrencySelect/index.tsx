import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSelectedValue, selectAllCurrencyState } from '@/store/slices/currencySlices';
import ArrowDownIcon from '@/components/ArrowDownIcon/ArrowDownIcon';

const CurrencySelect = () => {
  const { selectedValue, currencyOptions } = useAppSelector(selectAllCurrencyState);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currencyOptions.length > 0) {
      dispatch(setSelectedValue(currencyOptions[0].id));
    }
  }, [currencyOptions]);

  const handleSelectChange = (value: string) => {
    dispatch(setSelectedValue(value));
    setIsOpen(false);
  };

  return (
    <div className='select'>
      <div className={`select-main ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {selectedValue ? selectedValue : ''}
        <ArrowDownIcon />
      </div>
      {isOpen && (
        <ul className='select__option'>
          {currencyOptions.map((option) => (
            <li
              key={option.id}
              className={`option ${selectedValue === option.id ? 'selected' : ''}`}
              onClick={() => handleSelectChange(option.id)}>
              {option.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencySelect;
