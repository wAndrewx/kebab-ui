import { useState } from 'react';

export const useInput = () => {
  const [data, setData] = useState('');

  const handleData = e => {
    setData(e.target.value);
  };

  const resetField = e => {
    setData('');
  };

  return { data, handleData, resetField };
};
