import { useState } from 'react';

export const useInput = () => {
  const [data, setData] = useState('');

  const handleData = e => {
    setData(e.target.value);
  };

  return { data, handleData };
};
