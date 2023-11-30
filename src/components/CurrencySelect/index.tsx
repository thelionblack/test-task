import React, { useState } from 'react';

const CurrencySelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (value: string) => {
    setIsOpen(false);
  };

  return <div></div>;
};

export default CurrencySelect;
